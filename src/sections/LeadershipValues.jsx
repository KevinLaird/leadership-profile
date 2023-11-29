import Tabs from '../components/Tabs';
import TabContent from '../components/TabContent';
import styles from './LeadershipValues.module.css';

const LeadershipValues = () => {
  const funContent = [
    'I bring fun and energy to everything I do. If I’m excited about something, I show it and I do my best to ensure everyone else is having some form of fun with any activity I am a part of.',
  ];

  const empathyContent = [
    `While I can't comprehend every perspective, I can certainly empathize with their feelings. When I was a manager at Hostwinds, empathy was at the core of my leadership style when training my team; it is one of the greatest strengths they can possess. This is especially relevant in tech support because, even if they don't fully understand the issue or where the person they're helping is coming from, they can certainly empathize and collaborate to find a solution that suits them.`,
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
          imageSrc="/assets/hostwinds.png"
          imageAlt="Logo of Hostwinds, a company I (Kevin) worked at. Empathy was a key component at this job!"
          imageClassName="your-custom-image-class"
          title="empathy"
          paragraphs={empathyContent}
        />
      ),
    },
    {
      label: 'Stability',
      content: (
        <TabContent
          imageSrc="/assets/scale.png"
          imageAlt=""
          imageClassName="your-custom-image-class"
          title="Stability"
          paragraphs={stabilityContent}
        />
      ),
    },
    {
      label: 'patience',
      content: (
        <TabContent
          imageSrc="/assets/standoutReportLogo.png"
          imageAlt="StandOut Report Logo, where I got Leadership Roles"
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
