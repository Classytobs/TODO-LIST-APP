import {useState, useEffect} from "react";
import Task from "./Component/Task";



function App() {

      const [newTask, setNewTask]=useState("")
      const [todoList, setTodoList]=useState([])

      const handleChange = (e) => {
        setNewTask(e.target.value)
      }
      
      const addTask = (e) => {
        e.preventDefault();
        const task ={
          id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
          taskName: newTask,
          complete: false
        };
        newTask === ''? alert ('Please enter a task') :
        setTodoList([...todoList, task]) 

        setNewTask("")

      }

      const completeTask = (id) => {
       setTodoList(todoList.map((task)=> {
          if(task.id === id){
          return {...task, complete:true}}
          else {return task;}
        }))
      }

      const deleteTask = (id) => {
        const newTodoList = todoList.filter((task) => {
             return task.id !== id
             } 
        )
        setTodoList(newTodoList);
        
      }

      useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todoList))
      }, [todoList])


  return (
    <div className="flex flex-col bg-slate-50 w-screen overflow-x-hidden">
      <div className="text-4xl bg-slate-500 p-8 flex items-center justify-center content-center text-wrap font-serif">
        <h1>
            My Task List 
        </h1>
      </div>

      <div>
      <form  className='bg-slate-200 flex flex-row justify-center items-center 
      content-center p-3 font-serif' onSubmit={addTask}>
        <input type='text' className='px-3 py-2 bg-white border-solid border-2 
        border-slate-300 text-sm shadow-sm  
        focus:outline-none focus:border-sky-500 text-black' placeholder="Add a new task"
        onChange={handleChange} value={newTask}/>
        <button type='submit' className="bg-blue-700 hover:bg-blue-800 
        px-3 py-2 rounded-md">Add task</button>
      </form>
      </div>

      <div>
        {todoList.map((task)=>{
         return(
          <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask}
          completeTask={completeTask} complete={task.complete}/>
         )
        })}
      </div>
    </div>
  );
}

export default App;
