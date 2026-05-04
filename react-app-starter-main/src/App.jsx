import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menunav from './component/Menunav'
import CookBoard from './pages/CookBoard'
import Login from './pages/Login'
import Register from './pages/Register'
import Buttonmenu from './component/Buttonmenu'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Buttonmenu />} />
        {/* คุณสามารถเพิ่ม Route อื่นๆ เช่น /menu หรือ /order ได้ที่นี่ */}
        <Route path="/menu" element={<Menunav />} />
        <Route path="/order" element={<Menunav />} />
        <Route path="/cookBoard" element={<CookBoard/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </Router>
  );
}
