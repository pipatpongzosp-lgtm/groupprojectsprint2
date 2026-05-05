import React from 'react';
import MenuCard from './MenuCard';

const MenuSection = ({ t }) => (
  <section id="menu" className="mb-10">
    <div className="bg-black text-greywhite inline-block px-4 py-1 mb-4 font-bold text-lg theme-street:border-b-4 theme-street:border-red theme-genz:rounded-full">
      {t.menuDesc}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <MenuCard key={item} t={t} item={item} />
      ))}
    </div>
  </section>
);

export default MenuSection;