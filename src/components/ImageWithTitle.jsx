import PropTypes from 'prop-types';
import styles from './ImageWithTitle.module.css';

const ImageWithTitle = ({ imageSrc, imageAlt, imageClassName, title }) => {
  return (
    <div className="relative">
      <h2 className={`font-haettenschweiler ${styles.title}`}>{title}</h2>
      <img
        src={imageSrc}
        alt={imageAlt}
        className={`w-full max-w-md lg:max-w-full max-h-60 lg:max-h-full object-contain ${styles.image} ${imageClassName}`}
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
