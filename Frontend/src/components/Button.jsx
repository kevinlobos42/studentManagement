import '../css/button.css'

function Button({color, text, onClick}) {
  return (
    <button className={"btn btn-" + (color==="white"?'white':'blue')} onClick={onClick}>{text}</button>
  )
}

export default Button