import React from 'react';
import './index.scss';

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
  <div className="job">
    <div>{company}</div>
    <img src={logo}/>
    {isNew && <div>new</div>}
    {isFeatured && <div>featured</div>}
    <div>{position}</div>
    <div>{role}</div>
    <div>{level}</div>
    <div>{postedAt}</div>
    <div>{contract}</div>
    <div>{location}</div>
    {languages.map((language) => <div>{language}</div>)}
    {tools.map((tool) => <div>{tool}</div>)}
  </div>
);

export default Job;
