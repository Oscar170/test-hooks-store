import React from 'react';

import StoreContext from './StoreContext';
import useCreateStore from './useCreateStore';
import combineReducers from './combineReducers';
import combineMiddlewares from './combineMiddlewares';
import { logger, asyncActions } from './middlewares';
import * as reducers from './reducers';
import Input from './components/Input';
import SubmitButton from './components/SubmitButton';
import CardList from './components/CardList';

const rootReducer = combineReducers(reducers);

function App() {
  const store = useCreateStore(
    rootReducer,
    // combineMiddlewares(asyncActions, logger),
  );

  return (
    <StoreContext.Provider value={store}>
      <div className="App">
        <Input />
        <SubmitButton />
        <CardList />
      </div>
    </StoreContext.Provider>
  );
}

export default App;
