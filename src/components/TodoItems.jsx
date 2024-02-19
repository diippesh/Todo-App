import React from "react";
import styles from './TodoItems.module.css'
import TodoItem from "./TodoItem";
function TodoItems({todo,editMethod,deleteMethod}) {
 
    return (
        <ul class={`list-group ${styles.myTodoItems}`}>

            {
                todo.map((item) => <TodoItem item={item} editMethod={editMethod}  deleteMethod={deleteMethod}/>)
            }
        </ul>
    )
}
export default TodoItems