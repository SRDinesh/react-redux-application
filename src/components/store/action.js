export const addTodoAction = (payload) => ({
  type: 'ADD_TODO',
  payload,
});

export const markTodoAction = (payload) => ({
  type: 'MARK_TODO',
  payload,
});

export const deleteTodoAction = (payload) => ({
  type: 'DELETE_TODO',
  payload,
});
