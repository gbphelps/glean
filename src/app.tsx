import React from 'react';
import './app.scss';

import FilterCard from './components/filterCard';
import JobsList from './components/jobsList';

const App = (): JSX.Element => (
  <>
    <div
      className="header"
    />
    <FilterCard />
    <JobsList />
  </>
);

export default App;
