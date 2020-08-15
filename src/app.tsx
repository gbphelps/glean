import React from 'react';
import './app.scss';
import cn from 'classnames';
import useCategories from './utils/useCategories';
import Job from './components/job';
import jobs from '../data.json';
import { JobInterface } from './utils/types';

const App = (): JSX.Element => {
  const categories = useCategories();
  function filterFunc(job: JobInterface) {
    const jobCategories = new Set([
      ...job.tools,
      ...job.languages,
      job.role,
      job.level,
    ].map((c) => c.toLowerCase()));
    return !categories.length || categories.every((c) => jobCategories.has(c));
  }

  return (
    <>
      <div
        className="header"
        style={{ backgroundImage: 'url(./images/bg-header-desktop.svg)' }}
      >
        <div className="header-content">
          <div className="header-content-inner">
            { !!categories.length
          && (
          <div className="filters-card">
            <div className="tag">tag</div>
          </div>
          )}
          </div>
        </div>
      </div>
      <div className={cn('content', { filtered: categories.length })}>
        { jobs.filter(filterFunc).map(
          (job) => <Job {...job} />,
        ) }
      </div>
    </>
  );
};

export default App;
