import { useNostrEvents } from 'nostr-react';
import { useEffect, useState, useRef } from 'react';
import { Kind } from 'nostr-tools';

export const useGetEvents = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(false);
  const cachedEvents = useRef([]);
  const [eventsToDisplay, setEventsToDisplay] = useState([]);
  const { events, isLoading, onConnect } = useNostrEvents({
    filter: {
      kinds: [Kind.Text],
      limit: 100,
    },
  });

  const displayCached = () => {
    setEventsToDisplay((current = []) => [...cachedEvents.current, ...current]);
    cachedEvents.current = [];
  };

  // console.log('eventsToDisplay', JSON.stringify(eventsToDisplay, null, 2));

  useEffect(() => {
    setTimeout(() => {
      setIsFirstLoad(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if (events.length && !isFirstLoad) {
      setEventsToDisplay(events);
    } else {
      const differentEvents = events.filter(
        (event) =>
          !eventsToDisplay.some((displayedEvent) => displayedEvent.id == event.id) &&
          !cachedEvents.current.some((cachedEvent) => cachedEvent.id == event.id),
      );
      cachedEvents.current = [...cachedEvents.current, ...differentEvents];
    }
  }, [JSON.stringify(events), JSON.stringify(eventsToDisplay), isFirstLoad]);

  return { eventsToDisplay, cachedEvents, displayCached };
};
