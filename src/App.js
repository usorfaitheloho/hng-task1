import React from 'react';
import HomePage from './component/HomePage';

const App = () => {
  const links = [
    {
      id: 1,
      title: 'Twitter Link',
      url: 'https://twitter.com/faith_usor16',
    },
    {
      id: 2,
      title: 'Zuri Team',
      url: 'https://training.zuri.team/',
    },
    {
      id: 3,
      title: 'Zuri Books',
      url: 'https://books.zuri.team/',
    },
    {
      id: 4,
      title: 'Python Books',
      url: 'https://books.zuri.team/python-for-beginners?ref_id=%3Cvickymarz%3E',
    },
    {
      id: 5,
      title: 'Background Check for Coders',
      url: 'https://background.zuri.team/',
    },
    {
      id: 5,
      title: 'Design Books',
      url: 'https://books.zuri.team/design-rules',
    },
  ];

  return (
    <>
      <HomePage links={links} />
    </>
  );

};
export default App;
