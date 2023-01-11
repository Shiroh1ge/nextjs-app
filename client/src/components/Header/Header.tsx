import React from 'react';
import logo from '../../../public/logo.svg';
import Image from 'next/future/image';
import { useGetPublicKey } from '../../data/queries/useGetPublicKey.query';
import { useProfile } from 'nostr-react';

const Username = ({ pubkey }: { pubkey: string }): JSX.Element => {
  const profile = useProfile({
    pubkey,
  });

  return (
    <div className="ml-auto ">
      <p>Username: {profile?.data?.name ? <b>{profile?.data?.name}</b> : <i>Unknown</i>}</p>
    </div>
  );
};

const Header = ({ title, subtitle }: { title: string; subtitle?: string }): JSX.Element => {
  const { data: key } = useGetPublicKey();

  return (
    <div className="bg-[#161b22] w-full h-16 flex items-center px-96">
      <div className="flex items-center center  h-full ">
        <Image unoptimized={true} src={logo} className="w-12 h-12" alt="logo" />
        <h1 className="text-blue-50 text m-0 mr-3">{title}</h1>
        {subtitle && <h2 className="header-subtitle">{subtitle}</h2>}
      </div>

      {key && <Username pubkey={key}></Username>}
    </div>
  );
};

export default Header;
