const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

export default (state, action) => {
  const { payload } = action
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: payload.text, completed: false }]

    case REMOVE_TODO:
      return state.filter((todo, index) => index != payload.id)

    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === payload.id) {
          return { ...todo, completed: !todo.completed }
        }
      })

    default:
      return state
  }
}

export const addTodo = text => {
  return {
    type: ADD_TODO,
    payload: { text }
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
