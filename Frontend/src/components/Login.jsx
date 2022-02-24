import Logo from './Logo'
import Button from './Button'
import '../css/login.css'
function Login() {
  const changeToSignUp = ()=>{
    window.location='/signup'
  }
  return (
    <div className="login_container">
      <div className="container-left">
        <Logo text={true} size={'sm'}/>
        <div id = 'login-text'>Login to Your Account</div>
        <input className = "input-login" type="email" placeholder = "Email" />
        <input className = "input-login" type="password" placeholder = "Password" />
        <Button color="blue" text="Login"/>
      </div>
      <div className="container-right">
          <div className="inner-container">
              <div id = 'signup-title'>New User?</div>
              <div id = 'signup-desc'>Sign up to keep track of all your assignments</div>
              <Button color="white" text="Sign Up" onClick={changeToSignUp}/>
          </div>
      </div>
    </div>
  )
}

export default Login