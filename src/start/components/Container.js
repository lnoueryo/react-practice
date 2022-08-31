import './Expression.css'
const Container = ({color: c = 'blue', children}) => {
  const title = "Expression";
  return (
    <div className={`expression-${c}`}>
      {children}
    </div>
  )
}

export default Container