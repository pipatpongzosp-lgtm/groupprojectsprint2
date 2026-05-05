import React from 'react';

const MenuCard = ({ t, item }) => (
  <div className="bg-cream p-4 flex flex-col relative group hover:shadow-2xl transition-all theme-street:border-t-8 theme-street:border-red theme-street:asymmetric-corners theme-genz:rounded-3xl theme-90s:border-black theme-90s:border-inset theme-thai:thai-border-pattern theme-luxury:minimal-border">
    <div className="h-48 bg-greywhite flex items-center justify-center border border-black/10 mb-4 theme-genz:rounded-3xl">
      [ IMG {item} ]
    </div>
    <div className="absolute top-0 right-0 bg-red text-greywhite px-3 py-1 font-bold text-xl theme-street:jagged-price theme-genz:rounded-bl-full theme-90s:border-4 theme-90s:border-black">
      $199
    </div>
    <div className="flex flex-col grow text-center">
      <h3 className="font-bold text-xl mb-1 group-hover:text-red transition theme-luxury:font-serif">Menu Item {item}</h3>
      <p className="text-sm mb-2 grow text-black/70">{t.detailsSet}</p>
      <p className="text-xs text-orange mt-auto font-bold underline cursor-pointer hover:text-red">{t.allergy}</p>
    </div>
  </div>
);

export default MenuCard;