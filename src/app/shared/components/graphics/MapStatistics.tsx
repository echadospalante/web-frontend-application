import {
  ArcElement,
  BarElement,
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import { Col, Row } from 'reactstrap';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
);

const barChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Este es el título de la gráfica',
    },
  },
};

const pieChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Este es el título de la gráfica',
    },
  },
};

const barChartLabels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
];

const barChartData = {
  labels: barChartLabels,
  datasets: [
    {
      label: 'Dataset 1',
      data: barChartLabels.map(() => Math.floor(Math.random() * 1000)),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: barChartLabels.map(() => Math.floor(Math.random() * 1000)),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const pieChartData: ChartData<'pie', number[], string> = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random(),
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const MapStatistics = () => {
  return (
    <div className="mb-3">
      <Bar
        className="px-2 px-md-4"
        options={barChartOptions}
        data={barChartData}
      />
      <Row className="mt-5 px-1">
        <Col lg={6} md={8} className="mx-auto my-md-3 my-sm-4" sm={12}>
          <Pie
            className="w-100 h-100"
            options={pieChartOptions}
            data={pieChartData}
          />
        </Col>
        <Col lg={6} md={8} className="mx-auto my-md-3 my-sm-4" sm={12}>
          <Pie
            className="w-100 h-100"
            options={pieChartOptions}
            data={pieChartData}
          />
        </Col>
      </Row>
    </div>
  );
};

export default MapStatistics;
