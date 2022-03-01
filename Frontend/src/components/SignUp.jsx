import Logo from './Logo'
// import Button from './Button'
import '../css/login.css'
import { Button, Input, Form, Space } from 'antd'
function SignUp() {
  const changeToLogin = () => {
    window.location = '/login'
  }
  return (
    <div className="login_container">
      <div className="container-left">
        <Space direction='vertical' space={50}>
          <div>
            <Logo text={true} size={'sm'} />
            <div id='login-text'>Sign Up For An Account</div>
          </div>
          <Form>
            <Form.Item>
              <Input placeholder='Email' className="input" />
            </Form.Item>
            <Form.Item>
              <Input.Password placeholder='Password' className="input" />
            </Form.Item>
            <Form.Item>
              <Input.Password placeholder='Confirm Password' className="input" />
            </Form.Item>
            <Form.Item>
              <Input.Group>
                <Input placeholder='(123)' className="input input-phone-area" />
                <Input placeholder='456-7890' className="input input-phone" />
              </Input.Group>
            </Form.Item>
            <Form.Item>
              <Button type="primary" className='login-btn'>Sign Up</Button>
            </Form.Item>
          </Form>
        </Space>
      </div>
      <div className="container-right">
        <div className="inner-container">
          <div id='signup-title'>Existing User?</div>
          <div id='signup-desc'>Click the button below to sign into your account</div>
          <Button type="secondary" className="login-btn" onClick={changeToLogin}>
            Login
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SignUp