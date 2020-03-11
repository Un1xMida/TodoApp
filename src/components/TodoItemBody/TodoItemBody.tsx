import React from 'react'
import './TodoItemBody.scss'
import ITodoItem from '../../Models/ITodoItem';

export const TodoItemBody: React.FC<ITodoItem> = ({ text, completed }: ITodoItem) => {
  return (
    <li className={completed ? 'completed' : ''}>
      <div className="view">
        <input className="toggle" onChange={(e) => { console.log(e.target.value) }} type="checkbox" checked={completed} />
        <label>{text}</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" value="qwewqe" onChange={(e) => { console.log(e.target.value) }} />
    </li>
  )
}
