import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList
} from 'recharts';

const data = [
  {
    name: 'Points Frontend', Laravel: 7, ReactJS: 8.6,
  },
  {
    name: 'Points Backend', Laravel: 9, ReactJS: 6,
  },
];

export default class Example extends PureComponent {

  render() {
    return (
      <BarChart 
        height={300}
        width={350}
        data={data}
        margin={{
          top: 15, right: 30, left: 0, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Laravel" fill="#373B44" ><LabelList dataKey="Laravel" fill="#373B44" position="top" /></Bar>
        <Bar dataKey="ReactJS" fill="#4286f4" ><LabelList dataKey="ReactJS" fill="#4286f4"  position="top" /></Bar>
      </BarChart>
    );
  }
}
