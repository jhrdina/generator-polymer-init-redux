
window.Actions = window.Actions || {};

// Action creators

Actions = {
  incrementCounter: (id) => ({
    type: 'INCREMENT_COUNTER',
    id
  }),
  decrementCounter: (id) => ({
    type: 'DECREMENT_COUNTER',
    id
  }),
}