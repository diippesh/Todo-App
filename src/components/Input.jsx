import React, { useRef } from "react";
import styles from './Input.module.css'
function Input({addTodoMain}) {
    const val = useRef("")
    const addTodo =(e)=>{
        e.preventDefault();
        if(val.current.value==="") return
        addTodoMain(val.current.value)
        val.current.value=""
    }
    return (
        <form onSubmit={addTodo}>
            <div class="form-group">
                <input type="text" className={`form-control myInput ${styles.myInput}`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Add Todo" ref={val}/>
            </div>
           
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>)
}
export default Input