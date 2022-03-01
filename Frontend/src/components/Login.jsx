import Logo from './Logo'
// import Button from './Button'
import { Button, Input, Form, Space } from 'antd'
import '../css/login.css'
function Login() {
  const changeToSignUp = () => {
    window.location = '/signup'
  }
  return (
    <div className="login_container">
      <div className="container-left">
        <Space direction='vertical' size={50}>
          <div>
            <Logo text={true} size={'sm'} />
            <div id='login-text'>Login to Your Account</div>
          </div>
          <Form>
            <Form.Item>
              <Input placeholder='Email' className='input' />
            </Form.Item>
            <Form.Item>
              <Input.Password placeholder='Password' className='input' />
            </Form.Item>
            <Form.Item>
              <Button type="primary" className='login-btn'>Login</Button>
            </Form.Item>
          </Form>
        </Space>
      </div>
      <div className="container-right">
        <div className="inner-container">
          <div id='signup-title'>New User?</div>
          <div id='signup-desc'>Sign up to keep track of all your assignments</div>
          <Button type="secondary" className="login-btn" onClick={changeToSignUp}>Sign Up</Button>
        </div>
      </div>
    </div>
  )
}

export default Login