import { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
function Todo() {
  const[task,setTask]=useState('')
  const [allTodos,setAllTodos] = useState([])

  useEffect(()=>{
    axios.get(`http://localhost:4000/api/get/todos/`)
    .then(response=>setAllTodos(response.data))
    .catch(err=>console.log(err))
  },[])

  const addTodo = (e)=>{
    e.preventDefault();
    if(task!==''){
        axios.post(`http://localhost:4000/api/add/todos/`,{task})
        .then(response=>{
            setAllTodos([...allTodos,response.data])
            setTask('')
        })
        .catch(err=>console.log(err))
    }
  }
  const handleDelete =(id)=>{
    axios.delete(`http://localhost:4000/api/delete/todos/${id}`)
    .then(res=>{
        setAllTodos(allTodos.filter(todo=>todo._id !== id))
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className="todo">
      <h1>Todo Mern</h1>
      <form>
        <input type='text' placeholder='Write Something' value={task} onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={addTodo}>Add Todo</button>
      </form>
      <ul>
        {
            allTodos.map(todo=>(
                <li key={todo._id}>{todo.task}
                <div className='btns'>
                <Link to={`/todos/update/${todo._id}`}>Update</Link>
                <button onClick={()=>handleDelete(todo._id)}>Delete</button>
                </div></li>
            ))
        }
      </ul>
    </div>
  );
}

export default Todo;