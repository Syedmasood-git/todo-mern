import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
    const[task,setTask]=useState('')
    const [allTodos,setAllTodos] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()
    const BASE_URL = process.env.BASE_URL

    // useEffect(()=>{

    // },[])
    const handleUpdate=(e,id)=>{
        e.preventDefault()
        if(task!==''){
            axios.put(`http://localhost:4000/api/update/todos/${id}`,{task})
        .then(res=>{
            setAllTodos(res.data)
            navigate('/')
        })
        .catch(err=>console.log(err))
        }
        else{
            navigate('/')
        }
    }
  return (
    <div className="todo">
      <h1>Todo Mern</h1>
      <form>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={(e)=>handleUpdate(e,id)}>Update Todo</button>
      </form>
    </div>
  );
};

export default Update;
