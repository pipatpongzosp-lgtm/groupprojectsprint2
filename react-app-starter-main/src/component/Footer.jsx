import React from 'react';
import PickupBar from './PickupBar';
import FooterLinks from './FooterLinks';

export default function Footer({ t }) {
  return (
    <footer className="bg-black text-greywhite w-full">
      <PickupBar t={t} />
      <FooterLinks t={t} />
    </footer>
  );
}