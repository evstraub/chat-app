import './App.css';
import Navbar from './components /Navbar';
import Chat from './components /Chat';
import { auth } from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth'




function App() {
  const [user] =useAuthState(auth)
  // console.log(user)
  return (
    <div className="app-container">
      <section className='section-container'>
        <Navbar />
        <Chat />
      </section>
    </div>
  );
}

export default App;
