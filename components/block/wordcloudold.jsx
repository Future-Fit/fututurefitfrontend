

"use client"
import React, { useEffect, useState } from "react";
import ReactWordcloud from "react-wordcloud";

const WordCloudSection = () => {
  const [jobTitles, setJobTitles] = useState([]);

  const keywords = ['Nurse', 'Engineering', 'Social',]; // Replace with your keywords


  const countKeywords = (titles, keywords) => {
    const counts = {};

    keywords.forEach(keyword => {
      counts[keyword] = 0;
    });

    // Count occurrences
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

        setJobTitles(wordCloudData); // Now jobTitles will store the word cloud data
      })
      .catch(error => {
        console.error('Error fetching job titles:', error);
      });
  }, []);

  const sizeMapper = (word) => {
    const minSize = 20; // Minimum font size
    const maxSize = 100; // Maximum font size
  
    const values = jobTitles.map(w => w.value);
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);
  
    // Avoid division by zero in case all values are the same
    const valueRange = maxValue - minValue || 1;
    const sizeRange = maxSize - minSize;
  
    // Scale the word value to the font size range
    const scaledValue = ((word.value - minValue) / valueRange) * sizeRange + minSize;
    console.log(`Word: ${word.text}, Value: ${word.value}, Size: ${scaledValue}`);

    return scaledValue;
  };

  // const wordCloudData = jobTitles; // Use the existing jobTitles data with mapped sizes


  const wordCloudData = jobTitles.map(title => ({
    text: title.text,
    value: title.value,
    fontSize: sizeMapper(title)
  }));


  console.log("Word values:", jobTitles.map(w => w.value));
  console.log("Mapped sizes:", jobTitles.map(w => sizeMapper(w)));
  console.log("WordCloud data:", jobTitles);


  const options = {
    enableTooltip: true,
    fontFamily: "impact",
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 2,
    rotationAngles: [0, 90],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000,

  };

  return (
    <div className="wordcloud-container">
      <ReactWordcloud
        words={wordCloudData}
        options={options}/>
      <style jsx>{`
        .wordcloud-container {
          width: 100%;
          height: 300px;
        }
      `}</style>
    </div>
  );
};

export default WordCloudSection;
