import logo from './logo.svg';
import './App.css';
import { GoogleLogin } from '@react-oauth/google';


// Bring in the GoogleLogin
// component from the library


function App() {
  return (
      <div className="App">
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
      </div>
  );
}


export default App;
