import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button'; // Adjust the path based on your project structure
import styles from './LeadershipValues.module.css';

const LeadershipValues = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    console.log(index);
    console.log(activeTab);
    setActiveTab(index);
  };

  return (
    <div>
      <div className={styles.tabList}>
        {tabs.map((tab, index) => (
          <Button
            key={index}
            onClick={() => handleTabClick(index)}
            className={index === activeTab ? styles.active : ''}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};

LeadershipValues.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    }),
  ).isRequired,
};

export default LeadershipValues;
