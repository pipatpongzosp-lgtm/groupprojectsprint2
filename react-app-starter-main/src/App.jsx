
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menunav from './component/Menunav'
import CookBoard from './component/CookBoard'
import Index from './testfeature/Index'


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menunav />} />
        {/* คุณสามารถเพิ่ม Route อื่นๆ เช่น /menu หรือ /order ได้ที่นี่ */}
        <Route path="/menu" element={<Menunav />} />
        <Route path="/order" element={<Menunav />} />
      </Routes>
    </Router>
  )

}

