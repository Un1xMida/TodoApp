import React, { useEffect, useState, useReducer } from 'react'
import axios from 'axios';

import { TodoItemHeader } from '../TodoItemHeader/TodoItemHeader'
import { TodoItemBody } from '../TodoItemBody/TodoItemBody'
import { TodoItemFooter } from '../TodoItemFooter/TodoItemFooter'

import ITodoItem from '../../Models/ITodoItem';
interface TodoItemAction {
  type: any;
  payload: ITodoItem
}

interface State {
  todos: ITodoItem[]
}

//Reducer
const todoItemReducer = (state: State, action: TodoItemAction): ITodoItem[] => {
  switch (action.type) {
    case "ADD":
      return { todos: { state.todos } }
    default:
      return state.todos
  }
}


export const TodoItem: React.FC = () => {
  const [todos, setTodos] = useState([])

  const [todosArray, dispatch] = useReducer(todoItemReducer, todos)
  useEffect(() => {
    axios.get('http://localhost:3004/todos')
      .then((todosRes) => {
        setTodos(todosRes.data)
      })
      .catch(error => console.log(error))
  }, [])

  const todosList = todos.map((todoItem: ITodoItem) => <TodoItemBody key={todoItem.id} id={todoItem.id} text={todoItem.text} completed={todoItem.completed} />)

  return (
    <>
      <TodoItemHeader />
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" onChange={(e) => { console.log(e.target.value) }} />
        <label htmlFor="toggle-all"></label>
        <ul className="todo-list">
          {todosList}
        </ul>
      </section >

      <button onClick={() => dispatch({ type: "ADD", payload: { id: 3, text: 'qweqwe', completed: false } })}>Add</button>
      <TodoItemFooter />
    </>
  )
}
