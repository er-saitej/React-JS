import React from 'react';
import NavigationToolBar from './NavigationBar/NavigationToolBar';
import PracticalScript from './PracticalScript/PracticalScript';

const Root = () => {
  return (
    <div className="rootStyles">
        <NavigationToolBar /><br />
        <PracticalScript />
    </div>);
};

export default Root;
