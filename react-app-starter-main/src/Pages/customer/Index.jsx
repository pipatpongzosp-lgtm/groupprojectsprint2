import React from 'react';
import Navbarmenu from '../components/Navbarmenu';
import PromoPopup from '../components/PromoPopup';
import MenuSection from '../components/MenuSection';
import Footer from '../components/Footer';

export default function HomePage({ t, lang, setLang }) {
  return (
    <>
      <Navbarmenu t={t} lang={lang} setLang={setLang} />
      
      <main className="grow p-6 bg-greywhite">
        <PromoPopup t={t} />
        <MenuSection t={t} />
      </main>

      <Footer t={t} />
    </>
  );
}