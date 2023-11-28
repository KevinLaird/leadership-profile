import PropTypes from 'prop-types';
import CopyContent from './CopyContent'; // Adjust the path based on your project structure
import styles from './CopyContentContainer.module.css';

const CopyContentContainer = ({ copyContentData }) => {
  return (
    <div className={`${styles.container}`}>
      {copyContentData.map((data, index) => (
        <CopyContent key={index} index={index} {...data} />
      ))}
    </div>
  );
};

CopyContentContainer.propTypes = {
  copyContentData: PropTypes.arrayOf(
    PropTypes.shape({
      imageSrc: PropTypes.string.isRequired,
      imageAlt: PropTypes.string.isRequired,
      imageClassName: PropTypes.string,
      title: PropTypes.string.isRequired,
      paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
};

export default CopyContentContainer;
