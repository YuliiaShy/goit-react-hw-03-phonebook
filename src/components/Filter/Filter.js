import React from 'react';
import PropTypes from 'prop-types';
import s from 'components/Filter/Filter.module.css';

export default function Filter({ value, onFilterChange }) {
  return (
    <label htmlFor="filter" className={s.labels}>
      Find contacts by name:
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onFilterChange}
        className={s.inputs}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
