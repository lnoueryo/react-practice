import { useState } from "react";
const Button = () => {
  let [count, setFunc] = useState(0)
  const plus = () => setFunc(count + 1);
  const minus = () => setFunc(count - 1);
  return (
    <>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      {count}
    </>
  )
}

export default Button