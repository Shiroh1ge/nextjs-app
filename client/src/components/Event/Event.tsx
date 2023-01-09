import React from 'react';

import { useProfile } from 'nostr-react';
import { Event as NostrEvent } from 'nostr-tools/event';

const Event = ({ pubkey, event }: { pubkey: string; event: NostrEvent }): JSX.Element => {
  const profile = useProfile({ pubkey });

  return (
    <div className="w-full flex items-center">
      <div className="flex flex-col w-full rounded-sm border border border-solid border-gray-400">
        <h3 className="text-blue-50 text m-0 mr-3 p-2 ">
          <b>{profile?.data?.display_name || profile?.data?.name || 'Unknown user'}</b>
        </h3>

        <div className="p-2 border-t border-gray-400 border-solid ">
          <p className="break-all whitespace-pre-wrap">{event.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Event;
