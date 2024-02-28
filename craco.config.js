module.exports = {
  babel: {
    presets: [
      [
        '@emotion/babel-preset-css-prop',
        {
          autoLabel: 'dev-only',
          labelFormat: 'marvin-[dirname]-[filename]-[local]',
        },
      ],
    ],
  },
};
