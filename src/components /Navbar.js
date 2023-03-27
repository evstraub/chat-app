import './component.css'
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from './SignIn';


const Navbar = () => {
  const [user]=useAuthState(auth)
  console.log(user)
  return (
    <>
      <div className="nav">
        <h1 className="meMessage">meMessage</h1>
        <SignIn />
      </div>
    </>
  );
}

export default Navbar