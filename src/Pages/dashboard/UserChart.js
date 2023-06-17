import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { filterUsers } from '../../Utils/FilterUsers';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// const options = {
//   responsive: true,
//   aspectRatio: 2,
//   plugins: {
//     legend: {
//       position: 'center',
//     },
//   },
// };



const UsersChart = ({ users }) => {
  const months = filterUsers(users).map((user, i, arr) => arr[i][0])
  const activeUsers = filterUsers(users).map((user, i, arr) => arr[i][1])

  const data = {
    labels: [...months],
    datasets: [
      {
        label: 'Dataset 1',
        data: [...activeUsers],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };
  const options = {
    responsive: true,
    aspectRatio: 2,
    maintainAspectRatio: true,
  };

  return (
    <div className='users_chart item'>
      <h4>Monthly users</h4>
      <Line
        options={options}
        data={data}
        aria-label="users chart"
      />
    </div>

  )
}

export default UsersChart