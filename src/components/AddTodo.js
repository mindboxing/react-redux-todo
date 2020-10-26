import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';
import PropTypes from 'prop-types';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: '' };
    }

    updateInput = input => {
        this.setState({ input });
    }

    handleAddTodo = () => {
        this.props.addTodo(this.state.input);
        this.setState({ input: "" });
    }

    render() {
        return (
            <div>
                <input
                    onChange={e => this.updateInput(e.target.value)}
                    value={this.state.input}
                />
                <button className="add-todo" onClick={this.handleAddTodo}>
                    Add Todo
                </button>                
            </div>
        );
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func
}

export default connect(
    null, 
    { addTodo }
)(AddTodo);