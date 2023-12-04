import { Outlet } from 'react-router-dom';
import Header from '../components/Header.js';

function DefaultLayout() {
  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
  