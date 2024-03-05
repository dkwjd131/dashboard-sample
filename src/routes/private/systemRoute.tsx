import { Navigate, Outlet } from 'react-router-dom';

const SystemRoute = (props: { userInfo: string }) => {
  if (props.userInfo !== 'SYSTEM') {
    return <Navigate to="/" replace={true} />;
  }

  return <Outlet />;
};

export default SystemRoute;
