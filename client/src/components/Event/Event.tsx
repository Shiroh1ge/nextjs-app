import React, { useEffect } from 'react';
import { useWebLnClient } from '../../data/web-ln-client';

import { useGetPublicKey } from '../../data/queries/useGetPublicKey.query';
import { useProfile } from 'nostr-react';
import { Event as NostrEvent } from 'nostr-tools/event';

const Event = ({ pubkey, event }: { pubkey: string; event: NostrEvent }): JSX.Element => {
  const profile = useProfile({ pubkey });

  const client = useWebLnClient();
  const { data: key } = useGetPublicKey();

  console.log('key', key);
  console.log('profile', profile);

  useEffect(() => {
    if (key) {
    }
  }, [key]);

  return (
    <div className="w-full flex items-center">
      <div className="flex flex-col w-full ">
        <h3 className="text-blue-50 text m-0 mr-3">
          <b>{profile?.data?.display_name || profile?.data?.name || 'Unknown user'}</b>
        </h3>

        <p>{event.content}</p>
      </div>
    </div>
  );
};

export default Event;
