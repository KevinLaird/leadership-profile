import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ onClick, type, children, className }) => {
  return (
    <button
      className={`${styles.Button} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string, // Include className prop
};

Button.defaultProps = {
  type: 'button',
  className: '',
};

export default Button;
