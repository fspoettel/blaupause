/*eslint-disable */
module.exports = ctx => {
  const isProduction = ctx.env === 'production';

  return {
    map: isProduction ? false : { inline: false },
    plugins: {
      'postcss-import': { root: ctx.file.dirname },
      'autoprefixer': {},
      'cssnano': isProduction && { preset: 'default' },
    },
  };
};
