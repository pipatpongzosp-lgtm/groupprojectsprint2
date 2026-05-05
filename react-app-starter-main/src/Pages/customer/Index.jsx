

// import { useState } from "react";

// // ─── Data ─────────────────────────────────────────────────────────────────────
// const TRANSLATIONS = {
//   TH: {
//     menu: "เมนู", order: "สั่งอาหาร", register: "สมัครสมาชิก/เข้าสู่ระบบ",
//     reward: "รางวัล", allergen: "ข้อมูลสารก่อภูมิแพ้", contact: "ติดต่อเรา",
//     promoTitle: "โปรโมชั่นพิเศษ", whereToEat: "เลือกลงชื่อสาขาที่ใกล้ที่สุด",
//     menuDesc: "สินค้าโชว์เป็นหมวดหมู่", detailsSet: "รายละเอียด: 12 Wings + 8 Nuggets",
//     allergy: "ส่วนผสม / สารก่อภูมิแพ้", deliveryActive: "จัดส่ง (กำลังใช้งาน)",
//     pickup: "รับที่ร้าน", booking: "จองโต๊ะ", signIn: "เข้าสู่ระบบ",
//   },
//   EN: {
//     menu: "Menu", order: "Order", register: "Register/Login",
//     reward: "Reward", allergen: "Allergen Information", contact: "Contact",
//     promoTitle: "SPECIAL PROMOTION", whereToEat: "Select nearest branch",
//     menuDesc: "Products by Category", detailsSet: "Details: 12 Wings + 8 Nuggets",
//     allergy: "Ingredient / Allergy", deliveryActive: "Delivery (Active)",
//     pickup: "Pick-up", booking: "Booking", signIn: "Sign In",
//   },
// };

// const THEMES = {
//   street:   { brand: "#FF6B00", brandDark: "#CC5500", gold: "#FFD700", bg: "#F5F0E8", nav: "#111",     navText: "#FF6B00", card: "#fff",     text: "#1A1A1A", muted: "#6B6B6B", border: "#E0DAD0" },
//   genz:     { brand: "#FF2D78", brandDark: "#CC1A5C", gold: "#FFD600", bg: "#FFF0F7", nav: "#FF2D78",  navText: "#fff",    card: "#fff",     text: "#1A1A1A", muted: "#6B6B6B", border: "#E0DAD0" },
//   "90s":    { brand: "#7B2FBE", brandDark: "#5A1F8C", gold: "#00C896", bg: "#FFF8E1", nav: "#7B2FBE",  navText: "#fff",    card: "#fffde7", text: "#1A1A1A", muted: "#6B6B6B", border: "#E0DAD0" },
//   thai:     { brand: "#C0392B", brandDark: "#962D22", gold: "#F39C12", bg: "#FDF6E3", nav: "#8B0000",  navText: "#fff",    card: "#fff8dc", text: "#1A1A1A", muted: "#6B6B6B", border: "#E0DAD0" },
//   luxury:   { brand: "#B8860B", brandDark: "#8B6508", gold: "#FFD700", bg: "#0D0D0D", nav: "#1A1A0A",  navText: "#FFD700", card: "#1A1800", text: "#F5F0E0", muted: "#A89880", border: "#3A3020" },
//   abstract: { brand: "#00BFA5", brandDark: "#008B76", gold: "#FF6E40", bg: "#E8F5F3", nav: "#004D40",  navText: "#fff",    card: "#fff",     text: "#1A1A1A", muted: "#6B6B6B", border: "#E0DAD0" },
// };

// const MENU_DATA = [
//   { id: 1, name: { TH: "ชุดรวมสุดคุ้ม (ชุด A)", EN: "Value Combo (Set A)" }, price: 199, icon: "🍗", detailsKey: "detailsSet" },
//   { id: 2, name: { TH: "ชุดปีกไก่ (ชุด B)",    EN: "Wing Set (Set B)"    }, price: 249, icon: "🍖", detailsKey: "detailsSet" },
//   { id: 3, name: { TH: "ชุดนักเก็ตกรุบ",         EN: "Crispy Nugget Set"   }, price: 159, icon: "🍟", detailsKey: "detailsSet" },
//   { id: 4, name: { TH: "ชุดพรีเมียม (ชุด C)",  EN: "Premium Set (Set C)" }, price: 299, icon: "🥡", detailsKey: "detailsSet" },
// ];

// const NAV_LINKS = ["menu", "order", "reward"];
// const PICKUP_TABS = ["deliveryActive", "pickup", "booking"];
// const THEME_NAMES = Object.keys(THEMES);
// const FOOTER_LINKS = ["allergen", "contact"];

