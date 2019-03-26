import { useContext } from 'react';
import StoreContext from '../StoreContext';

const defaultMap = () => ({});

function useConnect(mapState = defaultMap, mapDispatch = defaultMap) {
  const { getState, dispatch } = useContext(StoreContext);

  return {
    ...mapState(getState()),
    ...mapDispatch(dispatch),
  };
}

export default useConnect;
