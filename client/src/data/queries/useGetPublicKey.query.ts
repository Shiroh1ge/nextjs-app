import { useQuery, UseQueryOptions } from 'react-query';
import { AlbyNostr } from '../../types/AlbyNostr';

const fetch = async () => {
  const nostr: AlbyNostr = (window as any)?.nostr;

  return await nostr.getPublicKey();
};

export const useGetPublicKey = (options?: UseQueryOptions<any, any, string>) => {
  return useQuery<string>(['pubkey'], fetch, options);
};
