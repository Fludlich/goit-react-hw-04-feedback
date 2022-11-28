import { Button } from "components/Feedback/Fedback.styled";
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback}) => {
  return (
    <div style={{color: "red", display: 'flex', gap: '10px'}}>
      {    options.map(el=> {
        return(
            <Button key={el} type="button" name={el} onClick={onLeaveFeedback}>
        {el}
      </Button>
        )
    })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};