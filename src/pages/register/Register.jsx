import './register.css'

const Register = () => {
  return (
    <div className='register'>
        <div className="register-wrapper">
        <div className="register-left">
            <h3 className='register-logo'>Alaabook</h3>
            <span className="register-desc">Connect with friends and the world around you on Alaabook.</span>
        </div>
        <div className="register-right">
            <div className="register-box">
                <input placeholder='First Name' type="text" className="register-input" />
                <input placeholder='Last Name' type="text" className="register-input" />
                <input placeholder='Email' type="email" className="register-input" />
                <input placeholder='Password' type="password" className="register-input" />
                <input placeholder='Password Confirmation' type="password" className="register-input" />
                <button className="register-button">Sign Up</button>
                <button className="register-register-button">Log into Account</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Register