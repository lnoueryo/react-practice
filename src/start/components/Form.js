import { v4 as uuid } from 'uuid'
import { useState } from 'react';
const Form = ({createTodo}) => {
  const [inputVal, setInput] = useState('')
  const addTodo = (e) => {
    e.preventDefault();
    createTodo({key: uuid(), value: inputVal})
    setInput('')
  }
  return (
    <div>
      <form onSubmit={addTodo}>
        <input type="text" value={inputVal} onChange={(e) => setInput(e.target.value)} />
        <button onClick={addTodo}>追加</button>
      </form>
    </div>
  )
};

export default Form;