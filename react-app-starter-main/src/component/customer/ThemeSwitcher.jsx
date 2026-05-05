import React from 'react';
import { themes } from '../../constants/themes';

export default function ThemeSwitcher({ currentTheme, setCurrentTheme }) {
  return (
    <div className="fixed top-20 right-4 z-[999] bg-white p-4 border border-black shadow-lg">
      <label className="font-bold text-sm block mb-2">Test Theme Switcher:</label>
      <select 
        className="bg-greywhite text-black px-2 py-1 outline-none font-bold text-sm"
        value={currentTheme} 
        onChange={(e) => setCurrentTheme(e.target.value)}
      >
        {themes.map(name => (
          <option key={name} value={name}>{name.toUpperCase()} THEME</option>
        ))}
      </select>
    </div>
  );
}