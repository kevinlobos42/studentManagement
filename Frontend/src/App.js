import './css/app.css'
import 'antd/dist/antd.less'
import Login from './components/Login';
import Main from './components/Main'

function App() {
  let loggedin = false;
  return (
    <div className="App">
      {
        loggedin ?
        <Main />
        :
        <Login />
      }
    </div>
  );
}

export default App;