// // ─── ThemeSwitcher ────────────────────────────────────────────────────────────
// function ThemeSwitcher({ theme, setTheme, colors }) {
//   return (
//     <div style={{ padding: "6px 12px", background: "#fff", borderBottom: `1px solid ${colors.border}`, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
//       <span style={{ fontSize: 11, color: colors.muted, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>Theme</span>
//       {THEME_NAMES.map((th) => (
//         <button
//           key={th}
//           onClick={() => setTheme(th)}
//           style={{
//             padding: "4px 10px", fontSize: 11, border: `1.5px solid ${theme === th ? colors.brand : colors.border}`,
//             borderRadius: 20, cursor: "pointer", background: theme === th ? colors.brand : "transparent",
//             color: theme === th ? "#fff" : colors.text, fontFamily: "inherit", transition: "all 0.18s",
//           }}
//         >
//           {th}
//         </button>
//       ))}
//     </div>
//   );
// }

// // ─── Navbar ───────────────────────────────────────────────────────────────────
// function Navbar({ lang, setLang, colors, t }) {
//   return (
//     <nav style={{ background: colors.nav, color: colors.navText, padding: "0 16px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 52, gap: 8 }}>
//       <div style={{ fontSize: 20, fontWeight: 700, color: colors.gold, letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>
//         🍗 WingKing
//       </div>

//       <div style={{ display: "flex", gap: 4 }}>
//         {NAV_LINKS.map((key) => (
//           <a
//             key={key}
//             href="#"
//             style={{ color: colors.navText, textDecoration: "none", fontSize: 13, padding: "5px 10px", borderRadius: 6, opacity: 0.85, transition: "opacity 0.15s" }}
//             onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
//             onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.85)}
//           >
//             {t[key]}
//           </a>
//         ))}
//       </div>

//       <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
//         <select
//           value={lang}
//           onChange={(e) => setLang(e.target.value)}
//           style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", color: colors.navText, fontSize: 12, padding: "4px 8px", borderRadius: 6, cursor: "pointer", fontFamily: "inherit" }}
//         >
//           <option value="TH">TH</option>
//           <option value="EN">EN</option>
//         </select>
//         <button
//           style={{ background: "transparent", border: `1px solid ${colors.gold}`, color: colors.gold, fontSize: 12, padding: "5px 10px", borderRadius: 6, cursor: "pointer", fontFamily: "inherit", transition: "all 0.18s" }}
//           onMouseEnter={(e) => { e.currentTarget.style.background = colors.gold; e.currentTarget.style.color = "#111"; }}
//           onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = colors.gold; }}
//         >
//           {t.register}
//         </button>
//         <button
//           style={{ background: colors.brand, border: "none", color: "#fff", fontSize: 12, padding: "5px 12px", borderRadius: 6, cursor: "pointer", fontWeight: 500, fontFamily: "inherit", transition: "background 0.18s" }}
//           onMouseEnter={(e) => (e.currentTarget.style.background = colors.brandDark)}
//           onMouseLeave={(e) => (e.currentTarget.style.background = colors.brand)}
//         >
//           {t.signIn}
//         </button>
//       </div>
//     </nav>
//   );
// }

// // ─── Promo Banner ─────────────────────────────────────────────────────────────
// function PromoBanner({ colors, t, pickupTab, setPickupTab, onClose }) {
//   return (
//     <div style={{ background: colors.brand, color: "#fff", margin: 12, borderRadius: 12, padding: "14px 16px", position: "relative", overflow: "hidden" }}>
//       <div style={{ position: "absolute", right: -20, top: -20, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
//       <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.04em", marginBottom: 6 }}>{t.promoTitle}</div>
//       <div style={{ fontSize: 12, opacity: 0.85, marginBottom: 10 }}>{t.whereToEat}</div>
//       <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
//         {PICKUP_TABS.map((key, i) => (
//           <button
//             key={key}
//             onClick={() => setPickupTab(i)}
//             style={{
//               padding: "6px 12px", borderRadius: 20, fontSize: 12, cursor: "pointer",
//               border: "1.5px solid rgba(255,255,255,0.6)", fontFamily: "inherit", fontWeight: 500,
//               background: pickupTab === i ? "#fff" : "rgba(255,255,255,0.15)",
//               color: pickupTab === i ? colors.brand : "#fff",
//               transition: "all 0.18s",
//             }}
//           >
//             {t[key]}
//           </button>
//         ))}
//       </div>
//       <button
//         onClick={onClose}
//         style={{ position: "absolute", top: 10, right: 12, background: "none", border: "none", color: "rgba(255,255,255,0.7)", fontSize: 18, cursor: "pointer", lineHeight: 1, padding: "2px 6px" }}
//       >
//         ×
//       </button>
//     </div>
//   );
// }

