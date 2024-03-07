import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import System from '../pages/System';
import Admin from '../pages/Admin';
import Monitoring from '../pages/monitor/Monitoring';
import Detecting from '../pages/detect/Detecting';
import PrivateRouter from './PrivateRouter';
import AuthError from '../pages/error/AuthError';

const RoutesContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/system" element={<PrivateRouter access={['SYSTEM']} />}>
        <Route path="system_1" element={<System />} />
      </Route>
      <Route path="/admin" element={<PrivateRouter access={['SYSTEM', 'ADMIN']} />}>
        <Route path="admin_1" element={<Admin />} />
      </Route>
      <Route path="/user" element={<PrivateRouter access={['USER']} />}>
        <Route path="monitoring" element={<Monitoring />} />
        <Route path="detecting" element={<Detecting />} />
      </Route>
      <Route path="/authError" element={<AuthError />} />
    </Routes>
  );
};

export default RoutesContainer;
