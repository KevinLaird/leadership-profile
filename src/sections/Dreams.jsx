import CopyContentContainer from '../components/CopyContentContainer';
import styles from './Dreams.module.css';

const Dreams = () => {
  const copyContentData = [
    {
      imageSrc: '/assets/community.png',
      imageAlt: 'Group of people vibing together',
      title: 'Community',
      paragraphs: [
        `I am a social person – I love communicating with people, ensuring everyone feels welcome, and bringing people together – that is one of my passions. As of 2023, I am attending the Master’s of Communication Leadership in Digital Media program at the University of Washington. I have made every effort to engage with my cohort and other previous cohorts. I appreciate that the program regularly puts together events every month to create engagement with the students of the program. I have also joined the Student Ambassador program to help prospective students determine if the program is right for them and to answer any questions they may have about the resources from the program or the campus.`,
        `In my free time, I run a community on Discord to create events for people to get together at local game stores to play Magic: The Gathering. As of writing this, the server boasts an impressive 140 people and events see an average turnout of at least 10 to 20 people. Community is a requirement for me both as a person and a leader. If I have a team I am part of or responsible for, I will do everything in my power to ensure that everyone has a voice and feels a sense of community. If I can achieve this dream, I would say that’s a success.`,
      ],
    },
    {
      imageSrc: '/assets/career.png',
      imageAlt: `Person climbing 'bars' to communicate advancement in career'`,
      title: 'Career',
      paragraphs: [
        `I grew up with the belief that if I finish High School, go to college, and apply myself to the learning that it provides, I would get a job where I’m paid well, where it's accommodating to my needs, and it appreciates me as a person. That unfortunately has not been the case. My career hasn’t been as straightforward as other people’s careers. With an interdisciplinary approach of design and development from my undergrad, my experience providing technical support for web hosting, and eventually leading a team, I have developed a skill set that is necessary for understanding how to be a leader within the tech industry.`,
        `I want what I listed earlier: appropriate compensation, accommodations, appreciation, security, and an upward career trajectory. If I join a company to apply my skills, I want to put everything I have into ensuring what I work on will result in trackable success at the company. If I can achieve that, live a life where I am happy and can pursue my passions, then I will have achieved a successful career. `,
      ],
    },
    {
      imageSrc: '/assets/routine.png',
      imageAlt: 'Calendar with a floral design',
      title: 'Routine',
      paragraphs: [
        `Routine can be difficult for someone like me. I have ADHD which can result in inconsistent routines without external structure driving those routines. For example, if I have a job with a consistent work-week, I excel at the work that’s assigned to me. But if I don’t have that external structure, I can be inconsistent with my productivity due to an imbalance of chemicals in my brain (there’s a saying within the community, “Chase the dopamine”).`,
        `I have a structure now that I’m attending my Master’s program at the University of Washington. One thing that resonated with me that one of my peers said in my class discussion for Kelley Myers’ class was, “persistence is more useful than consistency”. Even if I can’t always be consistent with my routines, if I’m persistent then consistency will follow.`,
        `Some routines I want to stay persistent with but is not limited to is is working out, going to bed at a reasonable time (ideally before 11 PM), waking up at or before 8:00 AM, completing at least one LinkedIn Learning course or any equivalent online courses every two weeks, and working on a passion project at least once a week, whether that be building a new deck for Magic: The Gathering, painting miniatures, or going out and hanging out with friends.`,
      ],
    },
  ];
  return (
    <div className={styles.container}>
      <CopyContentContainer copyContentData={copyContentData} />;
    </div>
  );
};

export default Dreams;
