import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { filterOrders } from './filterOrderData';
const options = {
  responsive: true,
  aspectRatio: 2,
};

ChartJS.register(ArcElement, Tooltip, Legend);
function OrderChart({ orders }) {
  const data = {
    labels: ['Cancled', 'Delivered', 'Pending'],
    datasets: [
      {
        label: 'orders in %',
        data: [...filterOrders(orders)],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
      orders.length === 0 ? (
        <h4>Loading</h4>
      ):(
        <div className='order_chart item'>
          <h4 className='order_chart_heading'>Total Orders in %</h4>
          <Doughnut data={data} options={options} aria-label="orders chart"/>
        </div>
      )
  );
}

export default OrderChart