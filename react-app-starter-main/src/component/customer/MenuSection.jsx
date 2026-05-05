// import React from 'react';
// import MenuCard from './MenuCard';
// import { menuItems } from '../../data/menuItems';

// export default function MenuSection({ t, lang }) {
//   return (
//     <section id="menu" className="mb-10">
//       <div className="bg-black text-greywhite inline-block px-4 py-1 mb-4 font-bold text-lg theme-street:border-b-4 theme-street:border-red theme-genz:rounded-full">
//         {t.menuDesc}
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {menuItems.map(item => (
//           <MenuCard key={item.id} item={item} lang={lang} t={t} />
//         ))}
//       </div>
//     </section>
//   );
// }

import MenuCard from "./MenuCard";

const MENU_CARDS = [
  { id: 1, name: "Signature Burger", img: "/images/menu-profile-3.png" },
  { id: 2, name: "Grilled Chicken", img: "/images/menu-profile-3.png" },
  { id: 3, name: "Classic Pasta", img: "/images/menu-profile-3.png" },
];

export default function MenuSection() {
  return (
    <section style={{ padding: 40 }}>
      <h2>Top Sale</h2>

      <div style={{ display: "flex", gap: 20 }}>
        {MENU_CARDS.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}