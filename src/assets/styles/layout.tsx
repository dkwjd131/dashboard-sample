import { css } from '@emotion/react';

export const header = {
  container: css({
    boxShadow: '0px 1px 5px 0px #b8b8bd',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    padding: '0px 20px 0px 20px',
  }),
};

export const main = {
  container: css({
    height: 'calc(100% - 50px)',
  }),
};
