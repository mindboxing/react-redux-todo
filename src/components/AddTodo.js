import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';
import PropTypes from 'prop-types';


function AddTodo(props) {
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    props.addTodo(input);
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

AddTodo.propTypes = {
    addTodo: PropTypes.func
}

export default connect(
    null, 
    { addTodo }
)(AddTodo);