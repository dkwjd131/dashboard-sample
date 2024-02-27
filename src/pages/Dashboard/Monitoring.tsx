import { monitor } from './monitoringStyle';
import { Box, Grid } from '@mui/material';

const Monitoring = () => {
  return (
    <div css={monitor.container}>
      <Grid container>
        <Grid item columns={4}>
          1
        </Grid>
        <Grid item columns={4}>
          2
        </Grid>
        <Grid item columns={4}>
          3
        </Grid>
      </Grid>
    </div>
  );
};

export default Monitoring;
