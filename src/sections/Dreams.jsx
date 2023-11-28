import React from 'react';
import CopyContentContainer from '../components/CopyContentContainer';

const Dreams = () => {
  const copyContentData = [
    {
      imageSrc: '/assets/community.png',
      imageAlt: '...',
      title: 'Community',
      paragraphs: ['Paragraph 3', 'Paragraph 4'],
    },
    {
      imageSrc: '/assets/career.png',
      imageAlt: '...',
      title: 'Career',
      paragraphs: [
        'Lorem ipsum dolor sit amet consectetur. Pellentesque ipsum et eget fermentum. Velit senectus ut vitae nullam tellus pellentesque auctor. Lacus est erat duis sed amet libero at vulputate tellus. Eu egestas sit fringilla ullamcorper duis ullamcorper. Morbi tincidunt et cras aliquam urna tincidunt. Sollicitudin pulvinar tempus varius quam diam nec commodo. Feugiat quis viverra donec adipiscing in montes et nisi eu. Vel lorem lacus interdum sed.',
        'Aliquam est turpis mauris aliquam pellentesque. At semper sed id lectus tristique purus morbi scelerisque tristique. Adipiscing est facilisi malesuada posuere. Sed odio dictum mattis nulla urna scelerisque. Amet feugiat.',
      ],
    },
    {
      imageSrc: '/assets/routine.png',
      imageAlt: '...',
      title: 'Routine',
      paragraphs: [
        'Lorem ipsum dolor sit amet consectetur. Pellentesque ipsum et eget fermentum. Velit senectus ut vitae nullam tellus pellentesque auctor. Lacus est erat duis sed amet libero at vulputate tellus. Eu egestas sit fringilla ullamcorper duis ullamcorper. Morbi tincidunt et cras aliquam urna tincidunt. Sollicitudin pulvinar tempus varius quam diam nec commodo. Feugiat quis viverra donec adipiscing in montes et nisi eu. Vel lorem lacus interdum sed.',
        'Aliquam est turpis mauris aliquam pellentesque. At semper sed id lectus tristique purus morbi scelerisque tristique. Adipiscing est facilisi malesuada posuere. Sed odio dictum mattis nulla urna scelerisque. Amet feugiat.',
      ],
    },
  ];
  return <CopyContentContainer copyContentData={copyContentData} />;
};

export default Dreams;
