import { css } from '@emotion/react';

const monitor = {
  container: css`
    background: #ebf0f5;
    height: 100%;
  `,
  inputField: css`
    padding: 20px 20px 5px 20px;
    display: flex;
    align-items: center;
    gap: 20px;
  `,
  chartGrid: css`
    padding: 10px;
    height: 500px;

    & .MuiGrid-container {
      height: 100%;

      .MuiGrid-item {
        padding: 10px;
        height: 100%;

        .MuiPaper-root {
          height: 100%;
          padding: 10px;
        }
      }
    }
  `,
  modal: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 400px;
    background: white;
    padding: 30px 20px;
  `,
};

export { monitor };
