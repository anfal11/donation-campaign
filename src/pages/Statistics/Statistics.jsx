import Chart from "react-google-charts";
import { useLoaderData } from "react-router-dom";


const Statistics = () => {
  
  const donated = JSON.parse(localStorage.getItem("donated"));
  console.log(donated);
  const cards = useLoaderData();
  console.log(JSON.parse(cards));

  const hasDonationData = donated && donated.length > 0;

  const totalDonations = hasDonationData ? donated.length : JSON.parse(cards).length;
  const data = [
    ["Total donation", "My donation"],
    ["Your Donation", hasDonationData ? donated.length : 0], 
    ["Total Donation", totalDonations], 
  ];

  return (
 <>
     <div className="flex flex-col">
      <Chart
 chartType="PieChart"
      data={data}
      width={"100%"}
      height={"400px"}
/>
    </div>
 </>
  );
};

export default Statistics;


