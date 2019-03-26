import { useReducer } from 'react';

const useCreateStore = (
  reducer,
  middleware,
  initState = reducer(undefined, { type: '@@INIT' }),
) => {
  const [state, dispatch] = useReducer(reducer, initState);

  // const loadedMiddleware = middleware({ getState: () => state, dispatch })(
  //   dispatch,
  // );

  return {
    getState: () => state,
    dispatch,
  };
};

export default useCreateStore;
