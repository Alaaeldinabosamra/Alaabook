import { Chat, Notifications, Person, Search } from '@mui/icons-material'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className="navbar-left">
            <span className="logo">AlaaBook</span>
        </div>
        <div className="navbar-center">
            <div className='search-bar'>
                <Search className= 'search-icon' />
                <input placeholder="Search for friend ..." className="search-input" />
            </div>
        </div>
        <div className="navbar-right">
            <div className="navbar-links">
                <span className="navbar-link">Home</span>
                <span className="navbar-link">Timeline</span>
            </div>
            <div className="navbar-icons">
                <div className="navbar-icon">
                    <Person />
                    <span className="navbar-badge">1</span>
                </div>
                <div className="navbar-icon">
                    <Chat />
                    <span className="navbar-badge">2</span>
                </div>
                <div className="navbar-icon">
                    <Notifications />
                    <span className="navbar-badge">4</span>
                </div>
            </div>
            <img src="./images/me.jpg" alt="" className='navbar-image' />
        </div>
    </div>
  )
}

export default Navbar