import React from 'react';

import { connect } from "react-redux";

import { completedTask, removeTask } from "../../Redux/todosService/todosSlice";
import { useDispatch }  from "react-redux";

import FilterLink from "../../Components/TodoList/FilterLink/FilterLink";
import TodoList from "../../Components/TodoList/TodoList/TodoList";
import AddTodo from "../../Components/TodoList/AddTodo/AddTodo";

import "./Main.css"
import "bootstrap/dist/css/bootstrap.min.css";


function Main(props) {
    const dispatch = useDispatch();
    let { todos, filter } = props.todoList;

    const onChangeCompleted = (id) => {
        dispatch(completedTask(id));
    }

    const onRemoveTask = (id) => {
       dispatch(removeTask(id))
    }

    const getVisibleFilter = (filter) => {
        return todos.filter((todo) => {
            switch (filter) {
                case 'SHOW_COMPLETED':
                    return todo.isCompleted
                case 'SHOW_NOT_COMPLETED':
                    return !todo.isCompleted
                default:
                    return todos;
            }
        })
    }

    const todoList = getVisibleFilter(filter);

    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center">
                       <AddTodo />
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <TodoList todoList={todoList} onRemoveTask={onRemoveTask} onChangeCompleted={onChangeCompleted} />
                    </div>
                </div>
            </div>
            <div className="filter__buttons text-center d-flex">
                <FilterLink filter='SHOW_COMPLETED'>Выполненные задачи</FilterLink>
                <FilterLink filter='SHOW_NOT_COMPLETED'>Не выполненные задачи</FilterLink>
                <FilterLink filter='SHOW_ALL'>Все задачи</FilterLink>
            </div>
        </section>
    );
}

export default connect (state => ({
    todoList: state.todos
}))(Main)
//export default Main;