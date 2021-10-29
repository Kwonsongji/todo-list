
import React, { useState} from 'react';
const AddTodoForm = () => {
  return (
    <form >
      <div classname="card card-body">
      <div className="form-group">
      <label>
        Ajouter une tâche
      </label>
      <input className="form-control" type="text" />
      <button type="button" class="btn btn-outline-success">Success</button>
      </div>
      </div>
    </form>
  )
}

export default AddTodoForm;
