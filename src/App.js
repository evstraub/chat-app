import React from "react";
import Navbar from "./components /Navbar";
import Chat from  "./components /Chat.js"
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import DarkMode from "./components /DarkMode";
import './App.css'



function App() {
  const [user] = useAuthState(auth);
  return (
    <div className= "max-w-[728px] mx-auto text-center">
      <section className="flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative ">
        <Navbar />
        <DarkMode />
        {user ? <Chat /> : null}
      </section>
    </div>
  );
}

export default App;
