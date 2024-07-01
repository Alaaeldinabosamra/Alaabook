import './login.css'

const Login = () => {
  return (
    <div className='login'>
        <div className="login-wrapper">
        <div className="login-left">
            <h3 className='login-logo'>Alaabook</h3>
            <span className="login-desc">Connect with friends and the world around you on Alaabook.</span>
        </div>
        <div className="login-right">
            <div className="login-box">
                <input placeholder='Email' type="email" className="login-input" />
                <input placeholder='Password' type="password" className="login-input" />
                <button className="login-button">Log In</button>
                <span className="login-forgot">Forgot Password?</span>
                <button className="login-register-button">Create a New Account</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Login