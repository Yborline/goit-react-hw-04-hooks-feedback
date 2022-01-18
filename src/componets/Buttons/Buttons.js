import React from 'react';
import s from './Buttons.module.css';
import PropTypes from 'prop-types';

const Buttons = ({ names, onClick }) => {
  return (names).map((name, index) => {
    return (
      <button
        value={name}
        key={index}
        type="button"
        className={s.button}
        onClick={onClick}
      >
        {name}
      </button>
    );
  });
};

Buttons.propTypes = {
names:PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Buttons;

  // names: PropTypes.shape({
  //   good: PropTypes.number.isRequired,
  //   neutral: PropTypes.number.isRequired,
  //   bad: PropTypes.number.isRequired,
  // }),