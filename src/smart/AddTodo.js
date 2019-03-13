import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../store/todoDuck'
let _todoGuid = 0

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          _todoGuid++
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value, _todoGuid))
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
