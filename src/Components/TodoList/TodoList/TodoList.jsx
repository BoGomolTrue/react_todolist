import React from 'react';

import "./TodoList.css";
function TodoList({ todoList, onChangeCompleted, onRemoveTask }) {
    return (
        <ul className="todos">
            {todoList.map(({id, title, isCompleted}, index) => {
                return (
                    <div key={index}>
                        <div className="d-flex align-items-center">
                            <li className={isCompleted ? 'w-100 checked' : 'w-100'}  onClick={() => onChangeCompleted(id)}>
                                <span>{title}</span>
                                {isCompleted}
                            </li><span className="delete-task" onClick={() => onRemoveTask(id)}>X</span>
                        </div>
                    </div>
                )
            })}
        </ul>
    )
}

export default TodoList;