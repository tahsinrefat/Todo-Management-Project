import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListTodoComponent from './components/ListTodoComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TodoComponent from './components/TodoComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        {/* //http://localhost:3000 */}
        <Route path='/' element = {<ListTodoComponent />}/>
        {/* //http://localhost:3000/todos */}
        <Route path='/todos' element = { <ListTodoComponent />}/>
        {/* //http://localhost:3000/add-todo */}
        <Route path='/add-todo' element = { <TodoComponent />} />
        {/* //http://localhost:3000/update-todo */}
        <Route path='/update-todo/:id' element = { <TodoComponent />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App
