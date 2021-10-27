
import React, { useState} from 'react';
const AddTodoForm = () => {
  return (
    <form >
      <div className="form-group">
      <label>
        Ajouter une tâche
      </label>
      <input className="form-control" type="text" />
      <input className="btn btn-sucess"type="submit"/>
      </div>
    </form>
  )
}

export default AddTodoForm;
