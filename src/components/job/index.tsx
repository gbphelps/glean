import React from 'react';
import './index.scss';
import cn from 'classnames';

interface Job {
    id: number,
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[],
    tools: string[],
}

const Job = ({
  company,
  logo,
  new: isNew,
  featured: isFeatured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}: Job) => (
  <div className={cn('job-card', { featured: isFeatured })}>
    <div className="main-content">
      <img alt={`${company} logo`} src={logo} className="logo" />
      <div>
        <div className="top-details">
          <div className="company">{company}</div>
          {isNew && <div className="pill bg-cyan">NEW!</div>}
          {isFeatured && <div className="pill bg-primary">FEATURED</div>}
        </div>
        <div className="position">{position}</div>
        <div className="bottom-details">
          <div>{postedAt}</div>
          <div>{contract}</div>
          <div>{location}</div>
        </div>
      </div>
    </div>

    <div className="tags">
      <div className="tag">{role}</div>
      <div className="tag">{level}</div>
      {languages.map((language) => <div className="tag">{language}</div>)}
      {tools.map((tool) => <div className="tag">{tool}</div>)}
    </div>
  </div>
);

export default Job;
