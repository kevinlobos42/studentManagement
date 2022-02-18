import '../css/button.css'

function Button({color}) {
    console.log(color)
  return (
    <button className={"btn btn-" + (color=="white"?'white':'blue')}>Sign Up</button>
  )
}

export default Button