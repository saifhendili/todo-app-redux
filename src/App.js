import React from 'react';
import Addtodo from './components/addtodo'
import Editlist from './components/editlist'
import './App.css';

function App() {
  return (
    <div className="App">

     <Addtodo />
     <Editlist />
    </div>
  );
}

export default App;
