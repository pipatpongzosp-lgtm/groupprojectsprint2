import React, { useState } from 'react';
import Navbarmenu from './Navbarmenu';

const DataRow = ({ rowId, imageUrl, data1, data2, data3, data4, onButton1, onButton2, onButton3 }) => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Image Section */}
        <div className="w-20 h-20 shrink-0">
          <img
            src={imageUrl || 'https://via.placeholder.com/80'}
            alt={`Row ${rowId} Image`}
            className="w-full h-full object-cover rounded border border-gray-300"
          />
        </div>
        {/* Data Section */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-white border border-gray-300 rounded p-3 text-center text-sm font-medium">{data1 || 'Data 1'}</div>
          <div className="bg-white border border-gray-300 rounded p-3 text-center text-sm font-medium">{data2 || 'Data 2'}</div>
          <div className="bg-white border border-gray-300 rounded p-3 text-center text-sm font-medium">{data3 || 'Data 3'}</div>
          <div className="bg-white border border-gray-300 rounded p-3 text-center text-sm font-medium">{data4 || 'Data 4'}</div>
        </div>
        {/* Buttons Section */}
        <div className="flex gap-2 w-full md:w-auto">
          <button
            className="flex-1 md:flex-none bg-accent hover:bg-orange-700 text-neutral px-4 py-2 rounded font-semibold transition duration-300"
            onClick={onButton1}

          >
            Button 1
          </button>
          <button
            className="flex-1 md:flex-none bg-accent hover:bg-orange-700 text-neutral px-4 py-2 rounded font-semibold transition duration-300"
            onClick={onButton2}
          >
            Button 2
          </button>
          <button
            className="flex-1 md:flex-none bg-accent hover:bg-orange-700 text-neutral px-4 py-2 rounded font-semibold transition duration-300"
            onClick={onButton3}
          >
            Button 3
          </button>
        </div>
      </div>
    </div>
  );
};

const Buttonmenu = () => {
  const [rows] = useState([
    { id: 1, image: '', data: ['Data 1', 'Data 2', 'Data 3', 'Data 4'] },
    { id: 2, image: '', data: ['Data 1', 'Data 2', 'Data 3', 'Data 4'] },
    { id: 3, image: '', data: ['Data 1', 'Data 2', 'Data 3', 'Data 4'] },
    { id: 4, image: '', data: ['Data 1', 'Data 2', 'Data 3', 'Data 4'] },
    { id: 5, image: '', data: ['Data 1', 'Data 2', 'Data 3', 'Data 4'] },
    { id: 6, image: '', data: ['Data 1', 'Data 2', 'Data 3', 'Data 4'] }
  ]);

  const handleButton = (rowId, buttonNum) => {
    alert(`Row ${rowId} - Button ${buttonNum} clicked!`);
  };

  return (
    <div className="min-h-screen bg-neutral">
      <Navbarmenu />
      <main className="p-4 md:p-8 lg:px-20 max-w-[1600px] mx-auto mt-4 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Box (Empty) */}
          <div className="lg:col-span-2 bg-white rounded-lg border border-gray-300 shadow-sm min-h-96 p-4"></div>

          {/* Middle Box (Main Content) */}
          <div className="lg:col-span-10 bg-white rounded-lg border border-gray-300 shadow-sm p-6">
            <div className="space-y-4">
              {rows.map((row) => (
                <DataRow
                  key={row.id}
                  rowId={row.id}
                  imageUrl={row.image}
                  data1={row.data[0]}
                  data2={row.data[1]}
                  data3={row.data[2]}
                  data4={row.data[3]}
                  onButton1={() => handleButton(row.id, 1)}
                  onButton2={() => handleButton(row.id, 2)}
                  onButton3={() => handleButton(row.id, 3)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Buttonmenu;
