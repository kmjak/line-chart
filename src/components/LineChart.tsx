"use client"

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LinearScale, CategoryScale, LineElement,PointElement, Legend, Title, ChartData, ChartOptions, Tooltip } from "chart.js";

import { JSX } from "react";

ChartJS.register(
  LinearScale,
  CategoryScale,
  LineElement,
  PointElement,
  Legend,
  Title,
  Tooltip,
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

  // オプション
  // ChartOptions<'line'>は<>で何のチャートかを指定する
  const options:ChartOptions<'line'> = {
    // レスポンシブ対応をつけるか
    responsive: true,
    // グラフのアスペクト比
    aspectRatio: 1,
    // x軸やy軸の設定
    scales: {
      // y軸の設定
      y: {
        // 値がマイナスでも0から始まるようにする
        beginAtZero: true,
        // y軸の最小値
        min: 0,
        // y軸の最大値
        max: 10000,
        // y軸のタイトル
        title: {
          // タイトルを表示するか
          display: true,
          // 表示するタイトル
          text: "Amount In Rs",
          // タイトルの色
          color: "purple",
          // タイトルのフォント設定
          font: {
            size: 20,
          },
        },
      },
      // x軸の設定
      x: {
        // 値がマイナスでも0から始まるようにする
        beginAtZero: true,
        // x軸の最小値
        min: 0,
        // x軸の最大値
        max: 10000,
        // x軸のタイトル
        title: {
          // タイトルを表示するか
          display: true,
          // 表示するタイトル
          text: "Item Name",
          // タイトルの色
          color: "purple",
          // タイトルのフォント設定
          font: {
            size: 20,
          },
        },
      },
    },
    // pluginsの設定
    plugins: {
      // 凡例の設定
      legend: {
        // 凡例を表示するか
        display: true,
        // 凡例の位置
        position: "bottom",
        // 判例の詳細設定
        labels:{
          // 凡例の文字の色
          color: "blue",
          // 凡例の文字のフォント設定
          font:{
            size: 15,
          },
          // 凡例のボックスの横幅
          boxWidth: 80,
          // 凡例のボックスの高さ
          boxHeight: 20,
        },
      },
      // グラフのタイトルの設定
      title: {
        // タイトルを表示するか
        display: true,
        // タイトルの表示内容
        text: "Company Report - Y2025",
        // タイトルのフォント設定
        font: {
          // タイトルのフォントサイズ
          size: 25,
        },
        // タイトルの色
        color: "gray",
      }
    },
  }

  return (
    <div className="flex max-w-3xl mx-auto px-10 justify-center items-center min-h-screen">
      <Line data={chartData} options={options} />
    </div>
  )
}