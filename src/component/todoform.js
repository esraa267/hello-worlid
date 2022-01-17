import React, {useState} from 'react'
var count=0;
function TodoForm(props){
const [input, setinput]= useState('');
const handelAddBtn = e =>{
    e.preventDefault();
    props.Addtodo({
      id:count++,
    text:input
    });
   setinput('');
}
const handelchange = e =>{
    setinput(e.target.value);
}
return(<>
<form className='todo-form'
     onSubmit={handelAddBtn}>
    <input
    type="text"
    placeholder='Add to do'
     value={input}
    name='text'
    className=""
    onChange={handelchange}
    >
    </input>
<button className='btn btn-primary'>Add</button>
</form>
</>)
}
export default TodoForm