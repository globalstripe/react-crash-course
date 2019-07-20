import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    
  getStyle = () => {
      return {
          background: '#f4f4f4', padding: '10px', borderBottom: '1px #ccc dotted',
          textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    markComplete = (e) => {
      alert("whoa " + this.props.todo.id)
    }

    buttonClicked = (e) => {
      alert("You Clicked the button!" + this.props.todo.id)
    }

    render() {

        const { id, title, completed } = this.props.todo;

        return (
          <div style={this.getStyle()}>
              <p>
                <input type="checkbox" onChange={this.markComplete} /> {' '}
               
                {id} {' '}
                {title} {' '}
                {completed.toString()} {' '}
                
                {this.props.todo.id} {' '}
                {this.props.todo.title } {' '}
                {this.props.todo.completed.toString()}


                <button style={btnStyle} onClick={this.buttonClicked}>X</button>

              </p>
          </div>
        )
    }
}

  // PropTypes
  TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
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
