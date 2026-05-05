import React from 'react';

export default function CategoryMenu() {
  // 1. สร้างข้อมูลจำลองสำหรับหมวดหมู่ (ใส่ URL รูปภาพของคุณแทนที่ได้เลย)
  const categories = [
    { 
      id: 1, 
      name: 'SET', 
      image: 'https://images.unsplash.com/photo-1594221708786-042268b69b16?auto=format&fit=crop&w=100&q=60' 
    },
    { 
      id: 2, 
      name: 'WINGS', 
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=100&q=60' 
    },
    { 
      id: 3, 
      name: 'NUGGETS', 
      image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=100&q=60' 
    },
    { 
      id: 4, 
      name: 'SIDE', 
      image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=100&q=60' 
    },
    { 
      id: 5, 
      name: 'DRINK', 
      image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=100&q=60' 
    },
  ];

  return (
    // กล่องครอบหมวดหมู่ทั้งหมด สามารถเลื่อนซ้ายขวาได้ (overflow-x-auto)
    <div className="flex items-center gap-4 overflow-x-auto py-4 px-2 scrollbar-hide">
      
      {/* 2. วนลูปข้อมูลเพื่อสร้างปุ่มทีละอัน */}
      {categories.map((category) => (
        <button 
          key={category.id}
          className="flex items-center gap-3 px-4 py-2 bg-white border-2 border-black rounded-full min-w-max hover:bg-gray-100 transition-colors active:scale-95"
        >
          {/* รูปภาพหมวดหมู่ */}
          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
            <img 
              src={category.image} 
              alt={category.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* ชื่อหมวดหมู่ */}
          <span className="font-bold text-black text-sm uppercase">
            {category.name}
          </span>
        </button>
      ))}

    </div>
  );
}