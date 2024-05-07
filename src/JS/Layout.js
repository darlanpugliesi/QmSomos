import React from 'react';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
