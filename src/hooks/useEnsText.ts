import {useEffect, useState} from 'react';
import {providers} from 'ethers';
import {EIP634Keys} from '../types';

/**
 * Returns the stored EIP-634 text entry for the given text key.
 */
const useEnsText = (resolver: providers.Resolver | null, textKey: EIP634Keys) => {
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    if (resolver) {
      resolver
        .getText(textKey as string)
        .then(setText)
        .catch(() => setText(null));
    }
  }, [resolver, textKey]);

  return text;
};

export default useEnsText;
