const Button = ({title, count, setCount}) => {
  const plus = () => setCount(count + 1);
  const minus = () => setCount(count - 1);
  return (
    <>
    {title}
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      {count}
    </>
  )
}

export default Button