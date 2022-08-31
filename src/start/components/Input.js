import { useState } from "react";
const Input = () => {
    let [val, setFunc] = useState()
    return (
      <>
        <input type="text" onChange={(e) => {
            setFunc(e.target.value)
        }} />
        {val}
      </>
    )
  }
  export default Input