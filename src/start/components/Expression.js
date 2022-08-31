import './Expression.css'
const Expression = ({ color: c = 'blue'}) => {
  return (
    <div className={`expression-${c}`}>
      <h3>Hello</h3>
    </div>
  )
}

export default Expression