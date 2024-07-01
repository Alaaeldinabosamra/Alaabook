import './online.css'

const Online = ({user}) => {
  return (
    <li className="right-bar-friend">
        <div className="right-bar-profileImg-container">
            <img className="right-bar-profileImg" src={user.profileImage} alt=""  />
            <span className="right-bar-online"></span>
        </div>
        <span className="right-bar-username">{user.username}</span>
    </li>
  )
}

export default Online