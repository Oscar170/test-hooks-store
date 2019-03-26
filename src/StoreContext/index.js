import React from 'react';

const StoreContext = React.createContext({
  getState: () => {},
  dispatch: action => {},
});

export default StoreContext;
