import {useState} from "react";
import Task from "./Component/Task";



function App() {

      const [newTask, setNewTask]=useState("")
      const [todoList, setTodoList]=useState([])

      const handleChange = (e) => {
        setNewTask(e.target.value)
      }
       
      const addTask = () => {
        const task ={
          id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
          taskName: newTask,
        };
        newTask === ''? alert ('Please enter a task') :
        setTodoList([...todoList, task]) 
      }

      const deleteTask = (id) => {
        const newTodoList = todoList.filter((task) => {
             return task.id !== id
             } 
        )
        setTodoList(newTodoList);
        
      }
  return (
    <div className="flex flex-col justify-between">
      <div  className='bg-slate-500 flex flex-row justify-center items-center content-center p-8 font-serif mb-5'>
        <input type='text' className='px-3 py-2 bg-white border-solid border-2 
        border-slate-300 text-sm shadow-sm  
        focus:outline-none focus:border-sky-500 text-black'
        onChange={handleChange}/>
        <button className="bg-blue-700 hover:bg-blue-800 
        px-3 py-2 rounded-md" onClick={addTask}>Add task</button>
      </div>
      <div>
        {todoList.map((task)=>{
         return(
          <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask}/>
         )
        })}
      </div>
    </div>
  );
}

export default App;
