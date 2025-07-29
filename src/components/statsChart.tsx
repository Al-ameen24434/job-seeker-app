import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import type { Job } from '../types';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


interface StatsChartProps {
  jobs: Job[];
}

export default function StatsChart({ jobs }: StatsChartProps) {
  const statuses = ['Applied', 'Interview', 'Offer', 'Rejected'];
  const data = {
    labels: statuses,
    datasets: [{
      label: 'Applications',
      data: statuses.map(s => jobs.filter(j => j.status === s).length),
      backgroundColor: '#8b5cf6',
    }]
  };

  return <Bar data={data} />;
}