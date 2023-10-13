import React from 'react';

import { useDispatch }  from "react-redux";

import { setFilter } from "../../../Redux/todosService/todosSlice";

import "./FilterLink.css"

function FilterLink({children, filter }) {
    const dispatch = useDispatch();

    const [nameFilter, setNameFilter] = React.useState(filter);

    const onSetFilter = (e, filter) => {
        const filterButtons = document.getElementsByClassName('filter-button');
        Array.from(filterButtons).forEach((button) => {
           if (button !== e.target) {
              button.style.backgroundColor = 'white'
           }
        })
        e.target.style.backgroundColor = 'rgba(154, 205, 50, 0.2)';
        setNameFilter(filter);
        dispatch(setFilter(filter));
    }


    return (
        <div onClick={(e)=> onSetFilter(e, nameFilter)} className={filter === "SHOW_ALL" ? "active filter-button" : "filter-button"}>{children}</div>
    )
}


export default FilterLink;