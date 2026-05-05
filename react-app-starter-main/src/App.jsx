import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CookBoard from './pages/CookBoard'
import Login from './pages/Login'
import Register from './pages/Register'
import Buttonmenu from './component/Buttonmenu'
import CheckOutPage from "./pages/cashier/CheckOutPage"
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Buttonmenu />} />
        {/* คุณสามารถเพิ่ม Route อื่นๆ เช่น /menu หรือ /order ได้ที่นี่ */}
        <Route path="/menu" element={<Buttonmenu />} />
        <Route path="/cookBoard" element={<CookBoard/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/checkout" element={<CheckOutPage/>}></Route>
      </Routes>
    </Router>
  );
}
