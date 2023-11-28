import styles from './Contact.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={`font-haettenschweiler ${styles.textContainer}`}>
        <h3 className={`${styles.h3}`}>Like what you see?</h3>
        <h2 className={`${styles.h2}`}>Connect with me!</h2>
        <h4 className={`${styles.h4}`}>(Rhyme intended)</h4>
      </div>
      <div className={`font-haettenschweiler ${styles.ctaContainer}`}>
        <div className={styles.linkContainer}>
          <ul>
            <li>
              <a className={styles.cta} href="mailto:contact@kevinlaird.me">
                <EmailIcon className={styles.icon} />
                contact@kevinlaird.me
              </a>
            </li>
            <li>
              <a
                className={styles.cta}
                href="https://www.linkedin.com/in/kevinjohnlaird/"
              >
                <LinkedInIcon className={styles.icon} />
                LinkedIn.com/in/kevinjohnlaird
              </a>
            </li>
            <li>
              <a
                className={styles.cta}
                href="https://www.instagram.com/kevinlaird.me/"
              >
                <InstagramIcon className={styles.icon} />
                Instagram.com/kevinlaird.me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
