import React, { useState } from 'react'
import { saveTodo } from '../services/TodoService';
import { useNavigate } from 'react-router-dom';

const TodoComponent = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState(false);
    const navigator = useNavigate();

    const saveOrUpdateTodo = (e) => {
        e.preventDefault();
        const todo = {title, description, completed};
        console.log(todo);

        saveTodo(todo).then((response) => {
            console.log(response.data);
        }).catch(error=> {
            console.error(error);
        })
        navigator('/todos');
    }

  return (
    <div className='container'><br />
        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
                <h2 className='text-center'>Add Todo</h2>
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label className='form-label'>Todo Title</label>
                            <input className='form-control' type='text' placeholder='Enter Todo Title' name='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </div>
                        <div className="form-group mb-2">
                            <label className='form-label'>Todo Description</label>
                            <input className='form-control' type='text' placeholder='Enter Todo Description' name='description' value={description} onChange={(e) => setDescription(e.target.value)}/>
                        </div>
                        <div className="form-group mb-2">
                            <label className='form-label'>Todo Status</label>
                            <select className='form-control' value={completed} onChange={(e) => setCompleted(e.target.value)}>
                                <option value="false">No</option>
                                <option value="true">Yes</option>
                            </select>
                        </div>

                        <button className="btn btn-success" onClick={(e) => saveOrUpdateTodo(e)}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TodoComponent