import React from "react";
import { Link } from "react-router-dom";

export default function Footer({ t }) {
  return (
    // เปลี่ยน h-[30%] เป็น py-10 เพื่อให้ยืดหยุ่นตามเนื้อหา และไม่กำหนด w-auto ฟิกซ์ไว้
    <footer className="bg-black text-white capitalize py-10 px-6 md:px-10">
      {/* ใช้ CSS Grid ในการคุม Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        
        {/* 1. Menu Section */}
        <div id="menuhead">
          <h2 className="text-xl font-bold mb-4 text-orange-400">{t?.menu}</h2>
          <ul className="flex flex-col gap-2">
            <li>
              {/* เปลี่ยน a เป็น Link และ href เป็น to */}
              <Link
                to="/menu"
                className="text-sm hover:text-orange-400 transition-colors duration-200"
              >
                {t?.menu}
              </Link>
            </li>
          </ul>
        </div>

        {/* 2. Allergy Section */}
        <div id="allergyhead">
          <h2 className="text-xl font-bold mb-4 text-orange-400">
            {t?.allergies}
          </h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                to="/allergies"
                className="text-sm hover:text-orange-400 transition-colors duration-200"
              >
                {t?.allergies}
              </Link>
            </li>
          </ul>
        </div>

        {/* 3. Support Section */}
        <div id="supporthead">
          <h2 className="text-xl font-bold mb-4 text-orange-400">
            {t?.support}
          </h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                to="/faq"
                className="text-sm uppercase hover:text-orange-400 transition-colors duration-200"
              >
                {t?.faq}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-sm hover:text-orange-400 transition-colors duration-200"
              >
                {t?.contact}
              </Link>
            </li>
          </ul>
        </div>

        {/* 4. Careers Section */}
        <div id="workhead">
          <h2 className="text-xl font-bold mb-4 text-orange-400">
            {t?.careers}
          </h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                to="/careers"
                className="text-sm hover:text-orange-400 transition-colors duration-200"
              >
                {t?.workWithUs}
              </Link>
            </li>
          </ul>
        </div>

        {/* 5. Download Section */}
        <div
          id="dowloadhead"
          className="flex flex-col gap-3 sm:col-span-2 md:col-span-4 lg:col-span-1 lg:w-40 items-start"
        >
          <h2 className="text-xl font-bold mb-1 text-orange-400 lg:hidden">
            Download App
          </h2>

          <div className="flex flex-row lg:flex-col gap-4">
            {/* ลิงก์ดาวน์โหลดแอปภายนอก ยังคงใช้แท็ก <a> ได้ตามปกติ เพราะเป็นการออกจากเว็บของเรา */}
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-32 lg:w-full hover:opacity-80 transition-opacity"
            >
              <img
                className="w-full h-auto object-contain"
                src="/sp-group-project/images/APPLE.png"
                alt="Download on App Store"
              />
            </a>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="w-32 lg:w-full hover:opacity-80 transition-opacity"
            >
              <img
                className="w-full h-auto object-contain"
                src="/sp-group-project/images/GOOGLE.png"
                alt="Get it on Google Play"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}