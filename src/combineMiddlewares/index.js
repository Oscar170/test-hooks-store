const combineMiddlewares = (...middlewares) => store => next => {
  const loadedMiddlewares = middlewares.map(middleware => middleware(store));

  return (action = {}) => {
    loadedMiddlewares.reduce((a, b) => () => a(b), action);
  };
};

export default combineMiddlewares;
