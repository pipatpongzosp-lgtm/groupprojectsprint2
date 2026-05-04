import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Buttonmenu from './component/Buttonmenu'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Buttonmenu />} />
        {/* คุณสามารถเพิ่ม Route อื่นๆ เช่น /menu หรือ /order ได้ที่นี่ */}
        <Route path="/menu" element={<Buttonmenu />} />
        <Route path="/order" element={<Buttonmenu />} />
      </Routes>
    </Router>
  )
}
