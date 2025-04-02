"use client"

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LinearScale, CategoryScale, LineElement,PointElement, Legend, Title, ChartData } from "chart.js";

import { JSX } from "react";

ChartJS.register(
  LinearScale,
  CategoryScale,
  LineElement,
  PointElement,
  Legend,
  Title
);

export default function LineChart():JSX.Element {

  // データ
  // ChartData<'line'>は<>で何のチャートかを指定する
  const chartData:ChartData<'line'> = {
    // ラベル
    labels: ["Mobile","TV","Fridge","Bike"],
    datasets: [
      {
        // それぞれのデータ
        data:[6700,2300,5000,3000],
        // この線のラベル
        label: "Sales in Year 2025",
        // 線の色
        borderColor: "green",
        // 線の幅
        borderWidth:3,
        // 線の滑らかさ
        tension:0.5,
      },
      {
        // それぞれのデータ
        data:[4000,3000,1000,2000],
        // この線のラベル
        label: "Income in Year 2025",
        // 線の色
        borderColor: "orange",
        // 線の幅
        borderWidth:3,
        // 線の滑らかさ
        tension:0.5,
      },
    ]
  }
  return (
    <div className="flex max-w-3xl mx-auto px-10 justify-center items-center min-h-screen">
      <Line data={chartData}>

      </Line>
    </div>
  )
}