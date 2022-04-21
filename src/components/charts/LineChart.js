import React from 'react';
import {Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
} from 'chart.js';
  import { Line } from 'react-chartjs-2';
  ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,PointElement,LineElement);
  
export const options = {
  scales : {
    x:{
      ticks: {
        font: 15,
        color: '#fff'
      }
    },
    y:{
      ticks: {
        font: 15,
        color: '#fff'
      }
    }
  },
responsive: true,
layout: {
    padding: {
    top: 10,
    left: 5,
    right: 12,
    bottom:10
    }
},
};
  
const labels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  
  export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [725,500,150,325,700,650,150],
            backgroundColor: '#E9EAED',
            borderRadius: 5,
            borderWidth: 8,
            borderColor: '#E9EAED'
        },
    ],
  };
  
const chartComponent = ({bg,boxClass}) => {
    return (
        <div className='chart-container'>
            <Line className={boxClass} style={{background: bg}} options={options} data={data} />
        </div>
    );
};

export default chartComponent;