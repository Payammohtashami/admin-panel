import React from 'react';
import { Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);
  
  export const options = {
    responsive: true,
    layout: {
      padding: {top: 15,left: 5,right: 12,bottom: 10}
    },
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
  };
  
  const labels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  
  export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [725,500,450,125,500,750,250],
            backgroundColor: '#DEE2E8',
            borderRadius: 5,
            fontSize: 25
          },
    ],
  };
  
const chartComponent = ({bg,boxClass}) => {
    return (
        <div className='chart-container'>
            <Bar className={boxClass} style={{background: bg}} options={options} data={data} />
        </div>
    );
};

export default chartComponent;