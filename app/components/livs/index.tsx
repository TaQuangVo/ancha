import styles from './style.module.css'
import React from 'react';
import Image from 'next/image';



const Livs = () => {

  return (
    <section id="section2" className={styles.container}>
     <div className={styles.wraper}>
      <div className={styles.title}>
        <h2>Hos oss, hittar du ochså andra intresanta saker...</h2>
      </div>
      <div className={styles.body}>
        <div className={styles.section}>
          <div className={styles.content}>
            <h3>Sugen på Snacks?</h3>
            <p>Vi erbjuder olika populära snack <br/>från olika delar av asien.</p>
          </div>
          <div className={styles.images}>
            <div className={styles.image_wraper}>
              <Image src='/chip.jpg' fill={true} alt="Snacks från asien"/>
            </div>
            <div className={styles.image_wraper}>
              <Image src='/mochii.jpg' fill={true} alt="Snacks från asien"/>
            </div>
            <div className={styles.image_wraper}>
              <Image src='/thach.jpg' fill={true} alt="Snacks från asien"/>
            </div>
            <div className={styles.image_wraper}>
              <Image src='/pocky.jpg' fill={true} alt="Snacks från asien"/>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.content}>
            <h3>Törstig?</h3>
            <p>We’ve got your back :)</p>
          </div>
          <div className={styles.images}>
            <div className={styles.image_wraper}>
              <Image src='/drinkbotle.jpg' fill={true} alt="Drinks från asien"/>
            </div>
            <div className={styles.image_wraper}>
              <Image src='/drinks.jpg' fill={true} alt="Drrinks från asien"/>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.content}>
            <h3>Tänker du sätta ihop en <br/>asiastisk måltid?</h3>
            <p>Vi har utvalda råvaror, sås,<br/>salad, tillbehör till dig. <br/>Vi kan tipsa dig vad man kan<br/>göra med dem ;)</p>
          </div>
          <div className={styles.images}>
            <div className={styles.image_wraper}>
              <Image src='/dumpling.jpg' fill={true} alt="Snacks från asien"/>
            </div>
            <div className={styles.image_wraper}>
              <Image src='/letuce.jpg' fill={true} alt="Snacks från asien"/>
            </div>
            <div className={styles.image_wraper}>
              <Image src='/kimchi.jpg' fill={true} alt="Snacks från asien"/>
            </div>
            <div className={styles.image_wraper}>
              <Image src='/source.jpg' fill={true} alt="Snacks från asien"/>
            </div>
            <div className={styles.image_wraper}>
              <Image src='/nudlespicy.jpg' fill={true} alt="Snacks från asien"/>
            </div>
            <div className={styles.image_wraper}>
              <Image src='/kimchibag.jpg' fill={true} alt="Snacks från asien"/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fotter}>
        <p>Och mycket mer, kom och urforska =)</p>
      </div>
     </div>
    </section>
  )
}

export default Livs
