import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded';
import styles from './Landing.module.css';

export default function Landing() {
  return (
    <div
      className={`relative flex flex-col gap-5 items-center justify-center ${styles.bg}`}
    >
      <div className={`z-40 text-center ${styles.bgTitle}`}>
        <h2 className={`font-haettenschweiler ${styles.h2}`}>Kevin Laird</h2>
        <h1 className={`font-haettenschweiler ${styles.h1}`}>
          Leadership Profile
        </h1>
      </div>
      <div
        className={`w-full h-24 absolute bottom-0 flex items-center justify-center ${styles.downBanner}`}
      >
        <div className="animate-bounce-slow">
          <KeyboardDoubleArrowDownRoundedIcon
            sx={{ fontSize: 72 }}
            color="action"
          />
        </div>
      </div>
    </div>
  );
}
