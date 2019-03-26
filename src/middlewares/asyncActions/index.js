const asyncActions = store => next => async action => {
  if (typeof action.next === 'function') {
    for (
      let current = await action.next();
      !current.done;
      current = await action.next()
    ) {
      await next(current.value);
    }
  }

  return next(action);
};

export default asyncActions;
