// import React from 'react';

// export default function PromotionPopup({ t }) {
//   return (
//     <div className="bg-cream border-l-4 border-red p-4 mb-6 relative shadow-lg theme-street:border-4 theme-street:border-red theme-genz:rounded-3xl theme-90s:border-4 theme-90s:border-black theme-thai:border-thai-pattern">
//       <button className="absolute top-2 right-2 text-black font-bold">Close X</button>
//       <div className="flex justify-between items-center">
//         <div>
//           <h2 className="text-xl font-bold text-red">{t.promoTitle}</h2>
//           <p className="text-sm mt-1 text-orange">Score bar: ⭐⭐⭐⭐⭐ | Img</p>
//         </div>
//         <div className="bg-black text-greywhite px-4 py-2 theme-genz:rounded-xl theme-90s:border-black theme-90s:border-inset">
//           <p className="font-bold text-sm">{t.whereToEat}</p>
//           <div className="flex space-x-2 mt-2">
//             <button className="bg-red px-2 py-1 text-white text-xs font-bold">{t.pickup}</button>
//             <button className="bg-orange px-2 py-1 text-white text-xs font-bold">{t.deliveryActive}</button>
//             <button className="bg-greywhite text-black px-2 py-1 border border-black text-xs font-bold">{t.booking}</button>
//           </div>
//         </div>
//       </div>
//       <p className="mt-2 text-xs font-bold underline cursor-pointer text-orange hover:text-red">Customer allergic information ?</p>
//     </div>
//   );
// }


export default function PromoVideo() {
  return (
    <video controls style={{ width: "100%" }}>
      <source src="/video/promote.mp4" type="video/mp4" />
    </video>
  );
}