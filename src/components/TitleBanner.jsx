import PropTypes from 'prop-types';
import styles from './TitleBanner.module.css';

const TitleBanner = ({ title }) => {
  return (
    <div className={styles.box}>
      <h1 className={`font-haettenschweiler text-center ${styles.title}`}>
        {title}
      </h1>
    </div>
  );
};

TitleBanner.propTypes = {
  title: PropTypes.string,
};

export default TitleBanner;
