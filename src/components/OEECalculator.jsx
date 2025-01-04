import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const OEECalculator = () => {
  const [shiftTime, setShiftTime] = useState(480);
  const [plannedMaintenance, setPlannedMaintenance] = useState(60);
  const [unplannedDowntime, setUnplannedDowntime] = useState(30);
  const [idealCycleTime, setIdealCycleTime] = useState(190);
  const [totalProduced, setTotalProduced] = useState(57000);
  const [goodUnits, setGoodUnits] = useState(52000);

  // Calculate AMR (Actual Machine Running Time)
  const actualMachineRunningTime = shiftTime - plannedMaintenance - unplannedDowntime;

  // Calculate Availability
  const availability = (
    (actualMachineRunningTime / shiftTime) * 100
  ).toFixed(2);

  // Correct Performance Calculation
  const performance = (
    (totalProduced / (idealCycleTime * actualMachineRunningTime)) * 100
  ).toFixed(2);

  // Calculate Quality
  const quality = ((goodUnits / totalProduced) * 100).toFixed(2);

  // Calculate Overall OEE
  const totalOEE = ((availability / 100) * (performance / 100) * (quality / 100) * 100).toFixed(2);

  const data = [
    { name: 'Availability', value: parseFloat(availability), color: '#00C49F' },
    { name: 'Performance', value: parseFloat(performance), color: '#FFBB28' },
    { name: 'Quality', value: parseFloat(quality), color: '#FF8042' },
  ];

  return (
    <div className="p-4 bg-gray-100 rounded shadow-2xl">
      <h3 className="mb-4 text-xl font-bold">OEE Calculator</h3>
      <div className="flex flex-col items-center justify-center">
        <PieChart width={250} height={250}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            paddingAngle={5}
            startAngle={90}
            endAngle={450}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        <div className="mt-4 text-center">
          <h2 className="text-3xl font-bold">{totalOEE}%</h2>
          <p className="text-sm text-gray-600">Overall Equipment Effectiveness</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {/* Availability Section */}
        <div className="p-4 bg-white border shadow-xl rounded-xl">
          <h4 className="font-bold text-green-600">Availability</h4>
          <div className="mt-2">
            <label className="block text-sm">Shift Time (mins)</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={shiftTime}
              onChange={(e) => setShiftTime(Number(e.target.value))}
            />
          </div>
          <div className="mt-2">
            <label className="block text-sm">Planned Maintenance (mins)</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={plannedMaintenance}
              onChange={(e) => setPlannedMaintenance(Number(e.target.value))}
            />
          </div>
          <div className="mt-2">
            <label className="block text-sm">Unplanned Downtime (mins)</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={unplannedDowntime}
              onChange={(e) => setUnplannedDowntime(Number(e.target.value))}
            />
          </div>
          <p className="mt-4 text-xl font-bold text-green-600">{availability}%</p>
        </div>

        {/* Performance Section */}
        <div className="p-4 bg-white border shadow-xl rounded-xl">
          <h4 className="font-bold text-yellow-600">Performance</h4>
          <div className="mt-2">
            <label className="block text-sm">Ideal Cycle Time (pcs/min)</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={idealCycleTime}
              onChange={(e) => setIdealCycleTime(Number(e.target.value))}
            />
          </div>
          <div className="mt-2">
            <label className="block text-sm">Total Produced (pcs)</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={totalProduced}
              onChange={(e) => setTotalProduced(Number(e.target.value))}
            />
          </div>
          <p className="mt-4 text-xl font-bold text-yellow-600">{performance}%</p>
        </div>

        {/* Quality Section */}
        <div className="p-4 bg-white border shadow-xl rounded-xl">
          <h4 className="font-bold text-blue-600">Quality</h4>
          <div className="mt-2">
            <label className="block text-sm">Good Units (pcs)</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={goodUnits}
              onChange={(e) => setGoodUnits(Number(e.target.value))}
            />
          </div>
          <p className="mt-4 text-xl font-bold text-blue-600">{quality}%</p>
        </div>
      </div>
    </div>
  );
};

export default OEECalculator;
