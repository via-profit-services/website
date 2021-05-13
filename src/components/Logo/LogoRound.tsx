import React from 'react';
import { useTheme } from 'styled-components';

export type LogoRoundProps = {
  variant: 'round';
  primary?: string;
  width?: string | number;
  height?: string | number;
}

const LogoRound: React.FC<LogoRoundProps> = (props) => {
  const { primary, width, height } = props;
  const theme = useTheme();
  const fillPrimary = typeof primary === 'string' ? primary : theme.color.text.primary;
  const svgWidth = typeof width !== 'undefined' ? width : '100%';
  const svgHeight = typeof height !== 'undefined' ? height : '100%';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1009 995"
      width={svgWidth}
      height={svgHeight}
      fill="none"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M505.585.296c263.05 0 479.141 200.819 503.195 457.57l-1.15-.382s-9.638-3.531-14.696-5.44c-5.059-2.004-4.295-5.44-7.636-5.345-3.436 0-5.154-1.336-5.154-1.336s1.814-2.482 4.772-6.872c2.959-4.391 6.3-10.69 6.3-10.69s-1.718 2.958-4.486 3.627c-2.673.668-16.608 2.099-16.608 2.099s1.05-3.34 1.146-5.822c.095-2.481.191-6.872.191-6.872s-2.291.096-4.772 1.336c-2.482 1.146-8.877 4.2-11.454 1.623-2.577-2.482-4.772-9.449-4.009-12.885.668-3.341 2.578-3.627 3.818-3.914 1.337-.286 4.486-.191 4.486-.191s-6.204-3.341-9.831-4.868c-3.627-1.527-9.354-4.295-9.354-7.635 0-3.341 1.05-4.391.192-6.968-.86-2.577-2.482-4.2-2.482-4.2s-.573 3.532-2.386 3.532c-1.909 0-7.35-2.577-12.695-8.59-5.249-6.013-5.822-6.491-9.163-7.731-3.436-1.241-10.594-7.445-10.69-12.122-.095-4.677 1.432-7.063 1.432-7.063s-1.527.954-4.867 3.722c-3.341 2.768-4.773 2.482-7.159 2.1-2.482-.477-4.295-1.431-3.722-5.917.476-4.486 2.481-9.45 2.481-12.122 0-2.673-.859-4.486-.859-4.486s-.572 5.822-2.863 5.345c-2.291-.478-5.25-4.486-6.777-6.109-1.432-1.527.096.478-1.813 2.482-1.91 2.004-4.295 4.295-6.777 0s-10.499-22.907-9.927-27.393c.669-4.486-.095-7.159-.095-7.159s-.381 2.863-1.336 5.441c-.955 2.577-.859 6.108-4.677 5.631-3.723-.382-9.258-3.054-9.258-3.054s18.421-41.233 15.653-61.659c-2.672-20.33-8.877-48.677-46.483-51.827-37.606-3.054-49.918-4.868-69.675 3.15-19.758 7.922-38.847 25.197-38.847 25.197s-91.342-34.36-136.297-32.26c-44.86 2.099-144.22 7.922-202.728 30.542-58.509 22.717-49.251 14.699-74.83 33.311-25.58 18.422-30.448 21.476-32.929 24.339-2.482 2.768-18.612 23.671-24.721 28.634-6.204 4.868-7.445 7.349-12.981 8.59-5.536 1.241-8.972 1.909-9.258 3.723-.286 1.813-1.24 6.776-1.24 11.071 0 4.296-1.527 14.795-4.868 18.803-3.436 4.009-13.554 16.99-13.554 16.99s1.909 0 6.109.572l4.295.668s-9.258 7.064-26.439 21.571c-17.275 14.413-31.497 29.207-41.901 36.938-10.499 7.731-16.703 13.554-25.293 17.849s-28.443 17.657-32.738 22.429c-4.2 4.677-5.822 4.964-6.681 6.586-.955 1.527-3.913 7.159-2.482 11.645 1.432 4.581 6.777 24.72 8.017 25.293 1.241.573 1.241.668 1.623 1.05.286.382 2.673 3.054 3.436 3.723.86.668 1.91 1.336 2.482 1.622.477.191.859.096 1.05.382.19.286.477.859 1.05.668.477-.191.477-1.241.764-1.623.19-.381 2.1-1.813 4.2-1.909 2.099-.095 2.576.382 3.435.669.86.286 1.05.381 1.05.381s-.096 6.872.096 8.781c.19 1.814.763 3.914.859 5.154.095 1.241-.096 6.395-.096 7.827 0 1.337.096 14.603 2.482 18.23 2.481 3.723 5.249 6.777 5.631 8.304.286 1.623 4.009 4.009 5.154 6.491 1.241 2.481 3.532 8.399 7.731 8.685 4.2.191 15.654-.477 18.135-.572 2.386-.096 2.864-.478 3.722-.669.955-.286 4.391 0 4.391 0s1.623 5.25 3.532 7.255c1.813 2.004 6.299 3.245 6.299 3.245s-1.145-6.014-.572-7.541c.668-1.527-.096-3.913 5.535-4.486 5.536-.668 52.305.287 52.305.287s3.341 2.481 5.25 2.481c2.004 0 12.598-2.195 15.08 3.723 2.482 5.822-6.013 6.108-8.113 6.394-2.004.192-7.444.764-9.067 1.337-1.527.572-4.391 1.432-4.391 1.432s.286 2.863-4.772 4.486c-5.059 1.718-7.063 3.817-7.54 4.772-.478.954-3.723 5.536-4.868 6.204-1.241.573-6.681 2.386-8.59 2.195-1.909-.095-6.968-1.909-9.354-5.917-2.291-4.009-2.386-5.536-2.386-5.536s-3.723 4.772-2.482 8.494c1.241 3.818 2.959 7.159 4.009 10.595 1.05 3.436 3.054 8.972 1.05 10.403-1.909 1.337-5.059 2.578-5.059 2.578s-.191 6.394.096 9.735c.191 3.245.859 6.777 1.05 8.304.095 1.527-.573 4.391.095 5.345.573.955 12.313 23.384 28.921 29.588 16.607 6.109 25.293 9.831 36.365 8.018 11.071-1.909 28.634-7.445 31.115-7.445 2.482 0 6.395-.573 7.54 0 1.241.668 4.582 2.482 4.582 2.482s-.287-2.291-.859-3.246c-.573-1.049-.955-2.195-.287-3.149.573-.955 1.241-2.1 6.3-2.482 4.963-.381 15.558-2.1 20.616-1.527 5.059.573 5.059 3.055 5.059 3.055l-.955 4.008s.287-.954 2.768-.954c2.482 0 5.25 3.054 8.018 8.017 2.768 4.868 4.39 8.304 5.536 9.259 1.24.859 2.577 0 4.104.763 1.527.764 1.527.859 2.386 1.241.859.381 2.768 1.05 2.768 1.05s.191 4.104 1.05 6.395c.954 2.29 2.004 4.676 2.004 4.676s-.763-4.39 1.05-6.013c1.718-1.718 6.682-4.39 8.877-.095 2.195 4.199 1.431 4.486 1.527 5.918 0 1.431-.095 1.527.286 2.29.382.668 1.337 2.1 1.337 2.1s-.478-2.959.286-3.341c.859-.381 2.768.764 4.295 1.528 1.623.668 5.154.668 5.154.668s1.432 4.295 1.909 6.872c.382 2.482-.286.954 2.1.382 2.386-.669 4.009-1.051 4.009-1.051s.191 3.532.095 7.636c0 4.104.287 11.263-2.29 14.222-2.482 2.959-4.964 3.817-4.964 3.817s3.437.765 6.968.573c3.532-.191 9.449-.286 11.263 2.195 1.908 2.482 1.908 5.536 1.908 5.536s-2.481 1.336-4.486 2.1a158.806 158.806 0 01-4.772 1.623s1.337 1.622 1.814 2.099c.477.382 1.909.955 1.909.955v3.722l-1.146-.095s.478 4.295 1.146 5.631c.572 1.241 1.527 1.145 1.527 1.145l5.249-.572h3.055s-.859 2.863-1.623 4.39c-.859 1.527-2.959 6.109-5.154 6.109s-5.631-.096-5.631-.096 3.531 2.196 5.249 2.768c1.718.572 2.768.286 4.104-.191 1.336-.477 3.055-1.241 3.055-1.241s.381 1.814-.478 3.437c-.763 1.527-.763 2.672-.763 2.672v9.926l3.054-1.24s1.623 2.959 1.623 5.154c0 2.196-.382 6.49-.382 8.113 0 1.623-.764 5.25-.859 9.258-.096 3.914.859 5.823 1.813 10.786.955 4.868 2.768 16.607.955 18.421-1.909 1.909-6.395 3.818-8.018 6.108-1.622 2.291-3.149 5.059-3.149 5.059s5.345-4.486 8.972-4.295c3.722.286 10.308-.191 10.785 2.386.477 2.673 1.241 8.018-1.241 9.259-2.481 1.24-15.08.476-15.08.476s.286 5.059 3.149 5.727c2.864.764 5.346.382 6.682 3.627 1.336 3.341 1.431 5.727-1.432 6.204-2.959.477-7.159 1.813-8.208 3.054-.955 1.241-2.959 5.536-2.959 5.536s2.195-2.481 3.722-1.813c1.432.668 4.104 2.482 5.345 4.772 1.241 2.386 2.004 3.245-.095 5.059-2.196 1.909-7.541 2.959-10.595 5.154-3.054 2.291-2.291 4.2-3.341 5.345-1.05 1.145 3.055-3.341 5.25-1.718 2.195 1.718 3.436 1.146.954 4.2-2.481 3.054-4.39 3.627-4.39 3.627s.572.572 1.909.764c1.336.191 3.34.381 3.34.381s-.763 2.291-1.813 3.722c-1.05 1.432-4.582 5.059-4.582 5.059s1.146 1.241 2.577 1.909c1.432.572 3.532 1.146 3.532 1.146s-.859 2.386-1.813 3.817c-.955 1.527-4.009 4.486-4.009 4.486s.954.382 2.1 1.814c1.145 1.431 2.481 2.577 3.722 2.768 1.24.095 3.245.478 3.245.478s-1.05 5.154-3.341 7.349c-2.29 2.195-4.772 5.154-4.772 5.154s-1.623-.381-2.004.191c-.382.572-.859 2.768-1.718 3.532-.859.763-6.204 5.535-6.204 5.535s-3.341 3.341-3.818 5.632c-.477 2.386-.287 4.963-.287 4.963s3.245-7.159 7.254-7.445c3.914-.286 4.2.286 6.109.859 1.909.668 4.295 4.677 4.295 4.677s-5.059 3.913-6.968 6.872a72.554 72.554 0 00-3.436 6.013s1.241.382 2.196 1.05c.954.669 2.481 2.005 2.481 2.005l.096 1.145C159.497 937.007.197 739.91.197 505.685.197 226.504 226.405.296 505.585.296z" fill={fillPrimary}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M506.54 845.665s-23.576-9.068-39.324-14.508c-15.749-5.44-35.888-11.835-38.084-10.213-2.195 1.527-1.813 1.337-2.768 3.341-.858 2.1-2.099 5.058-2.099 5.058s-6.872-.572-8.4 3.627c-1.622 4.295-2.004 9.831-1.717 20.235.286 10.595 1.717 33.693 3.531 38.465 1.814 4.868 5.441 15.176 10.499 26.916 5.154 11.74 6.968 17.848 8.781 23.575 1.814 5.727 5.536 10.69 8.304 10.595 2.673-.191 29.779-11.55 35.888-15.176 6.109-3.627 22.43-18.04 28.729-25.962 6.3-7.826 8.113-10.881 8.113-10.881s3.723-.381 6.681-1.05c2.959-.572 11.74-2.768 11.74-2.768s.669 2.005 3.723 1.432c2.959-.572 8.208-2.386 8.208-2.386s4.295.954 5.918.572c1.718-.381 5.822-3.245 5.822-3.245s17.181 6.872 26.248 9.258c9.067 2.482 17.657 4.868 24.625 5.441 6.872.668 9.449.668 9.449.668s8.018.859 13.172.764c5.154-.096 17.466-1.431 23.48-4.39 6.108-3.055 10.308-4.773 11.549-6.682 1.24-1.909.191-8.781-1.718-13.458s-4.2-8.494-8.591-13.171c-4.39-4.582-6.967-17.849-8.494-23.003-1.432-5.154-5.727-21.189-10.213-33.215-4.581-12.122-14.508-33.597-17.562-38.37-2.959-4.867-6.109-10.212-10.595-9.926-4.581.381-5.726 3.531-13.076 8.972-7.254 5.44-22.334 16.894-31.402 26.629-9.067 9.64-17.466 18.135-21.093 23.194a3488.01 3488.01 0 00-9.068 12.981s-5.727.667-10.117.667c-4.391 0-9.545 1.05-12.695 2.1-3.149 1.05-7.444 3.913-7.444 3.913v.001z" fill={fillPrimary}/></svg>
  )
}

export default LogoRound;

