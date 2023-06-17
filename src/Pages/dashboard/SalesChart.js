import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { sales } from "./filterOrderData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  aspectRatio: 2,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

function SalesChart({ orders }) {
  const [year, setYear] = useState("2022")
  const months = sales(orders, year).map((a, i, arr) => arr[i][0])
  const monthlySales = sales(orders, year).map((a, i, arr) => arr[i][1])
  const data = {
    labels: [...months],
    datasets: [
      {
        label: "sales",
        data: [...monthlySales],
        backgroundColor: 'rgb(255, 99, 132)',
      }
    ],
  };

  return (
    <div className='sales_chart item'>
      <select 
      value={year} 
      onChange={(e) => setYear(e.target.value)}
      aria-label="year"
      >
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
      <Bar options={options} data={data} aria-label="sales chart"/>
    </div>
  );
}
export default SalesChart
