import React from 'react';
import { Link } from 'react-router';

const Filterlink = ({ filter, children }) => (
  <Link
    to={filter === 'all' ? '' : filter}
    activeStyle={{
      textDecoration: 'none',
      color: 'black',
    }}
    >
    {children}
    </Link>
);

export default Filterlink;