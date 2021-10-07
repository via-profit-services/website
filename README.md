# @via-profit-services documentation Website

## Setup

Install dependencies using `yarn`:

```bash
$ yarn start
```

Now you should create configuration file. Make a copy of the `.env.example` file and rename it to `.env`:

```bash
$ cp .env.example .env
```

## Start in development mode

```bash
$ yarn start
```

The application will start using the address and port specified in the `.env` file.

## Debugging (VSCode)

1. To debug, first run the application in demeloper mode (`yarn start`).
2. Then go to debug tab in vscode and launch `Launch Chrome` configuration.
3. After starting Chrome browser, you need to attach to the debugger. To do this, run `Attach to Chrome` configuration

**Note: Before launch Chrome check the `.vscode/launch.json` file and set the right data in `url` key**:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      ...
      "url": "http://localhost:9000",
      ...
    }
  ]
}  
```


## Compile translations

```bash
$ yarn i18n
```

## Make production build

```bash
$ yarn build:dist
```