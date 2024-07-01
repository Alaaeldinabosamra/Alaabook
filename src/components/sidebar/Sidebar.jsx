import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from '@mui/icons-material'
import { Users } from '../../../dummyData'
import './sidebar.css'
import CloseFriends from '../closeFriends/CloseFriends'

const Sidebar = () => {
  return (
    <div className='side-bar'>
      <div className="side-bar-wrapper">
        <ul className="side-bar-list">
          <li className="side-bar-item">
            <RssFeed className='side-bar-icon' />
            <span className="side-bar-text">Feed</span>
          </li>
          <li className="side-bar-item">
            <Chat className='side-bar-icon' />
            <span className="side-bar-text">Chats</span>
          </li>
          <li className="side-bar-item">
            <PlayCircleFilledOutlined className='side-bar-icon' />
            <span className="side-bar-text">Videos</span>
          </li>
          <li className="side-bar-item">
            <Group className='side-bar-icon' />
            <span className="side-bar-text">Groups</span>
          </li>
          <li className="side-bar-item">
            <Bookmark className='side-bar-icon' />
            <span className="side-bar-text">Bookmarks</span>
          </li>
          <li className="side-bar-item">
            <HelpOutline className='side-bar-icon' />
            <span className="side-bar-text">Questions</span>
          </li>
          <li className="side-bar-item">
            <WorkOutline className='side-bar-icon' />
            <span className="side-bar-text">Jobs</span>
          </li>
          <li className="side-bar-item">
            <Event className='side-bar-icon' />
            <span className="side-bar-text">Events</span>
          </li>
          <li className="side-bar-item">
            <School className='side-bar-icon' />
            <span className="side-bar-text">Courses</span>
          </li>
        </ul>
        <button className="side-bar-button">Show More</button>
        <hr className='side-bar-hr' />
        <ul className='side-bar-friend-list'>
          {Users.map(u => (
            <CloseFriends key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar