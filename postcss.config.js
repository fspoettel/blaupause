/*eslint-disable */
module.exports = ctx => {
  const isProduction = ctx.env === 'production' || ctx.env === 'staging';

  return {
    map: isProduction ? false : {},
    plugins: {
      'postcss-import': { root: ctx.file.dirname },
      'autoprefixer': {},
      'cssnano': isProduction && { preset: 'default' },
    },
  };
};
