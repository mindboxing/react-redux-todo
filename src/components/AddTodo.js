import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

function AddTodo(props) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    dispatch(addTodo(input));
    setInput("");
  }

  return (
    <div>
        <input
            onChange={e => setInput(e.target.value)}
            value={input}
        />
        <button className="add-todo" onClick={handleAddTodo}>
            Add Todo
        </button>                
    </div>
  );  
}

export default AddTodo;