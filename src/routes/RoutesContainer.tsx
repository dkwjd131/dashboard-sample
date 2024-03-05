import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import System from '../pages/System';
import Admin from '../pages/Admin';
import SystemRoute from './private/systemRoute';
import AdminRoute from './private/adminRoute';
import UserRoute from './private/userRoute';
import Monitoring from '../pages/monitor/Monitoring';
import Detecting from '../pages/detect/Detecting';

const RoutesContainer = () => {
  const userInfo = 'SYSTEM';
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: 'system',
          element: <SystemRoute userInfo={userInfo} />,
          children: [{ path: 'system_1', element: <System /> }],
        },
        {
          path: 'admin',
          element: <AdminRoute userInfo={userInfo} />,
          children: [{ path: 'admin_1', element: <Admin /> }],
        },
        {
          path: 'user',
          element: <UserRoute userInfo={userInfo} />,
          children: [
            { path: 'monitoring', element: <Monitoring /> },
            { path: 'detecting', element: <Detecting /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RoutesContainer;
