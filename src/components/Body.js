import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

// styles
import styles from "./Body.module.css" 

// icon
import icon from "../images/menu2.svg"

const Body = () => {
const [toggle, setToggle] = useState(false)
const [counter, setCounter] = useState(100)
    
    const toggleMenu = () => {
        toggle ? setToggle(false) : setToggle(true);
    }

useEffect(() => {
  const interval = setInterval(() => {
      setCounter(counter => counter - 1)
  }, 1000)
}, [])



  return (
    <div className={styles.container}>
        <div id={styles.sidebar} className={toggle ? styles.active : styles.inactive}>
          Hi there!
        </div>
      <input type="image" src={icon} className={styles.sidebarButton} onClick={() => {toggleMenu()}}/>
 
      <h2 className={styles.counter}>Time remaining: {counter}</h2>

    </div>
  )
}

export default Body
