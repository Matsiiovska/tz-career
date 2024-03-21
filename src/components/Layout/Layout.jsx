import Header from 'components/Header/Header';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Toaster />

      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
