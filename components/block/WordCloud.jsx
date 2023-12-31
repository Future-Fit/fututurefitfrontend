import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import cloud from 'd3-cloud';

const WordCloud = ({ words }) => {
  const wordCloudRef = useRef();
  const color = d3.scaleOrdinal(d3.schemeCategory10); // Or use your own array of colors

  useEffect(() => {
    d3.select(wordCloudRef.current).selectAll("*").remove();

    const width = 600;
    const height = 150;
    const layout = cloud()
      .size([width, height])
      .words(words.map(d => ({ text: d.text, size: d.value * 2 }))) // Adjust size scaling as needed
      .padding(5)
      .rotate(0)
      .fontSize(d => d.size)
      .on('end', drawWordCloud);

    function drawWordCloud(words) {
      d3.select(wordCloudRef.current)
        .attr('viewBox', `0 0 ${width} ${height}`)
        .append('g')
        .attr('transform', `translate(${width / 2},${height / 2})`)
        .selectAll('text')
        .data(words)
        .enter().append('text')
        .style('font-size', d => `${d.size}px`)
        .style('font-family', 'Impact')
        .style('fill', (d, i) => color(i))
        .attr('text-anchor', 'middle')
        .attr('transform', d => `translate(${[d.x, d.y]}) rotate(${d.rotate})`)
        .text(d => d.text);
    }
    layout.start();
  }, [words]);

  return <svg ref={wordCloudRef} />;
};

export default WordCloud;
