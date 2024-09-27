import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { boostrap } from '../helpers';

export const Gauge = ({ value, max, years }) => {
  const ref = useRef(null);

  useEffect(() => {
	const svg = d3.select(ref.current);
	svg.selectAll('*').remove(); // Nettoyer le SVG

	const width = 200;
	const height = 120;
	const radius = Math.min(width, height) / 2;

	const greenTo = 100 * (1 - Math.pow((1 - 0.01), years));
	const yellowTo = 100 * (1 - Math.pow((1 - 0.02), years));
	const orangeTo = 100 * (1 - Math.pow((1 - 0.03), years));
	const redTo = 100 * (1 - Math.pow((1 - 0.08), years));
	
	const colorScale = d3.scaleLinear()
	  .domain([0, greenTo, yellowTo, orangeTo, redTo, 100])
	  .range(['green', 'yellow', 'orange', 'red', 'black']);

	const arc = d3.arc()
	  .innerRadius(radius - 10)
	  .outerRadius(radius)
	  .startAngle(-Math.PI / 2);

	const g = svg.append('g')
	  .attr('transform', `translate(${width / 2}, ${height})`);

	// Ajouter les arcs de couleur
	for (let i = 0; i <= 100; i++) {
	  const ratio = i / 100;
	  g.append('path')
		.datum({ endAngle: (-Math.PI / 2) + (Math.PI * ratio) })
		.style('fill', colorScale(ratio))
		.attr('d', arc);
	}

	// Ajouter l'aiguille
	const needle = g.append('line')
	  .attr('x1', 0)
	  .attr('y1', 0)
	  .attr('x2', 0)
	  .attr('y2', -radius + 10)
	  .attr('stroke', 'black')
	  .attr('stroke-width', 2);

	const valueScale = d3.scaleLinear()
	  .domain([0, max])
	  .range([-Math.PI / 2, Math.PI / 2]);

	needle.attr('transform', `rotate(${valueScale(value) * (180 / Math.PI)})`);
  }, [value, max, years]);

  return (
	<svg ref={ref} width={200} height={120}></svg>
  );
};

export const CustomGauge = ({ item, years }) => {
  const value = Math.round(boostrap(years, parseFloat(item.value)).p_end);

  return <Gauge value={value} max={100} years={years} />;
};

export const getBorderStyle = (years, item, boostrap) => {
  const greenTo = 100 * (1 - Math.pow((1 - 0.01), years));
  const yellowTo = 100 * (1 - Math.pow((1 - 0.02), years));
  const orangeTo = 100 * (1 - Math.pow((1 - 0.03), years));
  const redTo = 100 * (1 - Math.pow((1 - 0.08), years));

  const gaugeValue = Math.round(boostrap(years, parseFloat(item.value)).p_end);
  let borderColor = "";

  if (gaugeValue <= greenTo) {
	borderColor = "green";
  } else if (gaugeValue <= yellowTo) {
	borderColor = "yellow";
  } else if (gaugeValue <= orangeTo) {
	borderColor = "orange";
  } else if (gaugeValue <= redTo) {
	borderColor = "red";
  } else {
	borderColor = "black";
  }

  const borderStyle = {
	borderLeft: `10px solid ${borderColor}`,  // Bordure à gauche de 10px
  };
  return borderStyle;
};
