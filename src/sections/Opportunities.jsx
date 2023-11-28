import ImageWithListItem from '../components/ImageWithListItem';
import styles from './Opportunities.module.css';

const Opportunities = () => {
  const imageSource = '/assets/connectionsGraphic.png'; // Provide the actual image URL
  const listItems = [
    'Community Workshops',
    'Udemy',
    'Coursera',
    'LinkedIn Learning',
    'Career Advising with Lynn Juve',
    'Informational Interviews',
  ]; // Provide your list items

  return (
    <div className={styles.container}>
      <ImageWithListItem imageSrc={imageSource} listItem={listItems} />
    </div>
  );
};

export default Opportunities;
