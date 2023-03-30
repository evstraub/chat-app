import React from 'react'
import { useState, useEffect } from 'react';


const style = {
  darkmode: `flex ml-auto p-2`,
  darkbtn: ` p-2 rounded-3xl`,
};

const DarkMode = () => {
  const [theme, setTheme] = useState("light")

  useEffect(() =>{
    if (theme === "dark") {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : 'dark')
  }

return (
  <div className={style.darkmode}>
    <button className={style.darkbtn} onClick={handleThemeSwitch}>🌣</button>
  </div>
);
  
}

export default DarkMode