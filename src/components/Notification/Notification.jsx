import { NotificationMessage } from '../Feedback/Fedback.styled';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <NotificationMessage>{message}</NotificationMessage>;
};

Notification.propTypes = {
  message: PropTypes.string,
};