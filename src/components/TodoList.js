import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { getTodosByVisibilityFilter } from '../redux/selectors';
// import { VISIBILITY_FILTERS } from "../constants"
import PropTypes from 'prop-types';

const TodoList = ({ todos }) => (
    <ul className="todo-list">
        {todos && todos.length
            ?   todos.map((todo) => {
                    return <Todo key={`todo-${todo.id}`} todo={todo}/>
                })
            :   'No todos, yay!'
        }
    </ul>
)

TodoList.propTypes = {
  todos: PropTypes.array
}

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);