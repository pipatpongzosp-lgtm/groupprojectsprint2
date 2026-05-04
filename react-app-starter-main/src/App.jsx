import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menunav from "./component/Menunav";
import CheckoutPage from "./pages/cashier/CheckoutPage";
import TableMap from "./pages/shared/TableMap";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menunav />} />
        {/* คุณสามารถเพิ่ม Route อื่นๆ เช่น /menu หรือ /order ได้ที่นี่ */}
        <Route path="/menu" element={<Menunav />} />
        <Route path="/order" element={<Menunav />} />

        {/* เพิ่ม Route ของ chasier / shared (with waiter)  */}
        <Route path="/cashier/checkout" element={<CheckoutPage />} />
        <Route path="/waiter/tables" element={<TableMap />} />
      </Routes>
    </Router>
  );
}
