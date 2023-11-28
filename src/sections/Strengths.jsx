import Tabs from '../components/Tabs';
import TabContent from '../components/TabContent';
import styles from './LeadershipValues.module.css';

const Strengths = () => {
  const teacherContent = [
    'A quote that resonated with me was, “You are drawn to give guidance to those who need it most, and while their performance matters to you, their improvement matters more.”. As a manager, I was responsible for training my team to improve our internal key performance indicators within the company. When beginning as a manager, I was surprised by how easy it was for me to see the potential in each individual and how much effort they were putting into their work.',
  ];

  const providerContent = [
    'I am adaptable to any social environment and I can find ways to connect with people that others typically can’t. Having struggled in life with ADHD and Anxiety has made me a more empathetic and understanding person – I keep an open mind whenever I’m talking with anyone. I want to create a safe space where people are comfortable to express themselves and be who they want to be. I make sure everyone is included in any social situation.',
  ];

  const tabs = [
    {
      label: 'Teacher',
      content: (
        <TabContent
          imageSrc="/assets/teacher.png"
          imageAlt=""
          imageClassName=""
          title="Teacher"
          paragraphs={teacherContent}
        />
      ),
    },
    {
      label: 'Provider',
      content: (
        <TabContent
          imageSrc="/assets/provider.png"
          imageAlt=""
          imageClassName=""
          title="Provider"
          paragraphs={providerContent}
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

export default Strengths;
