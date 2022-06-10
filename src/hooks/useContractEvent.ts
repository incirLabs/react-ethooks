import {ethers} from 'ethers';
import {useEffect} from 'react';

const useContractEvent = (
  /**
   * Contract object returned from useContract or ethers.Contract
   */
  contract: ethers.Contract,

  /**
   * Event name to listen to
   */
  event: string | ethers.EventFilter,

  /**
   * Callback to call when the event is triggered
   */
  listener: ethers.providers.Listener,
) => {
  useEffect(() => {
    contract.on(event, listener);

    return () => {
      contract.off(event, listener);
    };
  }, [contract, event, listener]);
};

export default useContractEvent;
