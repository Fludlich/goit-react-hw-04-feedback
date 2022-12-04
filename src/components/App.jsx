import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Sectionn } from './Section/Section';
import { Notification } from './Notification/Notification';

export  function App  ()  {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const HandleAddFeedback = event => {
    const name = event.target.name;

    switch (name) {
      case 'good':
        setGood(state => state +1);
        break;
      case 'neutral':
        setNeutral(state => state +1);
        break;
      case 'bad':
        setBad(state => state +1);
        break;
      default:
        return;
    }
     countTotalFeedback();
  };

  const countTotalFeedback =()=> {
        let total= good+bad+neutral
        return total
  }

  const countPositiveFeedbackPercentage =()=> {
       const total =countTotalFeedback()
        const positiveFeedback = Math.round((good / total) * 100);
        return positiveFeedback;
      }
  

  const option = ['good', 'neutral', 'bad']

  return (
    <>
      <Sectionn title="Please leave feedback">
        <FeedbackOptions
          options={option}
          onLeaveFeedback={HandleAddFeedback}
        />
      </Sectionn>
      {countTotalFeedback() === 0 ? (
        <Sectionn>
          <Notification message="No feedback given"></Notification>
        </Sectionn>
      ) : (
        <Sectionn>
          <Statistics
            title={'Statistics'}
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Sectionn>
      )}
    </>
  );
};