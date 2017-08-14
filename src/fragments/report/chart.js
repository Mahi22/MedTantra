import React from 'react';

import {
  HorizontalGridLines,
  LineMarkSeries,
  XYPlot,
  XAxis,
  YAxis,
} from 'react-vis';

function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

const dataGen = () => new Array(4).fill(0).reduce((prev, curr) => [...prev, {
  x: prev.slice(-1)[0].x + 1,
  y: randomIntFromInterval(140, 60)
}], [{ x: 0, y: randomIntFromInterval(140, 60) }]);

const dates = [
  '13/06/15',
  '25/09/15',
  '02/02/16',
  '12/12/16',
  '23/03/17',
];



const Chart = ({width, height, index}) => {
    const data = dataGen();
    return (
      <XYPlot
        width={width}
        height={width / 1.68}>
        <XAxis tickFormat={v => dates[v]}/>
        <YAxis/>
        <HorizontalGridLines />
        <LineMarkSeries data={data} />
      </XYPlot>
    );
};

export default Chart;
