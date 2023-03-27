
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth"
import "./component.css"
import { auth } from "../firebase"

const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth,provider)
}



const SignIn = () => {
  return (
    <div className="wrapper">
       <button onClick={googleSignIn}>Sign In</button> 
    </div>
  )
}

export default SignIn