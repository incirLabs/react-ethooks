import {useEffect} from 'react';
import {useProvider} from '../contexts';
import {ExternalProviderWithEvents} from '../types';

/**
 * Hook to use the account change event.
 * We are already handling the account change event.
 * This hook is probably only for edge cases.
 *
 * @param callback - Callback to call when the account change event is fired.
 */
const useAccountChange = (callback: (accounts: string[]) => void) => {
  const provider = useProvider();

  const ethereum: ExternalProviderWithEvents | undefined = provider?.provider;

  useEffect(() => {
    if (ethereum?.on) {
      ethereum.on('accountsChanged', callback);
    }

    return () => {
      if (ethereum?.off) {
        ethereum.off('accountsChanged', callback);
      }
    };
  }, [ethereum, callback]);
};

export default useAccountChange;
