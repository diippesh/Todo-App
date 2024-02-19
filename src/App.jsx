import 'bootstrap/dist/css/bootstrap.css';
import Heading from './components/Heading';
import Input from './components/Input';
import TodoItems from './components/TodoItems';
import { nanoid } from 'nanoid'
import { useState,useEffect } from 'react';
function App() {

  const [todo, setTodo] = useState([])
  const addTodoMain = (str) => {
    setTodo((prev) => [
      ...prev,
      {
        id:  nanoid(),
        todo: str,
      }])
    console.log(todo)
  }
  const editMethod = (item, inputVal) => {
    console.log('edit item: ' + inputVal);

    setTodo(prev => {
      const updatedTodo = prev.map(it =>
        it.id === item.id ? { id: item.id, todo: inputVal } : it
      );

      console.log(updatedTodo);

      return updatedTodo;
    });

  };
  const deleteMethod =(item)=>{
    setTodo((prev)=>prev.filter((it)=>it.id !== item.id))
  }
  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem('todo'))
    if(todo && todo.length>0){
     setTodo(todo)
    }
   }, [])
   useEffect(()=>{
     localStorage.setItem('todo',JSON.stringify(todo))
   },[todo])

  return (
    <center>
      <Heading />
      <Input addTodoMain={addTodoMain} />
      <TodoItems todo={todo} editMethod={editMethod} deleteMethod={deleteMethod} />
    </center>
  )
}

export default App
