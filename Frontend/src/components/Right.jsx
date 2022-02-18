import '../css/right.css'
import '../images/circle.png'
import { Typography, Divider } from 'antd';
import Button from './Button';

const { Title, Paragraph, Text, Link } = Typography;

function Right() {
  return (
    <div className="container-right">
        <div className="inner-container">
            <div id = 'signup-title'>New User?</div>
            <div id = 'signup-desc'>Sign up to keep track of all your assignments</div>
            <Button color="white"/>
        </div>
    </div>
  )
}

export default Right