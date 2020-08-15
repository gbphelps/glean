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

  const logoParse = `/public${logo.slice(1)}`;

  const getUrl = (category: string) => {
    const nextCategories = [];
    const uncasedCategory = category.toLowerCase();
    categories.forEach((c) => {
      if (c !== uncasedCategory) nextCategories.push(c);
    });
    nextCategories.push(uncasedCategory);
    return `/filter?categories=${nextCategories.sort().join(',')}`;
  };

  const Tag = ({ category }: {category: string}) => <Link className="tag" to={getUrl(category)}>{category}</Link>;

  return (
    <div className="job-card-container">
      <img className="logo absolute" alt={`${company} logo`} src={logoParse} />
      <div className={cn('job-card', { featured: isFeatured })}>
        <div className="main-content">
          <img className="logo inline" alt={`${company} logo`} src={logoParse} />
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

        <div className="divider" />

        <div className="tags">
          <Tag category={role} />
          <Tag category={level} />
          {languages.map((language) => <Tag category={language} key={language} />)}
          {tools.map((tool) => <Tag category={tool} key={tool} />)}
        </div>
      </div>
    </div>
  );
};

export default Job;
