'use client';
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const LineChart = () => {
  const [chartData, setChartData] = useState({
    labels: [
      "Jan",
      "",
      "Feb",
      "",
      "Mar",
      "",
      "Apr",
      "",
      "May",
      "",
      "Jun",
      "",
      "Jul",
      "",
    ],
    datasets: [
      {
        data: [42, 46, 52, 50, 54, 45, 47, 41, 32, 42, 38, 42, 48, 46], // Design data points
        backgroundColor: "transparent", // Optional: Set a color for the design line
        borderColor: "#70A56F", // Optional: Set a color for the design
        pointBorderColor: "transparent", // Optional: Set a color for the design
        pointBorderWidth: 3,
        tension: 0.5,
      },
      {
        data: [46, 48, 41, 53, 51, 52, 52.5, 45, 47, 45, 48, 35, 39, 49], // Design data points
        backgroundColor: "transparent", // Optional: Set a color for the design line
        borderColor: "#DBE8DB", // Optional: Set a color for the design
        pointBorderColor: "transparent", // Optional: Set a color for the design
        pointBorderWidth: 3,
        tension: 0.5,
      },
    ],
  });

  useEffect(() => {
    Chart.register({
      id: "fillBetweenLines",
      beforeDraw: (chart, args, options) => {
        const { ctx, chartArea, scales } = chart;
        const xAxis = scales["x"];
        const xTicks = xAxis.ticks;
        const colors = ["#EDF4ED6B", "transparent"]; // Colors for alternating fill

        for (let i = 0; i < xTicks.length - 1; i++) {
          const startX = xAxis.getPixelForTick(i);
          const endX = xAxis.getPixelForTick(i + 1);
          const colorIndex = i % 2;

          ctx.fillStyle = colors[colorIndex];
          ctx.fillRect(
            startX,
            chartArea.top,
            endX - startX,
            chartArea.bottom - chartArea.top
          );
        }
      },
    });
  }, []);

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: false,
      title: {
        
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
          drawOnChartArea: false,
        },
        barPercentage: 1, // Adjust the bar width
        categoryPercentage: 0.5, // Adjust the space between bars
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
          drawOnChartArea: false,
        },
        min: 30,
        max: 60,
        ticks: {
          stepSize: 10,
          callback: (value) => value + "k",
        },
      },
    },
    layout: {
      padding: {
        top: 10,
        bottom: 10,
      },
    },
  };

  return (
    <div className="bg-white pt-6 relative m-auto">
      <Line data={chartData} options={options} height={300} />
    </div>
  );
};

export default LineChart;
