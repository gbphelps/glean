import React from 'react';
import './app.scss';
import HeaderDesktop from './svgs/bg-header-desktop.svg';
import Job from './components/job';

const App = () => {
  console.log('h');
  return (
    <>
      <div className="bg-cyan">
        <HeaderDesktop />
      </div>
      <div className="content">
        <Job />
        <Job />
      </div>
    </>
  );
};

export default App;
