// import React from "react";

// export default function TopSale({ item, lang, t }) {
//   const name = lang === "TH" ? item.nameTH : item.nameEN;
//   const isSoldOut = item.soldOut === true;

//   // กำหนดสีและข้อความของ Badge ตามประเภท
//   const getBadgeStyle = (badgeType) => {
//     switch (badgeType) {
//       case 'top-sale': return { bg: 'bg-orange', text: 'Top Sale' };
//       case 'promotion': return { bg: 'bg-red', text: 'Promo' };
//       case 'new-product': return { bg: 'bg-green-600', text: 'New' };
//       default: return null;
//     }
//   };

//   const badgeInfo = getBadgeStyle(item.badge);

//   return (
//     <div className="relative bg-[#262626] rounded-xl overflow-hidden border border-neutral-700 group hover:border-orange transition duration-300">
      
//       {/* 🔴 ป้าย Badge (จะโชว์ก็ต่อเมื่อมีข้อมูล badge) */}
//       {badgeInfo && (
//         <div className={`absolute top-3 left-3 ${badgeInfo.bg} text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg`}>
//           {badgeInfo.text}
//         </div>
//       )}

//       {/* รูปภาพสินค้า */}
//       <div className="h-48 overflow-hidden bg-black">
//         <img 
//           src={item.image} 
//           alt={name} 
//           loading="lazy" 
//           className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${isSoldOut ? "grayscale opacity-50" : ""}`} 
//         />
//       </div>

//       {/* ข้อมูลสินค้า */}
//       <div className="p-4 flex flex-col gap-2">
//         <div className="flex justify-between items-start">
//           <h3 className="text-lg font-bold text-greywhite line-clamp-1">{name}</h3>
//           <span className="text-orange font-bold text-lg">฿{item.price}</span>
//         </div>
        
//         <button 
//           className="mt-4 w-full py-2 bg-neutral-800 hover:bg-orange text-greywhite hover:text-white font-bold rounded transition duration-300"
//           disabled={isSoldOut}
//         >
//           {isSoldOut ? (t?.soldOut || "SOLD OUT") : (t?.add || "ADD")}
//         </button>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";

export default function TopSale({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 220,
        height: 260,
        background: hovered ? "#292524" : "#1c1917",
        borderRadius: 16,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        border: hovered ? "1.5px solid #f59e0b" : "1.5px solid #3f3f46",
        transition: "all 0.25s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        cursor: "pointer",
      }}
    >
      <div style={{ padding: 14, color: "#e5e7eb" }}>
        {item.name}
      </div>

      <div style={{ flex: 1, padding: 10 }}>
        <img
          src={item.img}
          alt={item.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}