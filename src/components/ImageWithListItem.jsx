import PropTypes from 'prop-types';
import styles from './ImageWithListItem.module.css';

const ImageWithListItem = ({ imageSrc, listItem }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt="Description" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <ul className={`font-haettenschweiler ${styles.listContainer}`}>
          {listItem.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ImageWithListItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  listItem: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageWithListItem;
