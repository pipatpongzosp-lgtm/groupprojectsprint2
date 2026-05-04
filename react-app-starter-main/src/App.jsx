import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menunav from "./component/Menunav";
import CookBoard from "./component/CookBoard";
import Index from "./Pages/Index";
import Order from "./Pages/Order";

export default function App() {
  return (
    <Router>
      <Menunav/>
      <Routes>
        <Route path="/" element={<Menunav />} />
        {/* คุณสามารถเพิ่ม Route อื่นๆ เช่น /menu หรือ /order ได้ที่นี่ */}
        <Route path="/menu" element={<Menunav />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/home" element={<Index />} />
      </Routes>
    </Router>
  );
}
