import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Menunav from "./component/Navbarmenu";
import CookBoard from "./component/CookBoard";
import Index from "./testfeature/Index";
import Buttonmenu from "./component/Buttonmenu";
import Order from "./testfeature/Order";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Buttonmenu />} />
        {/* คุณสามารถเพิ่ม Route อื่นๆ เช่น /menu หรือ /order ได้ที่นี่ */}
        <Route path="/menu" element={<Buttonmenu />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
  );
}
