import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/customer/Index";
import Order from "./pages/customer/Order";
import Buttonmenu from "./component/Buttonmenu";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CheckoutPage from "./pages/cashier/CheckoutPage";
import TableMap from "./pages/shared/TableMap";
import OrderList from "./pages/cashier/OrderList";
import Footer from "./component/Footer";
import CookBoard from "./pages/CookBoard";
import { translations } from "./locals/translations";
import Navbarmenu from "./component/Navbarmenu";

export default function App() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];
  return (
    <Router>
      <Navbarmenu t={t} lang={lang} setLang={setLang} />
      <Routes>
        <Route path="/" element={<Buttonmenu />} />
        {/* คุณสามารถเพิ่ม Route อื่นๆ เช่น /menu หรือ /order ได้ที่นี่ */}
        <Route path="/order" element={<Order />} />
        <Route path="/home" element={<Index />} />

        {/* เพิ่ม Route ของ chasier / shared (with waiter)  */}
        <Route path="/cashier/checkout" element={<CheckoutPage />} />
        <Route path="/shared/tables" element={<TableMap />} />
        <Route path="/cashier/orders" element={<OrderList />} />
        <Route path="/menu" element={<Buttonmenu />} />
        <Route path="/cookBoard" element={<CookBoard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}
