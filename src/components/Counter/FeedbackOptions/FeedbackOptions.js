// import React from 'react';
import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.list}>
      {options.map(option => {
        return (
          <li key={option}>
            <button
              type="button"
              className={s.btn}
              option={option}
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  option: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
};
