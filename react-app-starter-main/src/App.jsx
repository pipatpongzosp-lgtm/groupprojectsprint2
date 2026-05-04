import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CookBoard from './pages/CookBoard'
import Login from './pages/Login'
import Register from './pages/Register'
import Buttonmenu from './component/Buttonmenu'
/*import Menunav from "./component/Menunav";*/
import CheckoutPage from "./pages/cashier/CheckoutPage";
import TableMap from "./pages/shared/TableMap";
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
        <Route path="/cookBoard" element={<CookBoard/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </Router>
  );
}
