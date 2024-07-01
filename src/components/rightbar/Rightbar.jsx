import './rightbar.css'
import { Users } from '../../../dummyData'
import Online from '../online/Online'



const Rightbar = ({profile}) => {

  const HomeRightbar = () => {
    return(
      <>
        <div className="birthday-container">
        <img className='birthday-image' src="/images/icons/birthdate.png" alt="" />
        <span className="birthday-text">
          <b>Alaa Abosamra</b> and <b>3 other friends</b> have a birthday today.
        </span>
      </div>
      <img className='right-bar-ad' src="/images/monsterwave.png" alt="" />
      <h4 className='right-bar-title'>Online Friends</h4>
      <ul className="right-bar-friend-list">
        {Users.map(u =>(
          <Online key={u.id} user={u} />
        ))}
      </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return(
      <>
        <h4 className='right-bar-title'>User information</h4>
        <div className="right-bar-info">
          <div className="right-bar-info-item">
            <span className="right-bar-info-key">City: </span>
            <span className="right-bar-info-value">New York</span>
          </div>
          <div className="right-bar-info-item">
            <span className="right-bar-info-key">From: </span>
            <span className="right-bar-info-value">Egypt</span>
          </div>
          <div className="right-bar-info-item">
            <span className="right-bar-info-key">Relationship: </span>
            <span className="right-bar-info-value">Single</span>
          </div>
        </div>

        <h4 className="right-bar-title">User friends</h4>
        <div className="right-bar-followings">
          <div className="right-bar-following">
            <img className="right-bar-following-img" src="/images/ahmed.png" alt=""  />
            <span className="right-bar-following-name">Ahmed Samir</span>
          </div>
          <div className="right-bar-following">
            <img className="right-bar-following-img" src="/images/ahmed.png" alt=""  />
            <span className="right-bar-following-name">Ahmed Samir</span>
          </div>
          <div className="right-bar-following">
            <img className="right-bar-following-img" src="/images/ahmed.png" alt=""  />
            <span className="right-bar-following-name">Ahmed Samir</span>
          </div>
          <div className="right-bar-following">
            <img className="right-bar-following-img" src="/images/ahmed.png" alt=""  />
            <span className="right-bar-following-name">Ahmed Samir</span>
          </div>
          <div className="right-bar-following">
            <img className="right-bar-following-img" src="/images/ahmed.png" alt=""  />
            <span className="right-bar-following-name">Ahmed Samir</span>
          </div>
          <div className="right-bar-following">
            <img className="right-bar-following-img" src="/images/ahmed.png" alt=""  />
            <span className="right-bar-following-name">Ahmed Samir</span>
          </div>
        </div>
      </>
    )
  }


  return (


    <div className='right-bar'>
      <div className="right-bar-wrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default Rightbar