import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/*import Menunav from "./component/Menunav";*/
import CheckoutPage from "./pages/cashier/CheckoutPage";
import TableMap from "./pages/shared/TableMap";
import Buttonmenu from "./component/Buttonmenu";
import OrderList from "./pages/cashier/OrderList";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Buttonmenu />} />

        {/* เพิ่ม Route ของ chasier / shared (with waiter)  */}
        <Route path="/cashier/checkout" element={<CheckoutPage />} />
        <Route path="/shared/tables" element={<TableMap />} />
        <Route path="/cashier/orders" element={<OrderList />} />

        <Route path="/menu" element={<Buttonmenu />} />
        <Route path="/order" element={<Buttonmenu />} />
      </Routes>
    </Router>
  );
}
