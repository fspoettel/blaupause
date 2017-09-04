/*eslint-disable */
module.exports = ctx => ({
  map: ctx.env !== 'production' ? { inline: false } : false,
  plugins: {
    'postcss-import': { root: ctx.file.dirname },
    'postcss-cssnext': {
      warnForDuplicates: false,
    },
    'cssnano': ctx.env === 'production' ? { preset: 'default' } : false,
  },
});
