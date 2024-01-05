import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListTodoComponent from './components/ListTodoComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import TodoComponent from './components/TodoComponent'
import RegisterComponent from './components/RegisterComponent'
import LoginComponent from './components/LoginComponent'
import { isUserLoggedIn } from './services/AuthService'

function App() {

  const AuthenticatedRoute = ({children}) => {
    const isAuth = isUserLoggedIn();

    //route securing with children

    if (isAuth) {
      return children;
    } else{
      return <Navigate to="/"/>
    }
  }

  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        {/* http://localhost:3000 */}
        <Route path='/' element = {<LoginComponent />}/>
        {/* http://localhost:3000/todos */}
        <Route path='/todos' element = { 
          <AuthenticatedRoute>
            <ListTodoComponent />
          </AuthenticatedRoute>
        }/>
        {/* http://localhost:3000/add-todo */}
        <Route path='/add-todo' element = { 
          <AuthenticatedRoute>
            <TodoComponent />
          </AuthenticatedRoute>
        } />
        {/* http://localhost:3000/update-todo */}
        <Route path='/update-todo/:id' element = { 
          <AuthenticatedRoute>
            <TodoComponent />
          </AuthenticatedRoute>
        } />
        {/* http://localhost:3000/register */}
        <Route path='/register' element = { <RegisterComponent />} />
        {/* http://localhost:3000/login */}
        <Route path='/login' element = { <LoginComponent />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App
