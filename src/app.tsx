import React from 'react';
import './app.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';
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

  function getUrl(category: string) {
    const uncasedCategory = category.toLowerCase();
    const nextCategories = categories.filter((c) => c !== uncasedCategory);
    const url = nextCategories.length ? `/filter?categories=${nextCategories.join(',')}` : '/';
    return url;
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
            {categories.map((c) => <Link className="tag" to={getUrl(c)}>{c}</Link>)}
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
