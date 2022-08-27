import "./charts.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import React from "react";

export default function Charts(data, grid) {
    data = [
        {
          name: 'JAN',
          "Active User": 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'FEB',
          "Active User": 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'MAR',
          "Active User": 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'APR',
          "Active User": 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'MAY',
          "Active User": 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'JUN',
          "Active User": 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'JUL',
          "Active User": 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
  return (
    <div className="chart">
        <h3 className="chartTitle"> Monthly Analytics</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke="#5550bd"/>
                <Line type="monotype" dataKey="Active User" stroke="#8670cd"/>
                <Tooltip/>
              { grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/> }
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
