import React from 'react';
import { AppLogo } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-transparent border-b border-green-200">
      <div className="container mx-auto px-6 py-4 flex items-center">
        <AppLogo />
        <h1 className="text-xl font-bold text-slate-800 ml-2">NeoCare</h1>
      </div>
    </header>
  );
};

export default Header;