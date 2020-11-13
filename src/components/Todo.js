import React from 'react';
import { useDispatch } from 'react-redux';
import cx from 'classnames';
import { toggleTodo } from '../redux/actions';
import PropTypes from 'prop-types';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <li className="todo-item" onClick={() => dispatch(toggleTodo(todo.id))}>
        {todo && todo.completed ? "👌" : "👋"}
        <span className={cx(
            "todo-item__text",
            todo && todo.completed && "todo-item__text--completed"
        )}>
            {todo.content}
        </span>
    </li>
  )
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired
}

export default Todo;