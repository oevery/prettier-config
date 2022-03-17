# @oevery/prettier-config

MoonBegonia(oevery)'s default prettier config.

## Installation

```sh
npm install @oevery/prettier-config prettier --save-dev

yarn add @oevery/prettier-config prettier --dev

pnpm add @oevery/prettier-config prettier --save-dev

```

## Usage

You can use this in your `package.json`:

```json
{
  "name": "my-cool-library",
  "version": "0.0.1",
  "prettier": "@oevery/prettier-config"
}
```

You can use any of the supported extensions to export a string, e.g. `.prettierrc` json:

```json
"@oevery/prettier-config"
```

This method does not offer a way to extend the configuration to overwrite some properties from the shared configuration. If you need to do that, import the file in a .prettierrc.js file and export the modifications, e.g:

```js
module.exports = {
  ...require('@oevery/prettier-config'),
  semi: false,
};
```

See more at [prettier documentation](https://prettier.io/docs/en/configuration.html#sharing-configurations).

## License

MIT
