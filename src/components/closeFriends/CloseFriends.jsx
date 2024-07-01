import './closeFriends.css'

const CloseFriends = ({user}) => {
  return (
    <li className="side-bar-friend">
        <img className='side-bar-friend-image' src={user.profileImage} alt="" />
        <span className="side-bar-friend-name">{user.username}</span>
    </li>
  )
}

export default CloseFriends