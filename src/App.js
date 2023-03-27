import './App.css';
import Navbar from './components /Navbar';

import { auth } from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth'




function App() {
  const [user] =useAuthState(auth)
  // console.log(user)
  return (
    <div className="App">
      <Navbar/>
      {/* chat component */}
    </div>
  );
}

export default App;
