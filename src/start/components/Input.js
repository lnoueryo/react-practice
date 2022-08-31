import { useState } from "react";
const Input = () => {
    let [val, setFunc] = useState()
    const input = (e) => setFunc(e.target.value)
    return (
      <>
        <input type="text" onChange={input} />
        {val}
      </>
    )
  }
  export default Input