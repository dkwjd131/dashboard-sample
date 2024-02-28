import { css } from '@emotion/react';

const header = {
  container: css({
    boxShadow: '0px 1px 5px 0px #b8b8bd',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    padding: '0px 20px 0px 20px',
  }),
};

const main = {
  container: css({
    height: 'calc(100% - 110px)',
    padding: '30px',
  }),
};

export { header, main };
