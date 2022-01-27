import React from 'react';
import NavigationToolBar from './NavigationBar/NavigationToolBar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';

const Root = () => {
  return (
    <div className="rootStyles">
        <BrowserRouter>
          <NavigationToolBar headingBrand="Sai Tej Sunkara" />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/home" element={<Navigate to="/" replace />}></Route>
            <Route path="*" element={<Navigate to="/" replace />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>);
};

export default Root;
