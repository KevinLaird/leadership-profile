import Tabs from '../components/Tabs';
import TabContent from '../components/TabContent';
import styles from './LeadershipValues.module.css';

const LeadershipValues = () => {
  const funContent = [
    'I bring fun and energy to everything I do. If I’m excited about something, I show it and I do my best to ensure everyone else is having some form of fun with any activity I am a part of.',
  ];

  const empathyContent = [
    'While I can’t understand where everyone is coming from, I can certainly empathize with their feelings. When I was a manager at Hostwinds, I emphasized empathy to my team as one of the greatest strengths they can have. This is especially relevant in tech support because while you may not understand the issue yet or understand where the person they’re helping is coming from, they can certainly empathize with them and work together to find a solution that is right for them. ',
  ];

  const stabilityContent = [
    'I bring stability to chaos. While I am an energetic person, I can be organized and bring stability to unpredictable situations. I work well when under pressure and I can find thoughtful solutions to difficult problems in a fast-paced environment.',
  ];

  const patienceContent = [
    'People tell me I am very patient when it comes to teaching people new skills or finding a solution when time is a factor in that discovery. My roles for the StandOut report are “Teacher” and “Provider”. I measure success on the potential that people have and I am drawn to give guidance to those that need it most.',
  ];

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
          imageSrc="/assets/kevinWithABird.png"
          imageAlt="Profile picture of Kevin Laird smiling. Ain't he cute?"
          imageClassName="your-custom-image-class"
          title="empathy"
          paragraphs={empathyContent}
        />
      ),
    },
    {
      label: 'kindness',
      content: (
        <TabContent
          imageSrc="/assets/kevinWithABird.png"
          imageAlt="Profile picture of Kevin Laird smiling. Ain't he cute?"
          imageClassName="your-custom-image-class"
          title="kindness"
          paragraphs={stabilityContent}
        />
      ),
    },
    {
      label: 'patience',
      content: (
        <TabContent
          imageSrc="/assets/kevinWithABird.png"
          imageAlt="Profile picture of Kevin Laird smiling. Ain't he cute?"
          imageClassName="your-custom-image-class"
          title="patience"
          paragraphs={patienceContent}
        />
      ),
    },
  ];
  return (
    <div className={styles.container}>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default LeadershipValues;
