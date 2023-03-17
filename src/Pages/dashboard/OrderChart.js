import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { filterOrders } from './filerOrderData';

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

  return <Doughnut data={data} />;
}

export default OrderChart