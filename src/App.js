import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import  applicationStore  from './redux/store';
import { LoginPage } from './pages/authentication/LoginPage';

function App() {
  return (
    <Provider store={ applicationStore() }>
      <LoginPage></LoginPage>
    </Provider>
  );
}

export default App;
