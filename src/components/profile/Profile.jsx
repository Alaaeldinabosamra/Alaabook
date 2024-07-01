import Feed from '../feed/Feed'
import Navbar from '../navbar/Navbar'
import Rightbar from '../rightbar/Rightbar'
import Sidebar from '../sidebar/Sidebar'
import './profile.css'

const Profile = () => {
  return (
    <div>
        <Navbar /> 
        <div className="profile">
            <Sidebar />
            <div className="profile-right">
                <div className="profile-right-top">
                    <div className="profile-cover">
                        <img className='profile-cover-image' src="/images/post1.jpg" alt="" />
                        <img className='profile-user-image' src="/images/me.jpg" alt="" />
                    </div>
                    <div className="profile-info">
                        <h4 className='profile-info-name'>Alaa Eldin</h4>
                        <h4 className='profile-info-desc'>software developer</h4>
                    </div>
                </div>
                <div className="profile-right-bottom">
                    <Feed />
                    <Rightbar profile />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile