import React from 'react'

export default function Task(props) {
    return(
        <div className="flex flex-col items-center py-2">
        <div className={props.complete? "flex flex-row gap-x-3 items-center content-center justify-between w-fit py-2 px-8 bg-blue-500" 
        : "flex flex-row gap-x-3 items-center content-center justify-between w-fit py-2 px-8 bg-white"}>
        <h1>{props.taskName}</h1>
        <button className="bg-blue-700 hover:bg-blue-800 
        px-3 py-2 rounded-md ml-3"
        onClick={()=>props.completeTask(props.id)}>Complete</button>
        <button className="bg-red-700 hover:bg-red-800 
           p-2 rounded-md ml-3"
           onClick={()=>props.deleteTask(props.id)}>X</button>
        </div>
        </div>
      )
}