// // ─── Menu Card ────────────────────────────────────────────────────────────────
// function MenuCard({ item, lang, colors, t }) {
//   const [hovered, setHovered] = useState(false);
//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         background: colors.card, border: `1px solid ${colors.border}`, borderRadius: 10,
//         overflow: "hidden", transition: "transform 0.18s, box-shadow 0.18s", cursor: "pointer",
//         transform: hovered ? "translateY(-2px)" : "none",
//         boxShadow: hovered ? "0 6px 20px rgba(0,0,0,0.1)" : "none",
//       }}
//     >
//       <div style={{ width: "100%", height: 110, background: "linear-gradient(135deg, #f5deb3, #daa520)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32 }}>
//         {item.icon}
//       </div>
//       <div style={{ padding: 10 }}>
//         <div style={{ fontSize: 13, fontWeight: 600, color: colors.text, marginBottom: 3, lineHeight: 1.35 }}>{item.name[lang]}</div>
//         <div style={{ fontSize: 15, fontWeight: 700, color: colors.brand, marginBottom: 4 }}>฿{item.price}</div>
//         <div style={{ fontSize: 11, color: colors.muted, marginBottom: 5, lineHeight: 1.4 }}>{t[item.detailsKey]}</div>
//         <a href="#" style={{ fontSize: 10, color: colors.brand, textDecoration: "none", opacity: 0.8 }}>{t.allergy}</a>
//       </div>
//     </div>
//   );
// }

// // ─── Footer ───────────────────────────────────────────────────────────────────
// function Footer({ colors, t, pickupTab, setPickupTab }) {
//   return (
//     <footer style={{ background: colors.nav, color: colors.navText, marginTop: "auto" }}>
//       <div style={{ display: "flex", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
//         {PICKUP_TABS.map((key, i) => (
//           <button
//             key={key}
//             onClick={() => setPickupTab(i)}
//             style={{
//               flex: 1, padding: 10, textAlign: "center", fontSize: 12, fontWeight: 500,
//               cursor: "pointer", opacity: pickupTab === i ? 1 : 0.65, transition: "all 0.18s",
//               border: "none", background: "none", color: pickupTab === i ? colors.gold : colors.navText,
//               borderBottom: pickupTab === i ? `2px solid ${colors.gold}` : "2px solid transparent",
//               fontFamily: "inherit",
//             }}
//           >
//             {t[key]}
//           </button>
//         ))}
//       </div>
//       <div style={{ padding: "10px 14px", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
//         <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
//           {FOOTER_LINKS.map((key) => (
//             <a key={key} href="#" style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, textDecoration: "none", transition: "color 0.15s" }}
//               onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
//               onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
//             >{t[key]}</a>
//           ))}
//         </div>
//         <div style={{ display: "flex", gap: 6 }}>
//           {["App Store", "Google Play"].map((label) => (
//             <button key={label} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", padding: "4px 10px", borderRadius: 6, fontSize: 10, cursor: "pointer", fontFamily: "inherit" }}>
//               {label}
//             </button>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// }

// // ─── Root ─────────────────────────────────────────────────────────────────────
// export default function WingKingApp() {
//   const [lang, setLang] = useState("EN");
//   const [theme, setTheme] = useState("street");
//   const [promoVisible, setPromoVisible] = useState(true);
//   const [pickupTab, setPickupTab] = useState(0);

//   const colors = THEMES[theme];
//   const t = TRANSLATIONS[lang];

//   return (
//     <div style={{ display: "flex", flexDirection: "column", minHeight: 600, background: colors.bg, color: colors.text, fontFamily: "'Prompt', 'Sarabun', sans-serif", transition: "background 0.3s, color 0.3s" }}>
//       <ThemeSwitcher theme={theme} setTheme={setTheme} colors={colors} />
//       <Navbar lang={lang} setLang={setLang} colors={colors} t={t} />

//       <main style={{ flex: 1, background: colors.bg }}>
//         {promoVisible && (
//           <PromoBanner colors={colors} t={t} pickupTab={pickupTab} setPickupTab={setPickupTab} onClose={() => setPromoVisible(false)} />
//         )}
//         <div style={{ padding: "14px 16px 8px", fontSize: 13, fontWeight: 600, color: colors.muted, letterSpacing: "0.06em", textTransform: "uppercase", borderBottom: `1px solid ${colors.border}` }}>
//           {t.menuDesc}
//         </div>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 10, padding: 12 }}>
//           {MENU_DATA.map((item) => (
//             <MenuCard key={item.id} item={item} lang={lang} colors={colors} t={t} />
//           ))}
//         </div>
//       </main>

//       <Footer colors={colors} t={t} pickupTab={pickupTab} setPickupTab={setPickupTab} />
//     </div>
//   );
// }






import Hero from "../../component/customer/Hero"; 
import MenuSection from "../../component/customer/MenuSection";
import PromoVideo from "../../component/customer/PromoVideo";
import TopSale from "../../component/customer/TopSale";


export default function IndexPage() {
  return (
    <div>
      <Hero />
      <PromoVideo />
      {/* <TopSale/> */}
      <MenuSection />
    
  
    </div>
  );
}
