import React from 'react';
import { orderDetail as orderData } from '../../assets/orderdriver'; 

const StageButton = ({ active, stage, text, icon }) => (
  <div className={`flex-1 border-2 py-2 px-1 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm ${active ? 'border-cyan-400 bg-white' : 'border-gray-200 bg-gray-50'}`}>
    <div className="flex items-center space-x-1">
      <span className="text-lg">{icon}</span>
      <div className="flex flex-col leading-none text-left">
        <span className={`text-[8px] font-black uppercase ${active ? 'text-cyan-500' : 'text-gray-400'}`}>STAGE {stage}:</span>
        <span className={`text-[7px] font-bold ${active ? 'text-cyan-400' : 'text-gray-400'}`}>{text}</span>
      </div>
    </div>
  </div>
);

const OrderDetail = () => {
  if (!orderData) return <div className="text-center py-10">Loading Data...</div>;

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl font-sans pb-6 border-x-4 border-blue-400">
      {/* Title */}
      <div className="py-6 text-center">
        <h1 className="text-2xl font-black uppercase leading-tight">
          -ORDER {orderData.orderId}<br/>DETAILS
        </h1>
      </div>

      {/* Order List Card */}
      <div className="mx-4 bg-white border-2 border-gray-200 rounded-[2rem] p-4 shadow-inner relative overflow-hidden">
        <div className="flex justify-between items-center mb-4 px-2 border-l-4 border-black">
          <span className="font-black text-lg">ORDER {orderData.orderId}</span>
          <span className="text-gray-500 font-bold">{orderData.time}</span>
        </div>

        <div className="max-h-60 overflow-y-auto pr-2 custom-scrollbar">
          {orderData.items.map((item) => (
            <div key={item.id} className="flex bg-white border-2 border-gray-100 rounded-3xl p-3 mb-3 shadow-sm items-center">
              <div className="w-20 h-20 bg-gray-300 rounded-2xl flex-shrink-0"></div>
              <div className="ml-4 flex-1 space-y-1">
                <p className="font-black text-sm">{item.name}</p>
                <p className="text-xs font-bold text-gray-600">Qty: {item.qty}</p>
                <p className="font-black text-sm">฿{item.price.toLocaleString()}.00</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Total Price */}
      <div className="text-right px-6 py-4">
        <span className="text-2xl font-black uppercase">
          Total: ฿{orderData.total.toLocaleString()}.00
        </span>
      </div>

      {/* Customer Info */}
      <div className="mx-4 bg-white border-2 border-gray-200 rounded-[2.5rem] p-5 shadow-md space-y-3 mb-4">
        <div className="flex items-start text-sm">
          <span className="mr-3 mt-1 text-blue-900">👤</span>
          <p><span className="font-black">Customer:</span> {orderData.customer.name}</p>
        </div>
        <div className="flex items-start text-sm">
          <span className="mr-3 mt-1 text-blue-900">📞</span>
          <p><span className="font-black">Contact:</span> {orderData.customer.contact}</p>
        </div>
        <div className="flex items-start text-sm">
          <span className="mr-3 mt-1 text-blue-900">📍</span>
          <p><span className="font-black">Delivery to:</span> {orderData.customer.address}</p>
        </div>
      </div>

      {/* Note */}
      <div className="mx-4 bg-white border-2 border-gray-200 rounded-[2rem] p-4 shadow-md mb-4">
        <div className="flex items-center text-sm mb-1">
          <span className="mr-2">🗒️</span>
          <span className="font-black italic underline">Note from Customer :</span>
        </div>
        <p className="text-[10px] font-bold text-gray-700 ml-7 leading-tight">
          {orderData.note}
        </p>
      </div>

      {/* Stages Navigation */}
      <div className="flex justify-between px-4 mb-4 space-x-2">
        <StageButton active={orderData.currentStage === 1} stage="1" text="Ready for delivery" icon="📦" />
        <StageButton active={orderData.currentStage === 2} stage="2" text="IN Transit" icon="🚚" />
        <StageButton active={orderData.currentStage === 3} stage="3" text="Delivered to customer" icon="📍" />
      </div>

      <div className="flex px-4 space-x-2 items-center">
        <button className="flex-1 bg-[#D33131] text-white py-3 rounded-2xl font-black text-xl shadow-lg active:scale-95 transition-transform">
          START DELIVERY
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;