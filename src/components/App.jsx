import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Sectionn } from './Section/Section';
import { Notification } from './Notification/Notification';


let countFeedback = 0;
let PositiveFeedback = 0;
let good = 0;

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  HandleAddFeedback = event => {
    const name = event.target.name;
    this.setState( {[name]: this.state[name] +1});
    this.countTotalFeedback(name);
  };
  countTotalFeedback(name) {
    countFeedback += 1;
    this.countPositiveFeedbackPercentage(name);
  }
  countPositiveFeedbackPercentage(name) {
    if (name === 'good') {
      good += 1;
      PositiveFeedback = (100 / countFeedback) * good;
      return (PositiveFeedback = Number.parseInt(PositiveFeedback));
    } else {
      PositiveFeedback = (100 / countFeedback) * good;
      return (PositiveFeedback = Number.parseInt(PositiveFeedback));
    }
  }
  render() {
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);
    return (
      <>
        <Sectionn title="Please leave feedback">
          <FeedbackOptions
            options={keys}
            onLeaveFeedback={this.HandleAddFeedback}
          />
        </Sectionn>
        {countFeedback === 0 ? (
          <Sectionn>
            <Notification message="No feedback given"></Notification>
          </Sectionn>
        ) : (
          <Sectionn>
            <Statistics
              title={"Statistics"}
              good={good}
              neutral={neutral}
              bad={bad}
              total={countFeedback}
              positivePercentage={PositiveFeedback}
            />
          </Sectionn>
        )}
      </>
    );
  }
}
