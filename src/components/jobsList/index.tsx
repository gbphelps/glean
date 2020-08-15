import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Job from '../job';
import jobs from '../../../data.json';
import useCategories from '../../utils/useCategories';
import { JobInterface } from '../../utils/types';

const JobsList = (): JSX.Element => {
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
    <div className="content">
      <TransitionGroup component={null}>
        { jobs.filter(filterFunc).map(
          (job) => (
            <CSSTransition timeout={0} key={job.id}>
              <Job {...job} />
            </CSSTransition>
          ),
        ) }
      </TransitionGroup>
    </div>
  );
};

export default JobsList;
