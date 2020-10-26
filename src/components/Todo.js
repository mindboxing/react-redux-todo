import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { toggleTodo } from '../redux/actions';
import PropTypes from 'prop-types';

const Todo = ({ todo, toggleTodo }) => (
    <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
        {todo && todo.completed ? "👌" : "👋"}
        <span className={cx(
            "todo-item__text",
            todo && todo.completed && "todo-item__text--completed"
        )}>
            {todo.content}
        </span>
    </li>
);

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default connect(
    null,
    { toggleTodo }
)(Todo);