module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true, // true|false default: false
  quoteProps: 'as-needed',
  trailingComma: 'es5', // none|es5|all default: es5
  bracketSpacing: true,
  bracketSameLine: false, // true|false default: false
  arrowParens: 'always',
  rangeStart: 0,
  rangeEnd: Infinity,
  requirePragma: false,
  insertPragma: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false,
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto',
  overrides: [
    // allow longer line lengths in JSON, JSON5 files
    {
      files: ['*.json', '*.json5'],
      options: {
        printWidth: 160,
      },
    },
  ],
}
