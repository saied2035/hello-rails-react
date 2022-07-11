module.exports = {
  plugins: [
    import('postcss-import'),
    import('postcss-flexbugs-fixes'),
    import('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
    }),
  ],
};
