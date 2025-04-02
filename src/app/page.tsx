import LineChart from "@/components/LineChart";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return(
    <>
    <div className="bg-gray-200 w-full h-full">
      <LineChart />
    </div>
    </>
  )
}
