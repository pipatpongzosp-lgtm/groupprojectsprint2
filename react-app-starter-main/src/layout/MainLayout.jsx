import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbarmenu from "../component/Navbarmenu";
import Footer from "../component/Footer";
import { translations } from "../locales/translations"; // เช็ค path ให้ตรงกับโฟลเดอร์จริงของคุณ

export default function MainLayout() {
  // ย้าย State การจัดการภาษามาไว้ที่ Layout หลัก
  const [lang, setLang] = useState("EN");
  const t = translations[lang];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* 1. แถบเมนูด้านบน */}
      <Navbarmenu t={t} lang={lang} setLang={setLang} />

      {/* 2. พื้นที่เนื้อหาตรงกลาง (เนื้อหาจะเปลี่ยนไปตาม URL) */}
      <main className="grow">
        {/* ส่ง t และ lang ทะลุผ่าน context ไปให้ทุกหน้าที่อยู่ด้านใน */}
        <Outlet context={{ t, lang }} />
      </main>

      {/* 3. ส่วนท้ายเว็บไซต์ */}
      <Footer t={t} />
    </div>
  );
}