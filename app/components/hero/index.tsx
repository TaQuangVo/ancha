import styles from './style.module.css'
import React from 'react';



const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_content}>
        <div id="heading1">
          <h3>Hej boba lovers :)</h3>
          <p>Kom och ta en titt, <br/>du kommer garanterat tillbaka!</p>
        </div>
        <div className={styles.heading2} id="heading2" style={{opacity: "0"}}>
          <p>Brown sugar, genmaicha, slushy matcha
          <br/>oolong, seylon, blended strawberry
          <br/>Och MYCKET mer...
          <br/>Kom och prova !!!</p>
        </div>
      </div>
    </section >
  )
}

export default Hero
