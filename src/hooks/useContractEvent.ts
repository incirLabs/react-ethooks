import {ethers} from 'ethers';
import {useEffect} from 'react';

const useContractEvent = (
  contract: ethers.Contract,
  event: string | ethers.EventFilter,
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
