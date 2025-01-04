import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const RevenueLossCalculator = () => {
  const [idealCycleTime, setIdealCycleTime] = useState(190);
  const [sellingPrice, setSellingPrice] = useState(5);
  const [plannedMaintenance, setPlannedMaintenance] = useState(60);
  const [unplannedDowntime, setUnplannedDowntime] = useState(30);
  const [data, setData] = useState([]);

  // Calculate Metrics
  const totalDowntime = plannedMaintenance + unplannedDowntime;
  const totalPiecesLost = idealCycleTime * totalDowntime;
  const revenueLoss = totalPiecesLost * sellingPrice;

  const handleCalculate = () => {
    // Add data to the graph
    setData((prevData) => [
      ...prevData,
      {
        name: `Entry ${prevData.length + 1}`,
        totalDowntime,
        totalPiecesLost,
        revenueLoss,
      },
    ]);
  };

  return (
    <div className="max-w-4xl p-6 mx-auto bg-white rounded-lg shadow-2xl">
      <h3 className="mb-6 text-2xl font-bold text-center text-gray-700">
        Revenue Loss Calculator
      </h3>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Ideal Cycle Time (pcs/min)
          </label>
          <input
            type="number"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={idealCycleTime}
            onChange={(e) => setIdealCycleTime(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Selling Price (per unit)
          </label>
          <input
            type="number"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Planned Maintenance (mins)
          </label>
          <input
            type="number"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={plannedMaintenance}
            onChange={(e) => setPlannedMaintenance(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Unplanned Downtime (mins)
          </label>
          <input
            type="number"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={unplannedDowntime}
            onChange={(e) => setUnplannedDowntime(Number(e.target.value))}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="p-4 border shadow-xl rounded-xl bg-gray-50">
          <h4 className="text-lg font-semibold text-gray-600">Total Downtime</h4>
          <p className="mt-2 text-2xl font-bold text-blue-600">{totalDowntime} mins</p>
        </div>
        <div className="p-4 border shadow-xl rounded-xl bg-gray-50">
          <h4 className="text-lg font-semibold text-gray-600">Total Pieces Lost</h4>
          <p className="mt-2 text-2xl font-bold text-red-600">{totalPiecesLost} pcs</p>
        </div>
        <div className="p-4 border shadow-xl rounded-xl bg-gray-50">
          <h4 className="text-lg font-semibold text-gray-600">Revenue Loss</h4>
          <p className="mt-2 text-2xl font-bold text-green-600">₹{revenueLoss}</p>
        </div>
      </div>
      <button
        onClick={handleCalculate}
        className="w-full px-4 py-2 mt-6 font-semibold text-white bg-blue-500 shadow-xl rounded-xl hover:bg-blue-600"
      >
        Calculate and Add to Graph
      </button>
      <div className="mt-10">
        <h4 className="mb-4 text-xl font-bold text-gray-700">Revenue Loss Graph</h4>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="totalDowntime"
              stroke="#8884d8"
              name="Total Downtime"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="totalPiecesLost"
              stroke="#82ca9d"
              name="Total Pieces Lost"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="revenueLoss"
              stroke="#ff7300"
              name="Revenue Loss"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueLossCalculator;
