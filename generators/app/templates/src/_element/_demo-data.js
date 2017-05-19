
const demoData = {
  things: {
    'id1': {
      id: 'id1',
      label: 'Car'
    },
    'id2': {
      id: 'id2',
      label: 'Tomato'
    },
    'id3': {
      id: 'id3',
      label: 'Mustard'
    }
  },

  users: {
    'john': {
      id: 'john',
      name: 'John',
      surname: 'Brown'
    }
  }
};

if (typeof module !== 'undefined') {
  // Running in node.js
  module.exports = demoData;
}

if (typeof window !== 'undefined') {
  // Running in browser
  window.Db = Object.assign(window.Db || {}, {
    demoData: demoData,
    demoUsers: {
      'john@email.com': {
        uid: 'john',
        password: 'password'
      }
    }
  });
}
