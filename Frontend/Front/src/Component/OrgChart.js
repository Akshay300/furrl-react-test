// OrgChart.js

import React from 'react';
import OrgChartNode from './OrgChartNode';

const OrgChart = ({ data }) => {
  return (
    <div className='org-tree'>
      <ul>
      <OrgChartNode node={data[0]} />
      </ul>
    </div>
  );
};

export default OrgChart;
