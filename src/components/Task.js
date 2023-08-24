import React from 'react'
import {BiSolidEdit, BiCheckDouble, BiSolidTrash} from "react-icons/bi"

export default function Task({task,index,deleteTask,getSingleTask, setToComplete}) {
  return (
    <div className={task.completed?"task completed":"task"}>
      <p>
        <b>{index+1}. </b>
        {task.name}
      </p>
      <div className='task-icons'>
        <BiCheckDouble color='green' onClick={()=>{setToComplete(task)}}/>
        <BiSolidEdit color='purple' onClick={()=>{getSingleTask(task)}}/>
        <BiSolidTrash color='red' onClick={()=>{deleteTask(task._id)}}/>
      </div>
    </div>
  )
}
