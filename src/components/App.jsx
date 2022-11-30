import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Sectionn } from './Section/Section';
import { Notification } from './Notification/Notification';


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
  countTotalFeedback() {
    let total=0
    Object.values(this.state).map(el=>total+= el);
     return total
  }
  countPositiveFeedbackPercentage() {
    let total=0
    Object.values(this.state).map(el=>total+= el)
    const positiveFeedback = Math.round((this.state.good / total) * 100);
    return positiveFeedback;
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
        {this.countTotalFeedback() === 0 ? (
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
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Sectionn>
        )}
      </>
    );
  }
}
