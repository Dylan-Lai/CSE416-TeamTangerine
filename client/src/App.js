import logo from './logo.svg';
import './App.css';
import { React } from 'react'
import HomeWrapper from './components/HomeWrapper';
import LoginModal from './components/LoginModal';
import CreateAccountModal from './components/CreateAccountModal';
import ForgotPasswordModal from './components/ForgotPasswordModal';

const App = () => {
  return (
    <div className="App">
      <HomeWrapper/>
      {/* <CreateAccountModal/> */}
    </div>
  );
}

export default App;