module.exports = {
  babel: {
    presets: [
      [
        '@emotion/babel-preset-css-prop',
        {
          autoLabel: 'dev-only', // 기본값 'dev-only'
          labelFormat: 'marvin-[dirname]-[filename]-[local]',
        },
      ],
    ],
  },
};
