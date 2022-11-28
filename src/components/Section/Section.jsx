
import PropTypes from 'prop-types'; 
import { 
    Section, 
    Title
  } from '../Feedback/Fedback.styled'

export const Sectionn = ({ children, title }) => {
  return (
    <Section>
      <Title>{title}</Title>
      {children}
    </Section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
};