import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ flex: '1 0 auto' }}>
          <Header />

          <Outlet />
        </div>
        <div style={{ flex: '0 0 auto' }}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
