import './Example.css'
import List from './components/List'
import Form from './components/Form'
import { v4 as uuid } from 'uuid'
import { useState } from 'react';
const Example = () => {
  const todoList = [
    {key: uuid(), value: '店予約する'},
    {key: uuid(), value: '卵買う'},
    {key: uuid(), value: '郵便出す'},
  ]
  const [todos, setTodo] = useState(todoList)
  const deleteTodo = (e) => {
    const newTodos = todos.filter((todo) => {
      return todo.key != e.target.value;
    })
    setTodo(newTodos)
  }
  const createTodo = (todo) => {
    setTodo([...todos, todo])
  }
  return (
    <div className='container'>
      <h4>Todo.js</h4>
      <h2 className='title'>Remainder</h2>
      <List todos={todos} deleteTodo={deleteTodo} />
      <Form createTodo={createTodo} />
    </div>
  )
}

export default Example