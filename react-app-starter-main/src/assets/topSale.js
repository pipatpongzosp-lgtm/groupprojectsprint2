// src/data/menuItems.js
export const menuItems = [
  { 
    id: 1, 
    nameTH: "ชุดรวมสุดคุ้ม A", 
    nameEN: "Value Set A", 
    price: 199,
    image: "/images/menu/set-a.png",
    category: "set",
    badge: "top-sale" // 👈 เพิ่มสถานะ Top Sale
  },
  { 
    id: 2, 
    nameTH: "ชุดรวมสุดคุ้ม B", 
    nameEN: "Value Set B", 
    price: 249, 
    image: "/images/menu/set-b.png",
    category: "set",
    badge: "promotion" // 👈 เพิ่มสถานะ Promotion
  },
  { 
    id: 3, 
    nameTH: "ปีกไก่รสดั้งเดิม", 
    nameEN: "Original Wings", 
    price: 99, 
    image: "/images/menu/original-wings.png",
    category: "wings",
    // ไม่มี badge (จะแสดงแค่ในหน้า Menu ทั้งหมด)
  },
  { 
    id: 4, 
    nameTH: "ไก่ทอดซอสเกาหลี (รสใหม่!)", 
    nameEN: "Korean Sauce Wings (New!)", 
    price: 129, 
    image: "/images/menu/spicy-wings.png",
    category: "wings",
    badge: "new-product" // 👈 เพิ่มสถานะ New Product
  },
  // ... รายการอื่นๆ
];