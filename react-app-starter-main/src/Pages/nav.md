<nav className="bg-black text-greywhite px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex space-x-6 items-center">
          <div className="font-bold text-2xl text-red theme-street:font-graffiti">LOGO</div>
          {[t.menu, t.order, t.reward].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-orange transition">{item}</a>
          ))}
        </div>
        <div className="flex space-x-4 items-center">
          <a href="#login" className="hover:text-orange">{t.register}</a>
          {/* โหมดเปลี่ยนภาษา (TH/EN) */}
          <select
            className="bg-greywhite text-black px-2 py-1 outline-none font-bold theme-genz:rounded-full"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="TH">TH</option>
            <option value="EN">EN</option>
          </select>
        </div>
      </nav>



- เขียนโค๊ดหน้านี้ ด้วย 1.tailwind >2.css>3.react component

- Requirement
   1.ธีมสี ใช้ตามในรูปได้เลย 
   2.เขียนแยกเป็น component 
   3.ด้านบนจะมี nav ดังนั้นให้เว้นด้านบนไว้
   4.ด้านล่างจะมี footerให้เว้นพื้นที่ไว้เช่นกัน
   

   เพิ่มเติม

-รายการอาหาร 

-ที่อยู่จัดส่ง แก้ไข  ปุ่ม เพิ่มที่อยู่ใหม่ให้สามารถกดเพิ่มได้จริง และ มีปุ่มลบที่อยู่เพื่อลบอันที่ไม่ใช้ 

-เวลาจัดส่ง สามมารถกดปุ่ม เลือกเวลาได้จิง

-วิธีชำระเงินร บัตรเครดิต พร้อมเพย์ e-wallet เงินสด ให้สามารถกดเลือกประเภทการจ่ายเงินได้จริง

 
