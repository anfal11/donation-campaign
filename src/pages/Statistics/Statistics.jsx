import Chart from "react-google-charts";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const donated = JSON.parse(localStorage.getItem("donated"));
  const cards = useLoaderData();

  const totalDonations = JSON.parse(cards).length;

  const data = [
    ["Total donation", "My donation"],
    ["Your Donation", donated ? donated.length : 0], 
    ["Total Donation", totalDonations], 
  ];

  return (
    <div>
      <Chart
        chartType="PieChart"
        data={data}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
};

export default Statistics;
