import Todo from '../Todo';
//import AddTodo from '../AddTodo';
import AddTodoForm from './src/components/AddTodoForm/index.js';
import './index.css';
import React from 'react';

function App() {
  return (
    <div  className="App" >
       <header className="App-header"> 
        < Todo />
       {/* <AddTodoForm/>  */}
       </header> 
    </div>
  );
}

export default App;
