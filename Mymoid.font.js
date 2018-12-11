module.exports = {
  files: [
    'styleguide/icons/*.svg',
  ],
  fontName: 'Mymoid',
  classPrefix: 'mymoicons-',
  baseSelector: '.mymoicons',
  types: ['eot', 'woff', 'woff2', 'ttf', 'svg'],
  fixedWidth: true,
  fileName: 'app.[fontname].[hash].[ext]',
  cssTemplate: './mymoicons.hbs',
};
