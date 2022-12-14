import '../styles/globals.css';
import type { AppType } from 'next/dist/shared/lib/utils';
import { queryClient } from '../data/query-client';
import { QueryClientProvider } from 'react-query';
import { NostrProvider } from 'nostr-react';
import { WebLnProvider } from '../data/web-ln-client';

const relayUrls = [
  // 'wss://nostr-pub.wellorder.net',
  // 'wss://nostr.onsats.org',
  // 'wss://relay.nostr.ch',
  'wss://nostr.zebedee.cloud',
  'wss://nostr.walletofsatoshi.com',
  'wss://relay.nostr.info',
  'wss://relay.damus.io',
  'wss://nostr.fmt.wiz.biz',
  'wss://nostr-pub.semisol.dev',
  'wss://nostr.bongbong.com',
];
const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <WebLnProvider>
        <NostrProvider relayUrls={relayUrls} debug={true}>
          <Component {...pageProps} />
        </NostrProvider>
      </WebLnProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
