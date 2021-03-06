import React from 'react';
import PropTypes from 'prop-types';
import Details from '../components/Details';

export default function DrinkDetails({ history: { location: { pathname } } }) {
  const string = pathname.split('/');
  const type = string[1];
  const id = string[2];

  return (
    <Details id={ id } type={ type } />
  );
}

DrinkDetails.propTypes = {
  pathname: PropTypes.string,
}.isRequired;
