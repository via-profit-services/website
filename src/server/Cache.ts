import { EventEmitter } from 'events';

type CacheData<T = unknown> = {
  ttl: number;
  exp: number;
  payload: T;
};

type CacheRecords = Map<string, CacheData>;

interface CacheInterface {
  /**
   * Append value to cache\
   *
   * Example:
   * ```ts
   * set('foo','bar', '1 day');
   * set('foo','bar', '1d');
   * set('foo',['bar'], '5sec');
   * set('foo',12552, '2 months');
   * ```
   */
  set<T = unknown>(cacheKey: string, payload: T, ttl: number): this;
  has(cacheKey: string): boolean;
  get<T = unknown>(cacheKey: string): T | null;
  del(cacheKey: string): this;
  on<T = unknown>(
    event: 'set',
    callback: (cacheKey: string, payload: T) => void,
  ): this;
  on<T = unknown>(
    event: 'del',
    callback: (cacheKey: string, payload: T) => void,
  ): this;
}

class Cache extends EventEmitter implements CacheInterface {
  private intervalID: NodeJS.Timer = null;
  private records: CacheRecords = new Map();
  private minIntervalValue = 5000;
  private currentIntervalValue = 5000;

  public set<T = unknown>(
    cacheKey: string,
    payload: T,
    ttl: string | number,
  ): this {
    const ttlValue = this.parseTime(ttl);
    this.records.set(cacheKey, {
      ttl: ttlValue,
      exp: new Date().getTime() + ttlValue,
      payload,
    });
    this.resetInterval();
    this.emit('set', cacheKey, payload);

    return this;
  }

  public has(cacheKey: string) {
    return this.records.has(cacheKey);
  }

  public get<T = unknown>(cacheKey: string): T | null {
    const record = this.records.get(cacheKey);

    return record ? (record.payload as T) : null;
  }

  public del(cacheKey: string): this {
    if (this.records.has(cacheKey)) {
      this.emit('del', cacheKey, this.records.get(cacheKey).payload);
      this.records.delete(cacheKey);
      this.resetInterval();
    }

    return this;
  }

  private resetInterval(): this {
    this.records.forEach(record => {
      if (
        record.ttl <= this.currentIntervalValue &&
        record.ttl > this.minIntervalValue
      ) {
        this.currentIntervalValue = record.ttl;
      }
    });

    if (this.intervalID) {
      clearInterval(this.intervalID);
    }

    if (this.records.size) {
      this.intervalID = setInterval(() => {
        this.checkExpires();
      }, this.currentIntervalValue);
    }

    return this;
  }

  private checkExpires(): this {
    const time = new Date().getTime();
    this.records.forEach((record, key) => {
      if (time > record.exp) {
        this.del(key);
      }
    });

    return this;
  }

  private parseTime(input: string | number): number {
    const regex = new RegExp(
      /^(\d*\.?\d+) *(month?|months?|milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/,
    );
    const value = String(input).toLowerCase();
    const match = regex.exec(value);
    const time: Record<string, number> = {
      ms: 1,
      mo: 26298e5,
      s: 1e3,
      m: 6e4,
      h: 36e5,
      d: 864e5,
      w: 6048e5,
      y: 315576e5,
    };

    if (value.length > 100 || !match || match.length < 3) {
      return 0;
    }

    const type = match[2] || 'ms';
    let key = type[0];

    if (type.match(/^(ms|mil)/)) {
      key = 'ms';
    }

    if (type.match(/^mo/)) {
      key = 'mo';
    }

    const factor = time[key];

    return parseFloat(match?.[1] || '0') * factor;
  }
}

export default Cache;
