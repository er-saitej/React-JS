import React from 'react';
import NavigationToolBar from './NavigationBar/NavigationToolBar';
import PracticalScript from './PracticalScript/PracticalScript';
import Footer from './Footer/Footer';

const Root = () => {
  return (
    <div className="rootStyles">
        <NavigationToolBar headingBrand="Sai Tej Sunkara" /><br />
        <PracticalScript />
        <div className="mt-auto">
          <Footer />
        </div>
    </div>);
};

export default Root;
