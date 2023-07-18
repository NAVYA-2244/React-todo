import React from 'react'
var Listtodos=({todolist,deleteHandler})=>{
    return(
<div>
{todolist.map((todo,index)=>{return <div key={index}>
        <h5>{todo} &nbsp; <button onClick={()=>deleteHandler(index)}>Delete</button></h5>
       </div>
})}




</div>
    )
       
    }    
            
            
        
  




export default Listtodos