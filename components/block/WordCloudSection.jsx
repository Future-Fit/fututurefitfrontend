import React from 'react';
import WordCloud from './WordCloudContainer';

const WordCloudSection = () => {
  const words = [
    { text: 'Hello', value: 2 },
    { text: 'World', value: 3 },
    // Add more words here
  ];

  return <WordCloud words={words} />;
};

export default WordCloudSection;