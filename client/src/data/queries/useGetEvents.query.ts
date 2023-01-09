import { useNostrEvents } from 'nostr-react';

export const useGetEvents = () => {
  const { events } = useNostrEvents({
    filter: {
      since: 0,
      kinds: [1],
      limit: 10,
    },
  });

  return events;
};
