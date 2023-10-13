import React from 'react';
import { setFilter, setTask } from "../../../Redux/todosService/todosSlice";
import { useDispatch } from "react-redux";

import "./AddTodo.css";

function AddTodo() {
    const dispatch = useDispatch();
    const [taskName, setTaskName] = React.useState('');

    const onSetTask = () => {
        if (taskName.length !== 0) {
            dispatch(setTask(taskName));
            dispatch(setFilter("SHOW_ALL"));
            setTaskName('');
        }
    }

    return (
        <div className="input-group mb-3 add-todo">
            <input type="text" placeholder="Напишите задачу" className="form-control" value={taskName} onChange={e => setTaskName(e.target.value)}/>
            <div className="input-group-append">
                <span className="input-group-text"  onClick={onSetTask}>OK</span>
            </div>
        </div>
    )
}

export default AddTodo;