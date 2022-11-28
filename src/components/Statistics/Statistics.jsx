import {
  FeedbackStatistics,
  FeedbackTitle,
  FeedbackText,
  FeedbackQuantity,
} from '../Feedback/Fedback.styled';
import PropTypes from 'prop-types'; 

export const Statistics = ({
  positivePercentage,
  total,
  bad,
  neutral,
  good,
  title,
}) => {
  return (
    <FeedbackStatistics>
      <FeedbackTitle>{title}</FeedbackTitle>
      <FeedbackText>
        Bad:<FeedbackQuantity>{bad}</FeedbackQuantity>
      </FeedbackText>
      <FeedbackText>
        Neutral:<FeedbackQuantity>{neutral}</FeedbackQuantity>
      </FeedbackText>
      <FeedbackText>
        Good:<FeedbackQuantity>{good}</FeedbackQuantity>
      </FeedbackText>
      <FeedbackText>
        Total:<FeedbackQuantity>{total}</FeedbackQuantity>
      </FeedbackText>
      <FeedbackText>
        Positive feedback:
        <FeedbackQuantity>{positivePercentage}</FeedbackQuantity>%
      </FeedbackText>
    </FeedbackStatistics>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,

};