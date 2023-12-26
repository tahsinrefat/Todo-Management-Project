import React, { useEffect, useState } from 'react'
import { completeTodo, deleteTodo, getAllTodos, inCompleteTodo } from '../services/TodoService'
import { useNavigate } from 'react-router-dom'

const ListTodoComponent = () => {

    // const dummyData = [
    //     {
    //         "id": 1,
    //         "title": "Learn Core Java",
    //         "todoDescription": "Learn Core Java with Examples",
    //         "completed": false
    //     },
    //     {
    //         "id": 2,
    //         "title": "Learn Spring Core",
    //         "todoDescription": "Learn Spring Core with Examples",
    //         "completed": false
    //     },
    //     {
    //         "id": 3,
    //         "title": "Learn Spring Boot",
    //         "todoDescription": "Learn Spring Boot with Examples",
    //         "completed": false
    //     }
    // ]

    useEffect(() => {
        listTodos();
    }, [])

    const listTodos = () => {
        getAllTodos().then((response) => {
            setTodos(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    const updateTodo = (id) => {
        console.log(id);
        navigator(`/update-todo/${id}`)
    }

    const deleteTodoById = (id) => {
        deleteTodo(id).then((response) => {
            listTodos();
        }).catch(error => {
            console.error(error);
        })
    }

    const markCompleteTodoById = (id) =>{
        completeTodo(id).then((response) => {
            listTodos();
        }).catch(error => {
            console.error(error);
        })
    }

    const markInCompleteTodoById = (id) => {
        inCompleteTodo(id).then((response) => {
            listTodos();
        }).catch(error => {
            console.error(error);
        })
    }

    const [todos, setTodos] = useState([]);

    const navigator = useNavigate();

    const addNewTodo = () => {
        navigator('/add-todo');
    }

  return (
    <div className='container'>
        <h2 className='text-center'>List of Todos</h2>
        <button className="btn btn-primary mb-2" onClick={ addNewTodo }>Add New Todo</button>
        <div>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Todo Title</th>
                        <th>Todo Description</th>
                        <th>Todo Completed</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo) => 
                            <tr key={todo.id}>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td>{todo.completed ? 'Yes': 'No'}</td>
                                <td>
                                    <button className="btn btn-info" onClick={() => updateTodo(todo.id)}>Update</button>
                                    <button className="btn btn-danger" onClick={() => deleteTodoById(todo.id)} style={{ marginLeft: "10px" }}>Delete</button>
                                    <button className="btn btn-success" onClick={() => markCompleteTodoById(todo.id)} style={{ marginLeft: "10px" }}>Complete</button>
                                    <button className="btn btn-info" onClick={() => markInCompleteTodoById(todo.id)} style={{ marginLeft: "10px" }}>Incomplete Todo</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ListTodoComponent