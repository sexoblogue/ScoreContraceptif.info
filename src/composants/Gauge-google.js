//composants/Gauge-google.js
import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import { boostrap } from '../helpers';

export const CustomGauge = ({ item, years }) => {
  const [chartHeight, setChartHeight] = useState('120px');
  
  useEffect(() => {
	const updateSize = () => {
	  const viewportWidth = window.innerWidth;

	  if (viewportWidth > 768) {
		setChartHeight('120px');
	  } else if (viewportWidth > 375) {
		setChartHeight('100px');
	  } else {
		setChartHeight('80px');
	  }
	};

	// Initial size update
	updateSize();

	// Listen for window resize events
	window.addEventListener('resize', updateSize);

	// Cleanup
	return () => {
	  window.removeEventListener('resize', updateSize);
	};
  }, []);
  
  
   // Cette fonction permet de calculer le pourcentage de risque sur plusieurs années.
  const { p_end } = boostrap(years, parseFloat(item.value));

  // Calculez les plages de couleur en fonction de la variable {years}
  const greenTo = 100 * (1 - Math.pow((1 - 0.01), years));
  const yellowFrom = greenTo;
  const yellowTo = 100 * (1 - Math.pow((1 - 0.1), years));
  const redFrom = yellowTo;

  return (
	<Chart
	  chartType="Gauge"
	  data={[
		['Label', 'Value'],
		[
		  '',
		  {
			v: Math.round(p_end),
			f: `${Math.round(p_end)}%`,
		  },
		],
	  ]}
	  height={chartHeight}
	  legendToggle
	  options={{
		greenFrom: 0,
		greenTo: greenTo,
		yellowFrom: yellowFrom,
		yellowTo: yellowTo,
		redFrom: redFrom,
		redTo: 100,
	  }}
	/>
  );
};

export const getBorderStyle = (years, item, boostrap) => {
  const greenTo = 100*(1 - Math.pow((1-0.01),years));
  const yellowFrom = greenTo;
  const yellowTo = 100*(1 - Math.pow((1-0.1),years));
  const redFrom = yellowTo;

  const gaugeValue = Math.round(boostrap(years, parseFloat(item.value)).p_end);
  let borderColor = "";

  if (gaugeValue <= greenTo) {
	borderColor = "green";
  } else if (gaugeValue > yellowFrom && gaugeValue <= yellowTo) {
	borderColor = "orange";
  } else {
	borderColor = "red";
  }

  const borderStyle = {
	  borderLeft: `10px solid ${borderColor}`,  // Bordure à gauche de 10px
	};
  return borderStyle;
};
