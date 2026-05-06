import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/picture/Logo.png';
import Slogan from '../assets/picture/slogan.png';

// 1. รับ Props t (คำแปล), lang (ภาษาปัจจุบัน), และ setLang (ฟังก์ชันเปลี่ยนภาษา) เข้ามา
const Navbarmenu = ({ t, lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 2. ฟังก์ชันสลับภาษา (แก้ไขให้เป็นพิมพ์ใหญ่ TH, EN เพื่อให้ตรงกับ translations.js)
  const toggleLang = () => {
    setLang(lang === "EN" ? "TH" : "EN");
  };

  return (
    <header className="bg-primary text-neutral shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        {/* Logo Container */}
        <div className="relative w-36 h-12 flex items-center">
          <Link to="/" className="absolute -top-4 left-0 z-50 transition-transform hover:scale-105">
            <img 
              src={Logo} 
              alt="Logo" 
              className="h-37 w-auto max-w-none float-animation glow-animation" 
            />
          </Link>
        </div>

        {/* Slogan Image - Center */}
        <div className="hidden md:flex flex-1 justify-center px-4">
          <img 
            src={Slogan} 
            alt="เพราะเราไม่ล้อเล่นเรื่องไก่ทอด" 
            className="h-17 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <ul className="flex space-x-6 items-center">
            {/* 3. เปลี่ยนข้อความ Hardcode เป็นตัวแปร t จากพจนานุกรม */}
            <li><Link to="/home" className="hover:text-secondary transition duration-300">{t?.home || 'Home'}</Link></li>
            <li><Link to="/menu" className="hover:text-secondary transition duration-300">{t?.menu || 'Menu'}</Link></li>
            <li><Link to="/order" className="hover:text-secondary transition duration-300">{t?.order || 'Order'}</Link></li>
            <li><Link to="#" className="hover:text-secondary transition duration-300">{t?.contact || 'Contact'}</Link></li>
          </ul>
          
          <div className="flex items-center space-x-4">
            {/* ปุ่มเปลี่ยนภาษา Desktop */}
            <button 
              onClick={toggleLang} 
              className="uppercase px-3 py-1 bg-neutral/20 text-neutral rounded hover:bg-secondary transition duration-300 font-bold"
            >
              {lang === "EN" ? "TH" : "EN"}
            </button>

            <button className="bg-secondary hover:bg-accent text-neutral px-6 py-2 rounded-full font-semibold transition duration-300">
              <Link to="/login">{t?.signIn || 'Sign In'}</Link>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* ปุ่มเปลี่ยนภาษาแบบย่อสำหรับ Mobile วางไว้ข้างปุ่มแฮมเบอร์เกอร์ */}
          <button 
            onClick={toggleLang} 
            className="uppercase px-2 py-1 bg-neutral/20 text-neutral text-sm rounded hover:bg-secondary transition duration-300 font-bold"
          >
            {lang === "EN" ? "TH" : "EN"}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-neutral focus:outline-none"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-primary border-t border-accent/20`}>
        <ul className="flex flex-col p-4 space-y-4">
          <li><Link to="/home" className="block hover:text-secondary transition duration-300" onClick={() => setIsMenuOpen(false)}>{t?.home || 'Home'}</Link></li>
          <li><Link to="/menu" className="block hover:text-secondary transition duration-300" onClick={() => setIsMenuOpen(false)}>{t?.menu || 'Menu'}</Link></li>
          <li><Link to="/order" className="block hover:text-secondary transition duration-300" onClick={() => setIsMenuOpen(false)}>{t?.order || 'Order'}</Link></li>
          <li><Link to="#" className="block hover:text-secondary transition duration-300" onClick={() => setIsMenuOpen(false)}>{t?.contact || 'Contact'}</Link></li>
          <li>
            <button className="w-full bg-secondary hover:bg-accent text-neutral px-6 py-2 rounded-lg font-semibold transition duration-300">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>{t?.signIn || 'Sign In'}</Link>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbarmenu;