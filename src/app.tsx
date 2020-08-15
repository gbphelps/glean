import React from 'react';
import './app.scss';
import { useLocation } from 'react-router-dom';
import Job from './components/job';
import jobs from '../data.json';

const App = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="header" style={{ backgroundImage: 'url(./images/bg-header-desktop.svg)' }} />
      <div className="content">
        <div className="filters-card">
          <div className="tag">tag</div>
        </div>

        { jobs.map((job) => <Job {...job} />) }
      </div>
    </>
  );
};

export default App;
