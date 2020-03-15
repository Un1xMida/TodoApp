import React from 'react'
import TodoItem from './components/TodoItem/TodoItem'

const App: React.FC = () => {
  return (
    <div>
      <section className="todoapp">
        <TodoItem />
      </section>
    </div>
  )
}

export default App