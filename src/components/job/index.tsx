import React from 'react';
import './index.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import useCategories from '../../utils/useCategories';
import { JobInterface } from '../../utils/types';

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
}: JobInterface): JSX.Element => {
  const categories = useCategories();

  const getUrl = (category: string) => {
    const nextCategories = [];
    categories.forEach((c) => {
      if (c !== category) nextCategories.push(c);
    });
    nextCategories.push(category.toLowerCase());
    return `/filter?categories=${nextCategories.sort().join(',')}`;
  };

  const Tag = ({ category }: {category: string}) => <Link className="tag" to={getUrl(category)}>{category}</Link>;

  return (
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
        <Tag category={role} />
        <Tag category={level} />
        {languages.map((language) => <Tag category={language} />)}
        {tools.map((tool) => <Tag category={tool} />)}
      </div>
    </div>
  );
};

export default Job;
