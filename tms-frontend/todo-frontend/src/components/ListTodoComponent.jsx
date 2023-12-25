import React, { useEffect, useState } from 'react'
import { getAllTodos } from '../services/TodoService'
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
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo) => 
                            <tr key={todo.id}>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td>{todo.completed ? 'Yes': 'No'}</td>
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