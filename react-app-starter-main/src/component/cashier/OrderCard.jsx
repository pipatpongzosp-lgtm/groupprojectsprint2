// ทำหน้าที่เป็น "การ์ด 1 ใบ" สำหรับออเดอร์ 1 ออเดอร์
// src/components/cashier/OrderCard.jsx

import React from "react";
import { Pencil } from "lucide-react";

const OrderCard = ({ order, onPrintBill, onMarkAsCompleted }) => {
  const isPaid = order.status === "PAID";

  return (
    <div className="bg-white border-[3px] border-[#242424] rounded-lg p-5 flex flex-col md:flex-row justify-between md:items-center gap-4 transition-transform hover:-translate-y-1 hover:shadow-[0_8px_0_rgba(0,0,0,0.1)]">
      {/* ข้อมูลด้านซ้าย */}
      <div className="flex flex-col">
        <div className="flex items-center gap-3 mb-1">
          <h3 className="font-['Bebas_Neue'] text-4xl leading-none m-0 text-[#242424]">
            {order.orderId}
          </h3>
          <span
            className={`px-3 py-1 text-[0.75rem] font-bold uppercase rounded-full ${
              isPaid ? "bg-[#28a745] text-white" : "bg-[#eeeeee] text-[#888888]"
            }`}
          >
            {order.status}
          </span>
        </div>

        <p className="text-[#888888] text-sm font-medium">
          <span className="text-[#e4002b] font-bold">{order.type}</span>
          {order.table && ` • TABLE: ${order.table}`}
          <span className="mx-2">|</span>
          <span className="text-[#242424] font-bold">
            ฿{order.totalAmount.toLocaleString()}
          </span>
        </p>
      </div>

      {/* ปุ่ม Action ด้านขวา */}
      <div className="flex items-center gap-3">
        {/* ปุ่ม Edit (ไปหน้า Checkout แบบไม่ล็อกสถานะ) */}
        <button
          onClick={() => onPrintBill(order.orderId)}
          className="p-3 border-2 border-[#242424] rounded bg-white text-[#242424] hover:bg-[#eeeeee] transition-colors"
          title="Edit Order"
        >
          <Pencil size={20} strokeWidth={2.5} />
        </button>

        {/* ปุ่มหลัก (Print Bill หรือ Paid) */}
        {isPaid ? (
          <button
            onClick={() => onMarkAsCompleted(order.orderId)}
            className="bg-[#242424] text-white font-['IBM_Plex_Sans_Thai'] font-bold uppercase px-8 py-3 rounded border-2 border-[#242424] hover:bg-[#3a3a3a] transition-all shadow-[0_4px_0_#000000] active:translate-y-1 active:shadow-none"
          >
            PAID (CLEAR TABLE)
          </button>
        ) : (
          <button
            onClick={() => onPrintBill(order.orderId)}
            className="bg-[#e4002b] text-white font-['IBM_Plex_Sans_Thai'] font-bold uppercase px-8 py-3 rounded border-2 border-[#e4002b] hover:bg-[#cc0026] transition-all shadow-[0_4px_0_#800018] active:translate-y-1 active:shadow-none"
          >
            PRINT BILL
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
