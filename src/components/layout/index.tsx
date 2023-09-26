import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div id="layout">
      <Outlet />
    </div>
  );
};

export default Layout;
