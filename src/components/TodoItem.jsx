import React, { useRef } from 'react'
import styles from './TodoItem.module.css'
import { useState } from 'react'
function TodoItem({item,editMethod,deleteMethod}) {
    const [edit,setEdit] = useState(false)
    const [inputValue,setInputValue] = useState(item.todo)

    function myFunc(){
        editMethod(item,inputValue)
        setEdit((prev)=>!prev)
    }
  
    return (
        <li key={item.id} class={`${styles.myListItem}`}>
            <input type="text" style={{
                border: 'none',
                width: '70%',
                padding: '10px',
            }}
            readOnly={!edit}
            value={inputValue} 
            onChange={(e)=>{setInputValue(e.target.value)}}
            />
            <div>
                <button type="button" class={`btn btn-warning ${styles.btn}`} onClick={()=>{
                   if (edit) {
                    myFunc();
                } else setEdit((prev) => !prev);

                }}>{edit?"Save":"Edit"}</button>    
                <button type="button" class={`btn btn-danger ${styles.btn}`} onClick={()=>deleteMethod(item)}>Delete</button>
            </div>

        </li>
    )
}

export default TodoItem