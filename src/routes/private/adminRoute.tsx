import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = (props: { userInfo: string }) => {
  if (props.userInfo !== 'ADMIN') {
    return <Navigate to="/" replace={true} />;
  }

  return <Outlet />;
};

export default AdminRoute;
