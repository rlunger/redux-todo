import todoReducer from './todoDuck'
import visibilityReducer from './visibilityDuck'

export default (state, action) => {
  return {
    visibilityFilter: visibilityReducer(state.visibilityFilter, action),
    todos: todoReducer(state.todos, action)
  }
}
