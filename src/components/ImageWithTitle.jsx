import PropTypes from 'prop-types';
import styles from './ImageWithTitle.module.css';

const ImageWithTitle = ({ imageSrc, imageAlt, imageClassName, title }) => {
  return (
    <div className="relative">
      <div className={styles.overlay}>
        <h2 className={`font-haettenschweiler ${styles.title}`}>{title}</h2>
      </div>
      <img
        src={imageSrc}
        alt={imageAlt}
        className={`${styles.image} ${imageClassName}`}
      />
    </div>
  );
};

ImageWithTitle.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  imageClassName: PropTypes.string,
  title: PropTypes.string,
};

export default ImageWithTitle;
