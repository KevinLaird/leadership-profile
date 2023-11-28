import { useState, useEffect } from 'react';
import styles from './App.module.css';
import Landing from './sections/Landing';
import Introduction from './sections/Introduction';
import Tabs from './components/Tabs';
import TabContent from './components/TabContent';
import TitleBanner from './components/TitleBanner';
import Opportunities from './sections/Opportunities';
import ImageWithTitle from './components/ImageWithTitle';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const funContent = [
    'I bring fun and energy to everything I do. If I’m excited about something, I show it and I do my best to ensure everyone else is having some form of fun with any activity I am a part of.',
  ];

  // const empathyContent = [
  //   'As a transformational leader, I guide with collaboration, effective communication, continuous learning, and the well-being of my team in mind.',
  //   'Valuing empathy, fun, and stability, I create a predictable and engaging environment where everyone feels safe and comfortable to contribute their skills to the team.',
  //   'My purpose is to connect people together to create a space that is filled with compassion and empathy by being an effective communicator and a patient leader.',
  // ];

  // const kindnessContent = [
  //   'As a transformational leader, I guide with collaboration, effective communication, continuous learning, and the well-being of my team in mind.',
  //   'Valuing empathy, fun, and stability, I create a predictable and engaging environment where everyone feels safe and comfortable to contribute their skills to the team.',
  //   'My purpose is to connect people together to create a space that is filled with compassion and empathy by being an effective communicator and a patient leader.',
  // ];

  // const patienceContent = [
  //   'As a transformational leader, I guide with collaboration, effective communication, continuous learning, and the well-being of my team in mind.',
  //   'Valuing empathy, fun, and stability, I create a predictable and engaging environment where everyone feels safe and comfortable to contribute their skills to the team.',
  //   'My purpose is to connect people together to create a space that is filled with compassion and empathy by being an effective communicator and a patient leader.',
  // ];

  const tabs = [
    {
      label: 'fun',
      content: (
        <TabContent
          imageSrc="/assets/kevinWithABird.png"
          imageAlt="Kevin with his 'lil mascot Echo, the Sun Conure (bird). So fun!"
          imageClassName="your-custom-image-class"
          title="fun"
          paragraphs={funContent}
        />
      ),
    },
    {
      label: 'empathy',
      content: (
        <TabContent
          imageSrc=""
          imageAlt="Profile picture of Kevin Laird smiling. Ain't he cute?"
          imageClassName="your-custom-image-class"
          paragraphs={funContent}
        />
      ),
    },
    {
      label: 'kindness',
      content: (
        <TabContent
          imageSrc=""
          imageAlt="Profile picture of Kevin Laird smiling. Ain't he cute?"
          imageClassName="your-custom-image-class"
          paragraphs={funContent}
        />
      ),
    },
    {
      label: 'patience',
      content: (
        <TabContent
          imageSrc=""
          imageAlt="Profile picture of Kevin Laird smiling. Ain't he cute?"
          imageClassName="your-custom-image-class"
          paragraphs={funContent}
        />
      ),
    },
  ];

  return (
    <>
      {loading ? (
        <div className="h-screen flex flex-col gap-5 items-center justify-center">
          <img
            src="./assets/kevin-logo-4x.png"
            className="animate-pulse"
            alt="Loader"
          />
          <p className="font-black font-encode text-3xl">Leading...</p>
        </div>
      ) : (
        <>
          <header>
            <Landing />
          </header>
          <section>
            <TitleBanner title="personal introduction" />
            <Introduction />
          </section>
          <section>
            <TitleBanner title="leadership values" />
            <div className={styles.Values}>
              <Tabs tabs={tabs} />
            </div>
          </section>
          <section>
            <TitleBanner title="opportunities" />
            <ImageWithTitle
              imageSrc="/assets/community.png"
              imageAlt="Kevin with his 'lil mascot Echo, the Sun Conure (bird). So fun!"
              imageClassName="your-custom-image-class"
              title="community"
            />
          </section>
        </>
      )}
    </>
  );
}

export default App;
