import '../css/logo.css'
import Logo_text from '../images/Logo_text.png'
import Logo_no_text from '../images/Logo_no_text.png'
function Logo({text, size}) {
  return (
    <img className = {'logo-' + size } src={text==true?Logo_text:Logo_no_text} alt="" />
  )
}

export default Logo