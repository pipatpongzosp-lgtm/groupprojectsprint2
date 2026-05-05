import React from "react";
import PromoPopup from "../../component/customer/Propmopopup";
import MenuSection from "../../component/customer/MenuSection";

// หน้า Index จะรับ t (คำแปล) มาจาก App.jsx
export default function Index({ t }) {
  return (
    <main className="grow p-6 bg-greywhite">
      {/* 1. ส่วนโปรโมชัน */}
      <PromoPopup t={t} />

      {/* 2. ส่วนรายการอาหาร */}
      <MenuSection t={t} />
    </main>
  );
}