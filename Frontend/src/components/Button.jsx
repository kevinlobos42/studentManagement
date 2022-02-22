import '../css/button.css'

function Button({color, text}) {
  return (
    <button className={"btn btn-" + (color==="white"?'white':'blue')}>{text}</button>
  )
}

export default Button