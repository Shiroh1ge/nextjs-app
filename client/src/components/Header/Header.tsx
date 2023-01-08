import React, { useEffect } from 'react';
import logo from '../../../public/logo.svg';
import Image from 'next/future/image';
import { useWebLnClient } from '../../data/web-ln-client';

import {} from 'nostr-tools';
import { useGetPublicKey } from '../../data/queries/useGetPublicKey.query';
import { useProfile } from 'nostr-react';

const Header = ({ title, subtitle }: { title: string; subtitle?: string }): JSX.Element => {
  const client = useWebLnClient();
  const { data: key } = useGetPublicKey();
  const profile = useProfile({
    pubkey:
      'acf56fa1b5ba339444e304c3e6e2c29a7e7347c840c31ba27ebe9c8f95a06d8e' ||
      'acf56fa1b5ba339444e304c3e6e2c29a7e7347c840c31ba27ebe9c8f95a06d8e',
  });
  console.log('key', key);
  console.log('profile', profile);

  useEffect(() => {
    if (key) {
    }
  }, [key]);

  return (
    <div className="bg-[#161b22] w-full h-16 flex items-center px-24">
      <div className="flex items-center center  h-full ">
        <Image unoptimized={true} src={logo} className="w-12 h-12" alt="logo" />
        <h1 className="text-blue-50 text m-0 mr-3">{title}</h1>
        {subtitle && <h2 className="header-subtitle">{subtitle}</h2>}
      </div>

      {key && (
        <div className="ml-auto ">
          <p>Username: {profile?.data?.name ? <b>{profile?.data?.name}</b> : <i>Unknown</i>}</p>
        </div>
      )}
    </div>
  );
};

export default Header;
