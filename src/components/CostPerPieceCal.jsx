import React, { useState } from "react";

const CostPerPieceCalculator = () => {
  const [labourCost, setLabourCost] = useState(0);
  const [rawMaterialCost, setRawMaterialCost] = useState(0);
  const [energyCost, setEnergyCost] = useState(0);
  const [overhead, setOverhead] = useState(0);
  const [maintenance, setMaintenance] = useState(0);
  const [packaging, setPackaging] = useState(0);
  const [quality, setQuality] = useState(0);
  const [goodUnits, setGoodUnits] = useState(0);
  const [costPerUnit, setCostPerUnit] = useState(null);

  const calculateCostPerUnit = () => {
    const totalCost =
      parseFloat(labourCost) +
      parseFloat(rawMaterialCost) +
      parseFloat(energyCost) +
      parseFloat(overhead) +
      parseFloat(maintenance) +
      parseFloat(packaging) +
      parseFloat(quality);

    const perUnitCost = goodUnits > 0 ? (totalCost / parseFloat(goodUnits)).toFixed(2) : 0;
    setCostPerUnit(perUnitCost);
  };

  return (
    <div className="max-w-3xl p-6 mx-auto bg-white rounded-lg shadow-md">
      <h3 className="mb-6 text-xl font-bold text-center text-gray-700">Cost per Unit Calculator</h3>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">Labour Charge (per shift)</label>
          <input
            type="number"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter labour charge"
            value={labourCost}
            onChange={(e) => setLabourCost(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">Raw Material Cost (per unit)</label>
          <input
            type="number"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter raw material cost"
            value={rawMaterialCost}
            onChange={(e) => setRawMaterialCost(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">Energy Cost (per shift)</label>
          <input
            type="number"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter energy cost"
            value={energyCost}
            onChange={(e) => setEnergyCost(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">Overhead (per shift)</label>
          <input
            type="number"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter overhead cost"
            value={overhead}
            onChange={(e) => setOverhead(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">Maintenance (per shift)</label>
          <input
            type="number"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter maintenance cost"
            value={maintenance}
            onChange={(e) => setMaintenance(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">Packaging (per shift)</label>
          <input
            type="number"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter packaging cost"
            value={packaging}
            onChange={(e) => setPackaging(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">Quality (per shift)</label>
          <input
            type="number"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter quality cost"
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">Good Units (per shift)</label>
          <input
            type="number"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter good units"
            value={goodUnits}
            onChange={(e) => setGoodUnits(e.target.value)}
          />
        </div>
      </div>
      <button
        onClick={calculateCostPerUnit}
        className="w-full px-4 py-2 mt-6 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Calculate Cost per Unit
      </button>

      {costPerUnit !== null && (
        <div className="mt-6 text-center">
          <h4 className="text-xl font-bold text-gray-700">Cost per Unit</h4>
          <p className="mt-2 text-2xl font-semibold text-blue-600">Rs. {costPerUnit}</p>
        </div>
      )}
    </div>
  );
};

export default CostPerPieceCalculator;
