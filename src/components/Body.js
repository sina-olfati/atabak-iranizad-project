import React from 'react'
import { useState } from 'react'

// styles
import styles from "./components.module.css" 

// icon
import icon from "../images/menu2.svg"

const Body = () => {
const [toggle, setToggle] = useState(false)
    
    const toggleMenu = () => {
        toggle ? setToggle(false) : setToggle(true);
    }

  return (
    <div>
        <div id={styles.sidebar} className={toggle ? styles.active : styles.inactive}>
            Hi there!
        </div>


      <input type="image" src={icon} className={styles.sidebarButton} onClick={() => {toggleMenu()}}/>
    </div>
  )
}

export default Body
