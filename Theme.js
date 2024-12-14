THEME CHANGE FOR A WEBSITE BASIC DESIGN

import React, { useEffect, useState } from 'react'
function Toggle() {
        const[theme, setTheme]=useState(localStorage.getItem('theme'));
        const handleThemeChange=()=>{
            setTheme(theme=='light'?'dark':'light')
            if(theme=='light')
              setTheme('light')
        }
        useEffect(()=>{
          localStorage.setItem("theme",theme)
        },[theme])

        const handleThemedif=()=>{
          setTheme(theme=='dark'?'light':'dark')
          if(theme=='dark')
            setTheme('dark')
        }
        useEffect(()=>{
          localStorage.setItem("theme",theme)
        },[theme])
    
      return (
        <div style={{backgroundColor: theme=='light'?'white':'black',color: theme=='light'?'black':'white', width:'100%',height:'100vh',display:'flex',flexDirection:'column',padding:'40px'}}>
            <button onClick={handleThemeChange} style={{width:'20%',height:'50px',borderRadius:'20px',border:'3px,solid,black'}}>LIGHT</button><br></br><br></br>
            <button onClick={handleThemedif} style={{width:'20%',height:'50px',borderRadius:'20px',border:'3px,solid,black'}}>DARK</button><br></br><br></br>
            <h1><center>Hello All  ! </center></h1>
        </div>
      )
    }
export default Toggle
