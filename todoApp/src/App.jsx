import React from 'react';
import './App.css'
import TodoItem from './Components/TodoItem';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      input: "",
      todoList : []
    }
  }

  inputChange = (e) => {
    // Changing the value of input in state
    this.setState({
      input: e.target.value
    })
  }

  formSubmit = (e) => {
    e.preventDefault()
    if(this.state.input.length > 0){
    this.setState({
      input: "",
      todoList: [...this.state.todoList, this.state.input]
    })}
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  updateItem = (newItem, index) => {
    // copy of my to do list
    let arr = this.state.todoList;

    // to do list updation
    arr.splice(index, 1, newItem);

    // updating the state
    this.setState({
      todoList: arr
    })
  }

  deleteItem = (index) => {
    // copy of my to do list
    let arr = this.state.todoList;

    // to do list updation
    arr.splice(index, 1);

    // updating the state
    this.setState({
      todoList: arr
    })
  }

  render() {

    let buttonStyle = {
      backgroundColor: 'red',
      color: 'white',
      border: 'none',
      padding: '5px 10px',
      borderRadius: '5px',
      cursor: 'pointer'
    }

    return(
      <>
        <h1>To Do List</h1>
        <form onSubmit={this.formSubmit}>
          <input type='text' onChange={this.inputChange} value={this.state.input}/>
          <button>Add</button>
        </form>
        <p>My Input : {this.state.input}</p>

        <div className='todoList'>
          <h2>LIST😊👍</h2>
          {this.state.todoList.map((e,i) => {
            return (
              <TodoItem e ={e} i = {i} deleteItem={this.deleteItem} updateItem={this.updateItem} buttonStyle={buttonStyle} key={i}/>)
              
            
          })}
        </div>
      </>
    )
  }
}
