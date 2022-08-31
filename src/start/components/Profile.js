import './Expression.css'
const Profile = ({ name, age, country}) => {
  return (
    <div className="profile">
      <h3>{ name }</h3>
      <h3>{ age }</h3>
      <h3>{ country }</h3>
    </div>
  )
}

export default Profile