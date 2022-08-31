const Button = () => {
  const clickHandler = () => alert('Hello')
  return (
    <>
      <button onClick={clickHandler}>クリック</button>
    </>
  )
}

export default Button