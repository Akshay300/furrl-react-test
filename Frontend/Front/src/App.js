import './App.css';
// App.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OrgChart from './Component/OrgChart';

function App() {
  const [orgData, setOrgData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/employeesdata")
      .then(response => {
        setOrgData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      {orgData.length > 0 && <OrgChart data={orgData} />}
    </div>
  );
}

export default App;

