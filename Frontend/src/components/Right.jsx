import '../css/right.css'
import Button from './Button';

function Right() {
  return (
    <div className="container-right">
        <div className="inner-container">
            <div id = 'signup-title'>New User?</div>
            <div id = 'signup-desc'>Sign up to keep track of all your assignments</div>
            <Button color="white" text="Sign Up"/>
        </div>
    </div>
  )
}

export default Right