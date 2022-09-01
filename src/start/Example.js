import './Example.css'
import Button from './components/Button'
import { useState } from 'react';
const Example = () => {
  const [toggle, setToggle] = useState(true);
  let [countA, setFuncA] = useState(0)
  let [countB, setFuncB] = useState(0)
  const toggleComponent = () => {
    setToggle(prev => !prev)
  }
  return (
    <>
      <button onClick={toggleComponent}>toggle</button>
      {toggle ? <Button key="A" title="A" count={countA} setCount={setFuncA} /> : <Button key="B" title="B" count={countB} setCount={setFuncB} />}
    </>
  )
}

export default Example