import React from 'react';
import './app.scss';
import HeaderDesktop from './svgs/bg-header-desktop.svg';
import Job from './components/job';
import jobs from '../data.json';

const App = () => (
  <>
    <div className="bg-cyan">
      <HeaderDesktop />
    </div>
    <div className="content">
      { jobs.map((job) => <Job {...job} />) }
    </div>
  </>
);

export default App;
