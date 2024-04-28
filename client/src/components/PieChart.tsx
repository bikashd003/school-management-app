import "chart.js/auto";
import { useEffect, useState } from "react";
import { Chart } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getPieChart } from "../redux/dataSlice";
import { RootState } from "../redux/store";
interface PieChartData {
    gender: string;
    count: number;
  }
  
  interface PieChartProps {
    id: string;
  }
const PieChart = ({ id }: PieChartProps) => {
  const dispatch = useDispatch();
  const { pieChartData } = useSelector((state: RootState) => state.data);
  const [labels, setLabels] = useState<string[]>([]);
  const [chartData, setChartData] = useState<number[]>([]);

  useEffect(() => {
    dispatch(getPieChart(id) as any);
    setLabels(pieChartData.map((item: PieChartData) => item.gender));
    setChartData(pieChartData.map((item: PieChartData) => item.count));
  }, [id]);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "count",
        data: chartData,
        backgroundColor: [
          "rgba(54, 162, 235, 2)",
          "rgba(255, 20, 86, 2)",
        ],
      },
    ],
  };
  return (
    <>
     {pieChartData.length && <Chart type="pie" data={data} />}
    </>
  );
};

export default PieChart;