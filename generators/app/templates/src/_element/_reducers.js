
function counters(state, action) {
  if (!state) {
    state = [
      {
        id: 0,
        value: 4,
      },
      {
        id: 1,
        value: 42,
      }
    ];
  }

  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return state.map((counter) => {
        if (counter.id !== action.id) {
          return counter;
        }

        return Object.assign({}, counter, {
          value: counter.value + 1,
        });
      });
    case 'DECREMENT_COUNTER':
      return state.map((counter) => {
        if (counter.id !== action.id) {
          return counter;
        }

        return Object.assign({}, counter, {
          value: counter.value - 1,
        });
      });
    default:
      return state;
  }
}

const reducer = Redux.combineReducers({
  counters,
});
