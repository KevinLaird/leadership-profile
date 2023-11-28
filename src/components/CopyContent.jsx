import PropTypes from 'prop-types';
import styles from './CopyContent.module.css';
import ImageWithTitle from './ImageWithTitle';

const CopyContent = ({
  imageSrc,
  imageAlt,
  imageClassName,
  title,
  paragraphs,
  index,
}) => {
  const isEven = index % 2 === 0; // Check if the index is even

  return (
    <div
      className={`flex ${styles.container} ${
        isEven ? styles.even : styles.odd
      }`}
    >
      {isEven ? (
        // If index is even, position image at index 0 and text at index 1
        <>
          <div className={styles.imageContainer}>
            <ImageWithTitle
              imageSrc={imageSrc}
              imageAlt={imageAlt}
              title={title}
              imageClassName={imageClassName}
            />
          </div>
          <div className={styles.textContainer}>
            {paragraphs.map((paragraph, index) => (
              <p className="text-justify" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </>
      ) : (
        // If index is odd, position text at index 0 and image at index 1
        <>
          <div className={styles.textContainer}>
            {paragraphs.map((paragraph, index) => (
              <p className="text-justify" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className={styles.imageContainer}>
            <ImageWithTitle
              imageSrc={imageSrc}
              imageAlt={imageAlt}
              title={title}
              imageClassName={imageClassName}
            />
          </div>
        </>
      )}
    </div>
  );
};

CopyContent.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  imageClassName: PropTypes.string,
  title: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

export default CopyContent;
