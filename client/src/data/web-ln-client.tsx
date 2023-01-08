import { requestProvider, WebLNProvider } from 'webln';
import React, { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';

export type WebLNClient = (WebLNProvider & { enabled: boolean; isEnabled: boolean; executing: boolean }) | undefined;

export const WebLnContext = createContext<WebLNClient | undefined>(undefined);

export const WebLnProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const [client, setClient] = useState<WebLNClient | undefined>(undefined);

  useEffect(() => {
    const init = async () => {
      const client = await requestProvider();

      setClient(client as WebLNClient);
    };

    init();
  }, []);

  return <WebLnContext.Provider value={client}>{children}</WebLnContext.Provider>;
};

export const useWebLnClient = () => useContext(WebLnContext);
