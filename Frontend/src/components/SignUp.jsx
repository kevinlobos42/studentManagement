import Logo from './Logo'
import Button from './Button'
import '../css/login.css'
function SignUp() {
  const changeToLogin = ()=>{
    window.location='/login'
  }
  return (
    <div className="login_container">
      <div className="container-left">
        <Logo text={true} size={'sm'}/>
        <div id = 'login-text'>Sign Up For An Account</div>
        <input className = "input-login" type="email" placeholder = "Email" />
        <input className = "input-login" type="password" placeholder = "Password" />
        <input className = "input-login" type="password" placeholder = "Confirm Password" />
        <input className = "input-login" type="tel" placeholder = "Phone Number" />
        <Button color="blue" text="Sign Up"/>
      </div>
      <div className="container-right">
          <div className="inner-container">
              <div id = 'signup-title'>Existing User?</div>
              <div id = 'signup-desc'>Click the button below to sign into your account</div>
              <Button color="white" text="Login" onClick={changeToLogin}/>
          </div>
      </div>
    </div>
  )
}

export default SignUp