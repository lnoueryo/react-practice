import './Example.css'
import List from './components/List'
import Profile from './components/Profile'
import Container from './components/Container'
import { Fragment } from 'react'
const profiles = [
  {name: 'lnoue ryo', age: 31, country: 'Japan'},
  {name: 'lnoue ryl', age: 34, country: 'Philippines'},
]
const Example = () => (
  <Fragment>
    <List />
    <Container>
      <Profile {...profiles[0]}/>
      <Profile {...profiles[1]}/>
    </Container>
  </Fragment>
)

export default Example