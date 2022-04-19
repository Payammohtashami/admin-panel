import React from 'react';
import Header from '../header/index';
import DataCard from '../dataCard/index';

import "./index.scss";
const index = () => {
  return (
    <div className="main-container">
      <div>
        <Header />
        <DataCard />

      </div>
    </div>
  );
};

export default index;