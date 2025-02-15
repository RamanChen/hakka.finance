import { Web3Provider } from '@ethersproject/providers';

export default function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = parseInt(provider.chainId, 16) === 42 ? 4000 : 15000;
  return library;
}
