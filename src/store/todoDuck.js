const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

export default (state, action) => {
  const { payload } = action
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { text: payload.text, id: payload.id, completed: false }
      ]

    case REMOVE_TODO:
      return state.filter(todo => todo.id != payload.id)

    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === payload.id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })

    default:
      return state
  }
}

export const addTodo = (text, id) => {
  return {
    type: ADD_TODO,
    payload: { text, id }
  }
}

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    payload: { id }
  }
}

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    payload: { id }
  }
}
