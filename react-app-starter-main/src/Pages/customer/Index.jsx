
import React from "react";
import MenuCard from "../../component/customer/TopSale";
// นำเข้าข้อมูลเมนูจำลอง (หรือนำเข้าจาก src/data/menuItems.js ของคุณ) [cite: 129]
import { menuItems } from "../../assets/menuItems";

export default function IndexPage({ t, lang }) {
  // 1. กรองข้อมูลเมนูตาม Badge [cite: 208]
  const topSales = menuItems?.filter((item) => item.badge === "top-sale") || [];
  const newUpdates = menuItems?.filter((item) => item.badge === "new") || [];
  const promotions = menuItems?.filter((item) => item.badge === "promo") || [];
  
  // 2. ดึงหมวดหมู่ทั้งหมดแบบไม่ซ้ำกัน (สำหรับปุ่ม Category)
  const categories = [...new Set(menuItems?.map(item => item.category))].filter(Boolean);

  return (
    // เว้นพื้นที่ด้านบน (pt-24) สำหรับ Navbar และด้านล่าง (pb-20) สำหรับ Footer
    <div className="bg-white min-h-screen font-sans flex flex-col pt-24 pb-20">
      
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 box-border">
        
        {/* ─── Hero Promotion ─── */}
        <section className="w-full bg-[#1c1917] overflow-hidden relative rounded-xl mb-6">
          <img
            src="/sp-group-project/images/promotion.png"
            alt="Promotion — Grand Opening"
            className="w-full h-auto block object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.innerHTML = `
                <div class="text-center text-amber-500 py-12 flex flex-col items-center justify-center min-h-[340px]">
                  <div class="text-4xl font-serif font-bold tracking-tight leading-tight">
                    Grand Opening<br/><span class="text-amber-300">Promotion</span>
                  </div>
                  <p class="text-neutral-400 mt-4 text-sm">Special deals await you</p>
                </div>`;
            }}
          />
        </section>

        {/* ─── Promo Video ─── */}
        <section className="w-full bg-[#1c1917] p-4 rounded-xl mb-12 box-border">
          <video className="w-full h-auto rounded-xl block bg-black" controls>
            <source src="/sp-group-project/video/promote.mp4" type="video/mp4" />
            Your browser does not support video playback.
          </video>
        </section>

        {/* ─── Category Selection ─── */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-greywhite mb-6 border-l-4 border-orange pl-3">
            {t?.category || "Categories"}
          </h2>
          <div className="flex flex-wrap gap-4 justify-start">
            {categories.map((cat) => (
              <button 
                key={cat}
                className="px-6 py-2 uppercase text-sm font-bold border-2 border-[#3f3f46] text-greywhite rounded-full hover:bg-orange hover:border-orange hover:text-white transition-all duration-300"
              >
                {cat}
              </button>
            ))}
            {/* ปุ่มดูทั้งหมด */}
            <button className="px-6 py-2 uppercase text-sm font-bold bg-orange text-white rounded-full hover:bg-amber-600 transition-all duration-300">
              {t?.allMenu || "All Menu"}
            </button>
          </div>
        </section>

        {/* ─── Promotions Section ─── */}
        {promotions.length > 0 && (
          <ProductSection title={t?.promotion || "Promotions"} items={promotions} lang={lang} t={t} />
        )}

        {/* ─── Top Sale Section ─── */}
        {topSales.length > 0 && (
          <ProductSection title={t?.topSale || "Top Sales"} items={topSales} lang={lang} t={t} />
        )}

        {/* ─── New Update Section ─── */}
        {newUpdates.length > 0 && (
          <ProductSection title={t?.newUpdate || "New Updates"} items={newUpdates} lang={lang} t={t} />
        )}

      </main>
    </div>
  );
}

// ─── Component ย่อยสำหรับจัด Layout แต่ละหมวดหมู่ ───
function ProductSection({ title, items, lang, t }) {
  return (
    <section className="mb-12">
      <div className="flex justify-between items-end mb-6 border-b border-[#27272a] pb-2">
        <h2 className="text-2xl font-serif font-bold text-greywhite border-l-4 border-orange pl-3">
          {title}
        </h2>
        <a href="/menu" className="text-sm text-orange hover:text-amber-400 font-bold transition-colors">
          View All &rarr;
        </a>
      </div>
      
      {/* Grid แสดงการ์ดสินค้า */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} lang={lang} t={t} />
        ))}
      </div>
    </section>
  );
}