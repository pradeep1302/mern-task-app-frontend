import React from 'react'

export default function TaskForm({createTask, name, handleInputChange, isEditing, updateTask}) {
  return (
    <form className="task-form" onSubmit={isEditing?updateTask:createTask}>
      <input type='text' placeholder='Add a Task' name='name' value={name} onChange={handleInputChange}/>
      <button type='submit'>{isEditing?"Edit":"Add"}</button>
    </form>
  )
}
