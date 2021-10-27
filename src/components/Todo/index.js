import React, { useState } from 'react';

// on importe la fonct. useState puis on la déclare dans le composant funct.
// on passe un tableau d'obj. à useState qui contiendra toutes les tasks
// Les valeurs vont être dans un tableau appelé todos (1er élement)
// on passe le 1er élement contients toutes les tasks
// on ajoute un 2eme élem+(function) qui permettras d'interagir avec le state pour le modifier
const Todo = () => {
  const [ todos, setTodos] = useState([
    {
      id: 1,
      todo: 'acheter du lait'
    },
    {
      id: 2,
      todo: 'acheter du pain '
    },
     {
      id: 3,
      todo: 'acheter du fromage '
    }
  ])
  const myTodos = todos.map(todo => {
    return (
      <li className="list-group-item"key={todo.id}>{todo.todo}</li>
    )
  })
  console.log('todo', todos);
  console.log('nbre d élement du array',todos.length);
  return (
    <div CL>
      <h1 className="text-center">{todos.length} To-do</h1>
      <ul>
        {myTodos}
      </ul>
    </div>
  )
}

export default Todo;
