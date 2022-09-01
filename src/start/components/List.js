import './List.css'

const List = ({todos, deleteTodo}) => {
  return (
    <div className='container'>
      <h4>List.js</h4>
      {
        todos.map((todo) => {
          return (
            <div key={todo.key}>
              <button onClick={deleteTodo} value={todo.key}>完了</button>
              <span>{todo.value}</span>
            </div>
          )
        })
      }
    </div>
  )
};

export default List;