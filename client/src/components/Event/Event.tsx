import React from 'react';
import { formatDistanceToNow } from 'date-fns';

import { useProfile } from 'nostr-react';
import { Event as NostrEvent } from 'nostr-tools/event';
import Image from 'next/future/image';

const Event = ({ pubkey, event }: { pubkey: string; event: NostrEvent }): JSX.Element => {
  const profile = useProfile({ pubkey });
  console.log('event', event);

  return (
    <div className="w-full flex">
      <div className="w-10 h-10 rounded-full bg-slate-800 mr-4">
        {profile?.data?.picture && (
          <Image
            unoptimized={true}
            width={10}
            height={10}
            className="w-10 h-10 rounded-full"
            src={profile?.data?.picture}
            onError={() => {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              // eslint-disable-next-line @typescript-eslint/no-this-alias
              const self = this as any;
              if (self) {
                self!.src = '';
              }
            }}
            alt="test"
          />
        )}
      </div>

      <div className="flex flex-col w-full rounded-md border border border-solid border-gray-400">
        <div className=" p-2 bg-slate-800 rounded-md relative flex">
          <div
            className="caret bg-gray-400"
            style={{
              position: 'absolute',
              top: '11px',
              right: '100%',
              left: '-9px',
              display: 'block',
              width: '8px',
              height: '16px',
              pointerEvents: 'none',
              clipPath: 'polygon(0 50%, 100% 0, 100% 100%)',
            }}
          ></div>
          <div
            className="caret bg-slate-800"
            style={{
              position: 'absolute',
              top: '11px',
              right: '100%',
              left: '-8px',
              display: 'block',
              width: '8px',
              height: '16px',
              pointerEvents: 'none',
              clipPath: 'polygon(0 50%, 100% 0, 100% 100%)',
            }}
          ></div>

          <h3 className="text-blue-50 text">
            <b>{profile?.data?.display_name || profile?.data?.name || 'Unknown user'}</b>
          </h3>

          <div className="ml-auto">
            {formatDistanceToNow(new Date(0).setUTCSeconds(event.created_at), { addSuffix: true })}
          </div>
        </div>

        <div className="p-2 border-t border-gray-400 border-solid ">
          <p className="break-all whitespace-pre-wrap">{event.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Event;
