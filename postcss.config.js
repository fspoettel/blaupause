/*eslint-disable */
module.exports = ctx => {
  const isProduction = ctx.env === 'production';

  return {
    map: isProduction ? false : {},
    plugins: {
      'postcss-import': { root: ctx.file.dirname },
      'autoprefixer': isProduction && {},
      'cssnano': isProduction && { preset: 'default' },
    },
  };
};
