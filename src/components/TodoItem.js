import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    
  getStyle = () => {
      return {
          background: '#f4f4f4',
          padding: '10px', 
          borderBottom: '1px #ccc dotted',
          textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title, completed } = this.props.todo;
        return (
          <div style={this.getStyle()}>
              <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
               
                {id} {' '}
                {title} {' '}
                {completed.toString()} {' '}
                
                {this.props.todo.id} {' '}
                {this.props.todo.title } {' '}
                {this.props.todo.completed.toString()}


                // <button  style={btnStyle}>x</button>
                git push --force deis master
              </p>
          </div>
        )
    }
}

  // PropTypes
  TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}


const btnStyle = {
  background: '#125fff',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
