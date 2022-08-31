import './Expression.css'
const Container = ({color: c = 'blue', children}) => {
  return (
    <div className={`expression-${c}`}>
      {children}
    </div>
  )
}

export default Container