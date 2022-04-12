import './Title.scss';
import { Link } from 'react-router-dom';
import React from 'react';

const Title = React.memo(({ to, linkName }) =>
  <div className='subject-carousel__title-container'>
    <Link
      className='subject-carousel subject-carousel__link'
      to={to}
    >
      {linkName}
    </Link>
  </div>
);

export default Title;
