import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Listtodos from './Listtodos';

function App() {
  var[task,setTask]=useState("")
  var[todos,setTodos]=useState([])
  const changeHandler=e=>{
    setTask(e.target.value)
  }
  const submitHandler=e=>{
    e.preventDefault()
    console.log(task)
    const newTodos=[...todos,task];
    setTodos(newTodos)
setTask("");
  }
  const deleteHandler=(indexvalue)=>{
const newTodos=todos.filter((todo,index)=> index!== indexvalue)
setTodos(newTodos);
  }
  return (
    <div>
      <center>
      <div className="card">
         <div className="card-body">
          <h5 className="card-title">todo management application</h5>
          <form onSubmit={submitHandler}>
            <input type="text" name="task" value={task} onChange={changeHandler}></input>&nbsp;&nbsp;
            <input type="submit" value="add" name="add"></input>
          </form>
          <Listtodos todolist={todos} deleteHandler={deleteHandler}/>
         </div>
      </div>
      </center>
    </div>
  );
}

export default App;
