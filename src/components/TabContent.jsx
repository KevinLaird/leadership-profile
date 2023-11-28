import PropTypes from 'prop-types';
import styles from './TabContent.module.css';

const TabContent = ({
  imageSrc,
  imageAlt,
  imageClassName,
  title,
  paragraphs,
}) => {
  return (
    <div
      className={`relative ${styles.tabBox} flex items-center justify-center`}
    >
      <img
        src="./assets/leftSquares.png"
        alt="3 orange squares"
        className="absolute left-0 bottom-0 hidden lg:block"
      />

      <div
        className={`flex flex-col lg:flex-row gap-6 lg:gap-20 lg:items-center ${styles.contentBox} lg:py-8`}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`${styles.image} ${imageClassName}`}
        />
        <div className="flex flex-col gap-2">
          <h2
            className={`font-haettenschweiler ${styles.h2} text-center lg:text-left`}
          >
            {title}
          </h2>
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`font-robotolight text-xl lg:text-2xl ${styles.content}`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <img
        src="./assets/rightSquares.png"
        alt="3 yellow squares"
        className="absolute right-0 top-0 hidden lg:block"
      />
    </div>
  );
};

TabContent.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  imageClassName: PropTypes.string,
  title: PropTypes.string,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TabContent;
