import React from 'react';
import logo from '../../../public/logo.svg';
import Image from 'next/future/image';

const Header = ({ title, subtitle }: { title: string; subtitle?: string }): JSX.Element => {
  return (
    <div className="bg-blue-900 w-full h-16">
      <div className="flex items-center center px-44 h-full">
        <Image unoptimized={true} src={logo} className="w-12 h-12" alt="logo" />
        <h1 className="text-blue-50 text m-0 mr-3">{title}</h1>
        {subtitle && <h2 className="header-subtitle">{subtitle}</h2>}
      </div>
    </div>
  );
};

export default Header;
