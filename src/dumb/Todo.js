import React from 'react'

const Todo = ({ onClick, onDelete, completed, text }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      fontFamily: "'Fira Code', courier, monospace"
    }}
  >
    {' '}
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
    <div
      style={{
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        border: 'none',
        backgroundColor: 'red',
        color: 'white',
        fontSize: '10px',
        textAlign: 'center',
        fontWeight: 'bold',
        lineHeight: '1.5em'
      }}
      onClick={onDelete}
    >
      x
    </div>
  </div>
)

export default Todo
