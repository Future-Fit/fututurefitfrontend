"use client"
import React, { useEffect, useState } from "react";
import ReactWordcloud from "react-wordcloud";

const WordCloudSection = () => {

  const [jobTitles, setJobTitles] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://api.futurefitinternational.com/jobpost')
      .then((response) => response.json())
      .then((data) => {
        // Extract job titles from the data and store them in an array
        const titles = data.map((job) => job.job_title);
        setJobTitles(titles);
      })
      .catch((error) => {
        console.error('Error fetching job titles:', error);
      });
  }, []);

  // Process job titles to create word cloud data
  const wordCloudData = jobTitles.map((title) => ({
    text: title,
    value: Math.floor(Math.random() * 500) + 1, // Assign a random value (for example purposes)
  }));

  const sizeMapper = (word) => {
    const minSize = 20; // Minimum font size
    const maxSize = 180; // Maximum font size

    // Get the highest and lowest values
    const minValue = Math.min(...wordCloudData.map(w => w.value));
    const maxValue = Math.max(...wordCloudData.map(w => w.value));

    // Scale values to the font size range
    const scaledValue = (word.value - minValue) / (maxValue - minValue) * (maxSize - minSize) + minSize;

    return scaledValue;
  };
  const options = {
    enableTooltip: false,
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
        options={options}
        sizeMapper={sizeMapper}
      />
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
