import React from 'react'

export default function Task(props) {
    return(
        <div className="flex flex-row justify-center">
        <div className="flex flex-row items-center content-center justify-between w-1/3 p-2">
        <h1>{props.taskName}</h1>
        <button className="bg-red-700 hover:bg-red-800 
           p-2 rounded-md ml-5"
           onClick={()=>props.deleteTask(props.id)}>X</button>
        </div>
        </div>
      )
}
