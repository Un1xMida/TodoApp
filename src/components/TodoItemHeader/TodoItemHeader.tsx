import React from 'react'
import './TodoItemHeader.scss'
export const TodoItemHeader: React.FC = () => {
  return (
    <div>
      <header className="header">
        <h1>todosss</h1>
        <input className="new-todo" onChange={(e) => console.log(e.target.value)} placeholder="What needs to be done?" value="" />
      </header>
    </div>
  )
}
