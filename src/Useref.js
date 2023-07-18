import React,{useRef,useEffect} from 'react'

function Useref() {
const data=useRef(null)
const submithandelr=e=>{
  e.preventDefault();
  console.log(data.current.value);
}
useEffect(()=>{
data.current.focus()
},[])
  return (
    <div>
        <center>
           <form onSubmit={submithandelr}>
            <input ref={data} type="test" placeholder='enter your name'></input>
            <input type="submit"></input>
           </form>
        <h1>hi hello welcome </h1>
        </center>
        <p>
          
        </p>
    </div>
  )
}

export default Useref