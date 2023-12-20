import React from "react";
import ReactWordcloud from "react-wordcloud";

const WordCloudSection = () => {
  const wordCloudData = [
    { text: "Software Developer", value: 400 },
    { text: "Data Analyst", value: 300 },
    { text: "Nurse", value: 250 },
    { text: "Mechanical Engineer", value: 200 },
    { text: "Teacher", value: 180 },
    { text: "Marketing Manager", value: 170 },
    { text: "Electrician", value: 160 },
    { text: "Financial Analyst", value: 150 },
    { text: "Graphic Designer", value: 140 },
    { text: "Dentist", value: 130 },
    { text: "Pharmacist", value: 120 },
    { text: "Civil Engineer", value: 110 },
    { text: "Project Manager", value: 100 },
    { text: "Architect", value: 95 },
    { text: "Human Resources Manager", value: 90 },
    { text: "Accountant", value: 85 },
    { text: "Executive Assistant", value: 800 },
    { text: "Mechanic", value: 75 },
    { text: "Social Worker", value: 70 },
    { text: "Chef", value: 65 },
    { text: "Web Developer", value: 60 },
    { text: "Physiotherapist", value: 55 },
    { text: "Biomedical Engineer", value: 50 },
    { text: "Electric Engineer", value: 45 },
    { text: "IT Manager", value: 40 },
    { text: "Lawyer", value: 35 },
    { text: "Medical Doctor", value: 30 },
    { text: "Journalist", value: 25 },
    { text: "Veterinarian", value: 22 },
    { text: "Customer Service Representative", value: 20 },
    { text: "Interior Designer", value: 18 },
    { text: "Software Tester", value: 16 },
    { text: "Bank Teller", value: 14 },
    { text: "Flight Attendant", value: 12 },
    { text: "Sales Representative", value: 10 },
    { text: "Electrician", value: 8 },
    { text: "Real Estate Agent", value: 6 },
    { text: "Plumber", value: 4 },
    { text: "Fashion Designer", value: 2 },
    { text: "Security Guard", value: 1 },
  ];
  // Adjust font size based on value
 
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
          height: 300px; // Adjust height as needed
        }
      `}</style>
    </div>
  );
};

export default WordCloudSection;
