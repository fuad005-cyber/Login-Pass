import { useState } from 'react';
import LoginForm from './Components/LoginForm/LoginForm';

function App() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [loginDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [loginError, setLoginError] = useState('İstifadəçi adı boş ola bilməz')
  const [passwordError, setPasswordError] = useState('Şifrə boş ola bilməz')
  return (
    <div >
      <LoginForm />
    </div>
  );
}

export default App;
