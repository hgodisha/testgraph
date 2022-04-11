import { Line } from "react-chartjs-2";
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Total Work done",
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};


const labels = ["1", "2", "3", "4", "5", "6", "7"];

export const data = {
  labels: labels,
  datasets: [
    {
      label: "Tasks Per Day",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

export default function NoOfTasksPerDay() {
  return (
    <div>
      
        <Line options={options} data={data} />
      
    </div>
  );
}