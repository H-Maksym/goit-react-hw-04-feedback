// import React from 'react';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul>
      <li key={'good'} className={s.item}>
        Good:<span className={s.value}>{good}</span>
      </li>
      <li key={'neutral'} className={s.item}>
        Neutral:<span className={s.value}>{neutral}</span>
      </li>
      <li key={'bad'} className={s.item}>
        Bad:<span className={s.value}>{bad}</span>
      </li>
      <li key={'countTotalFeedback'} className={s.item}>
        Total:<span className={s.value}>{total}</span>
      </li>
      <li key={'countPositiveFeedbackPercentage'} className={s.item}>
        Positive feedback:
        <span className={s.value}>{positivePercentage + '%'}</span>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
