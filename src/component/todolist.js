import React,{useState} from "react";
import TodoForm from "./todoform";
import Todo from './todo'
var exp = /'^\s'*$/;
function TodoList(){
const[todos, settodos]=useState([]);
 const  Addtodo= todo=>{
     if(!todo.text || exp.test(todo.text) ){
         return
     }
     settodos([todo,...todos]);
     console.log(...todos);
 };
 const removetodo = (id)=>{
const remove =[...todos].filter((todo)=>todo.id!=id);
settodos(remove);
 }
return(<>
<div>
    <h1>What's the plan for Today? </h1>
    <TodoForm Addtodo={Addtodo}/>
    <Todo todos={todos} removetodo={removetodo}/>
</div>

</>)
}
export default TodoList