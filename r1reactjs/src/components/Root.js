import React from 'react';
import NavigationToolBar from './NavigationBar/NavigationToolBar';
import PracticalScript from './PracticalScript/PracticalScript';

const Root = () => {
  return (
    <div className="rootStyles">
        <NavigationToolBar headingBrand="Sai Tej Sunkara" /><br />
        <PracticalScript />
    </div>);
};

export default Root;
