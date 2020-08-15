import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import getDisplayTag from '../../utils/getDisplayTag';
import useCategories from '../../utils/useCategories';
import './index.scss';

const FilterCard = (): JSX.Element => {
  const categories = useCategories();

  function getUrl(category: string) {
    const uncasedCategory = category.toLowerCase();
    const nextCategories = categories.filter((c) => c !== uncasedCategory);
    const url = nextCategories.length ? `/filter?categories=${nextCategories.join(',')}` : '/';
    return url;
  }
  return (
    <div
      className={
      cn('content', 'filter-content', {
        visible: !!categories.length,
      })
    }
    >
      <CSSTransition
        component={null}
        in={!!categories.length}
        mountOnEnter
        unmountOnExit
        timeout={400}
      >
        <div className="filters-card">
          <div className="filters">
            <TransitionGroup component={null}>
              {categories.map((c) => (
                <CSSTransition timeout={400} component={null} key={c} mountOnEnter unmountOnExit>
                  <div className="tag remove">
                    <span>{getDisplayTag(c)}</span>
                    <Link to={getUrl(c)}>
                      <img alt="remove" src="/public/images/icon-remove.svg" />

                    </Link>
                  </div>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
          <Link className="clear" to="/">Clear</Link>
        </div>
      </CSSTransition>
    </div>
  );
};

export default FilterCard;
