// import Counter from 'components/Counter/Counter';
import React, { useState } from 'react';
import FeedbackOptions from 'components/Counter/FeedbackOptions';
import Statistics from 'components/Counter/Statistics';
import Section from 'components/Counter/Section';
import Notification from 'components/Counter/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function onLeaveFeedback(e) {
    const key = e.target.attributes.option.value;
    switch (key) {
      case 'good':
        setGood(pS => pS + 1);
        break;
      case 'neutral':
        setNeutral(pS => pS + 1);
        break;
      case 'bad':
        setBad(pS => pS + 1);
        break;
      default:
        break;
    }
  }

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    if (!countTotalFeedback()) {
      return 0;
    }
    const posFeedback = Number(
      (100 * (good / countTotalFeedback())).toFixed(2)
    );
    return posFeedback;
  }

  return (
    <div
      style={{
        width: '450px',
        height: 'auto',
        // minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <h1>React homework</h1>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}
