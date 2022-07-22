import "./Chart.scss";
import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    total: 1000,
  },
  {
    name: "February",
    total: 1400,
  },
  {
    name: "March",
    total: 950,
  },
  {
    name: "April",
    total: 1700,
  },
  {
    name: "Mai",
    total: 1400,
  },
  {
    name: "June",
    total: 900,
  },
];

function Chart({ title, width, height }) {
  return (
    <div className="chart">
      <p className="title">{title}</p>
      <AreaChart
        width={width}
        height={height}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="total"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#total)"
        />
      </AreaChart>
    </div>
  );
}

export default Chart;
