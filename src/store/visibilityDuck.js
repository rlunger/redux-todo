const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export default (state, action) => {
  const { payload } = action
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return payload.filter
    default:
      return state
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: { filter }
  }
}
