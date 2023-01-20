import React from 'react'

export default function Task(props) {
    return(
        <div className='px-2'>
          <div className={props.complete? "flex flex-row items-center justify-between my-2 w-full rounded-md  py-2 px-5 bg-blue-500" 
          : "flex flex-row items-center justify-between rounded-md w-full my-2 py-2 px-5 bg-white"}>
            <div>
              <p>{props.taskName}</p>
            </div>
            <div className='flex flex-row gap-x-5'>
              <button className="bg-blue-700 hover:bg-blue-800 
              px-3 py-2 rounded-md"
              onClick={()=>props.completeTask(props.id)}>Complete</button>
              <button className="bg-red-700 hover:bg-red-800 
                p-2 rounded-md"
                onClick={()=>props.deleteTask(props.id)}>X</button>
            </div>
          </div>
        </div>
      )
}
