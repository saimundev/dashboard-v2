"use client";

import { chartData } from "@/data/chatData";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const DashboardOverview = () => {
  return (
    <div className="w-full dashboard_cart_wrapper">
      <h3 className="text-base font-semibold">Overview</h3>

      <ResponsiveContainer className="max-h-[500px] mt-8">
        <BarChart data={chartData}>
          <XAxis dataKey="name" className="text-sm font-medium" />
          <YAxis className="text-sm font-medium" />
          <Tooltip cursor={false} itemStyle={{ fontSize: 12 }} />

          <Bar
            barSize={50}
            dataKey="pv"
            radius={[6, 6, 0, 0]}
            className="fill-black"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardOverview;
