export default function MenuCard() {
  return (
    <div className="w-64 bg-[#1c1c1c] rounded-2xl overflow-hidden shadow-lg border border-gray-800 transition-transform hover:scale-105 cursor-pointer">
      
      {/* ส่วนที่ 1: รูปภาพ */}
      <div className="w-full h-48 bg-gray-200">
        <img 
          src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=500&q=60" 
          alt="ชุดรวมสุดคุ้ม B" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* ส่วนที่ 2: ข้อความและป้ายกำกับ */}
      <div className="p-4 flex items-center justify-between">
        <h3 className="text-white font-bold text-lg">ชุดรวมสุดคุ้ม B</h3>
        <span className="text-xs font-bold text-white border border-gray-500 px-2 py-1 rounded-md">
          PROMO
        </span>
      </div>

    </div>
  );
}