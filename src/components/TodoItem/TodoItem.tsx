import React, { useState, useEffect } from 'react';
import { TodoItemHeader } from '../TodoItemHeader/TodoItemHeader';
import { TodoItemFooter } from '../TodoItemFooter/TodoItemFooter';
import axios from 'axios';
interface ITodoItem {
  id: number;
  name: string;
  completed: boolean
}
const initState = {
  todos: [
    {
      id: 0,
      name: 'First TODO',
      completed: true
    }
  ]
}
interface Store {
  todos: ITodoItem[]
}

const TodoItem: React.FC = () => {

  useEffect(() => {
    axios.get(`http://localhost:3004/todos`)
      .then(res => {
        const data = res.data;
        setTodos({ todos: data })
      })
  }, [])
  // > Todos Array Setter
  const [todosArray, setTodos] = useState({ todos: [{}] })
  // > New Todo Holder
  const [newTodo, setNewTodo] = useState('')

  // > Todos Array Setter
  const addTodos = () => {
    setTodos({ todos: [...todosArray.todos, { id: todosArray.todos.length + 1, name: newTodo, completed: false }] });
    setNewTodo('')
  }
  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      addTodos()
    }
  }
  return (
    <>
      <header className="header">
        <h1>todosss</h1>
        <input className="new-todo" onKeyPress={e => handleKeyPress(e)} value={newTodo} onChange={e => setNewTodo(e.target.value)} placeholder="What needs to be done?" />
      </header>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" onChange={(e) => { console.log(e.target.value) }} />
        <label htmlFor="toggle-all"></label>
        {todosArray.todos ? <ul className="todo-list">
          {
            todosArray.todos.map((todo: any) => {
              return (
                <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                  <div className="view">
                    <input className="toggle" onChange={(e) => { console.log(e.target.value) }} type="checkbox" checked={todo.completed} />
                    <label>{todosArray.todos.length}--{todo.name} -- {todo.id}</label>
                    <button className="destroy"></button>
                  </div>
                  <input className="edit" value="qwewqe" onChange={(e) => { console.log(e.target.value) }} />
                </li>
              )
            })
          }
        </ul> : null}
      </section >

      {/* <button onClick={() => dispatch({ type: "ADD", payload: { id: 3, text: 'qweqwe', completed: false } })}>Add</button> */}
      <TodoItemFooter />
    </>
  )
}

export default TodoItem