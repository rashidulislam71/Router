import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './../Navigation/NavBar';
import Footer from './../Footer/Footer';

const LayoutPage = () => {
  return (
    <div>
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  );
};

export default LayoutPage;