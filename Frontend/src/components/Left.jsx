import '../css/left.css'
import Logo from './Logo'
import Button from './Button'

function Left() {
  return (
    <div className="container-left">
      <Logo text={true} size={'md'}/>
      <div id = 'login-text'>Login to Your Account</div>
      <input className = "input-login" type="email" placeholder = "Email" />
      <input className = "input-login" type="password" placeholder = "Password" />
      <Button color="blue" text="Login"/>
    </div>
  )
}

export default Left