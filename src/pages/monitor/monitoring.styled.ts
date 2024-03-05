import { css } from '@emotion/react';

const monitor = {
  container: {
    background: '#ebf0f5',
    height: '100%',
  },
  inputField: {
    padding: '20px 20px 5px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  chartGrid: {
    padding: 10,
    height: 500,
    '& .MuiGrid-container': {
      height: '100%',
      '.MuiGrid-item': {
        padding: 10,
        height: '100%',
        '.MuiPaper-root': {
          height: '100%',
          padding: 10,
        },
      },
    },
  },
  modal: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 400,
    background: 'white',
    padding: '30px 20px',
    position: 'absolute' as const,
  },
};

export { monitor };
