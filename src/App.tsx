import React from 'react'
import { TodoItem } from './components/TodoItem/TodoItem'
import Mida from './Mida'

const App: React.FC = () => {
  return (
    <div>
      <section className="todoapp">
        <TodoItem />
        {/* <Mida /> */}
      </section>
    </div>
  )
}

export default App