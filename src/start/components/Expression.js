import './Expression.css'
const Expression = ({ color: c = 'blue'}) => {
  const title = "Expression";
  return (
    <div className={`expression-${c}`}>
      <h3>Hello {title}</h3>
    </div>
  )
}

export default Expression