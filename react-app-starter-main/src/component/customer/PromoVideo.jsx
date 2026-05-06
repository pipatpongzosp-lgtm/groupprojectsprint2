import React from 'react';



export default function VideoPlayer() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* 
        controls: แสดงปุ่มเล่น/หยุด/ขยาย
        autoPlay: เล่นอัตโนมัติ (มักต้องใช้คู่กับ muted)
        muted: ปิดเสียงเริ่มต้น
        loop: เล่นวนซ้ำ
      */}
      <video 
        width="100%" 
        controls 
        autoPlay 
        muted 
        loop
        style={{ borderRadius: '8px' }} // ใส่ขอบมนให้สวยงาม
      >
        <source src="/video/promote.mp4" type="video/mp4" />
        ขออภัย เบราว์เซอร์ของคุณไม่รองรับการเล่นวิดีโอนี้
      </video>
    </div>
  );
}