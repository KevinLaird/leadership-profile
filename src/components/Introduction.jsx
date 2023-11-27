import styles from './Introduction.module.css';

const Introduction = () => {
  return (
    <div
      className={`relative ${styles.contentBox} flex items-center justify-center`}
    >
      <div className={`absolute top-0 ${styles.BGBars}`} />
      <div className="relative items-center justify-center z-20 flex flex-col lg:flex-row gap-20">
        <img
          src="./assets/Profile.png"
          alt="Profile picture of Kevin Laird smiling. Ain't he cute?"
          className="w-full max-w-md max-h-60 lg:max-h-full object-contain" // Preserve aspect ratio
        />
        <div className="flex flex-col gap-10">
          <h1 className="font-haettenschweiler text-4xl text-center lg:text-left">
            Leading from behind...
          </h1>
          <p className={`font-robotolight text-2xl ${styles.content}`}>
            As a transformational leader, I guide with collaboration, effective
            communication, continuous learning, and the well-being of my team in
            mind. Valuing empathy, fun, and stability, I create a predictable
            and engaging environment where everyone feels safe and comfortable
            to contribute their skills to the team. My purpose is to connect
            people together to create a space that is filled with compassion and
            empathy by being an effective communicator and a patient leader.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
