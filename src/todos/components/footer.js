import React  from 'react';
import FilterLink from './filterLink';

const Footer = ({
  visibilityFilter,
  onFilterClick
}) => {
  return (
    <p>
      Filters:
      {' '}
      <FilterLink
        filter='SHOW_ALL'
        currentFilter={visibilityFilter}
        onClick={onFilterClick}
      >All</FilterLink>
      {' '}
      <FilterLink
        filter='SHOW_ACTIVE'
        currentFilter={visibilityFilter}
        onClick={onFilterClick}
      >Active</FilterLink>
      {' '}
      <FilterLink
        filter='SHOW_COMPLETED'
        currentFilter={visibilityFilter}
        onClick={onFilterClick}
      >Completed</FilterLink>
    </p>
  )
};

export default Footer;