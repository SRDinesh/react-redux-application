let initialState = [
  {
    text: 'This is a sampe product',
    isDone: false,
  },
];

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_product':
      return [...state, { text: action.payload, isDone: false }];
    case 'MARK_TODO': {
      const newState = [...state];
      return newState.map((value, index) =>
        index === action.payload ? { text: value.text, isDone: true } : value
      );
    }
    case 'DELETE_TODO':
      const newState = [...state];
      newState.splice(action.payload, 1);
      return newState;
    default:
      return state;
  }
}
