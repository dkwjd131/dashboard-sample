import { privateRouterProps } from '../types/routeType';
import { Navigate, Outlet } from 'react-router-dom';

const userRole = 'SYSTEM';

const PrivateRouter = ({ access }: privateRouterProps) => {
  const auth = access.indexOf(userRole);

  return auth == -1 ? <Navigate to="/authError" replace={true} /> : <Outlet />;
};

export default PrivateRouter;
