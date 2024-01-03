import React, { useState, useEffect } from 'react';
import WordCloud from './WordCloud';

const WordCloudContainer = () => {
  const [jobTitles, setJobTitles] = useState([]);
  const keywords = ['Nurse', 'Engineer', 'Social', 'Manager', 'Developer', 'IT', 'Support', 'Research', 
  'Biomedical', 'Project', 'Director', 'Technical', 'Clinical', 
  'Specialist', 'Scientist', 'Worker', 'Senior', 'Backend', 'Frontend'];

  const countKeywords = (titles, keywords) => {
    const counts = {};
    keywords.forEach(keyword => {
      counts[keyword] = 0;
    });

    titles.forEach(title => {
      keywords.forEach(keyword => {
        if (title.toLowerCase().includes(keyword.toLowerCase())) {
          counts[keyword]++;
        }
      });
    });

    return counts;
  };

  useEffect(() => {
    fetch('https://api.futurefitinternational.com/jobpost')
      .then(response => response.json())
      .then(data => {
        const titles = data.map(job => job.job_title);
        const keywordCounts = countKeywords(titles, keywords);

        const wordCloudData = Object.entries(keywordCounts).map(([keyword, count]) => ({
          text: keyword,
          value: count
        }));

        setJobTitles(wordCloudData);
      })
      .catch(error => {
        console.error('Error fetching job titles:', error);
      });
  }, []);

  return <WordCloud words={jobTitles} />;
};

export default WordCloudContainer;
