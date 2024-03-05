import { Navigate, Outlet } from 'react-router-dom';

const UserRoute = (props: { userInfo: string }) => {
  if (props.userInfo !== 'USER') {
    return <Navigate to="/" replace={true} />;
  }

  return <Outlet />;
};

export default UserRoute;
