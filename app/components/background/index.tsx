'use client'

import styles from './style.module.css'
import Spline from '@splinetool/react-spline';
import { Application } from '@splinetool/runtime';
import React from 'react';


const Backgound = ({onSceneLoad}:{onSceneLoad:(e:Application)=>void}) => {

  return (
    <div className={styles.container}>
      <div className={styles.scene}>
        <Spline onLoad={onSceneLoad} scene="https://prod.spline.design/uu4UtOztYDl1LG23/scene.splinecode" /> 
      </div>
    </div>
  )
}

export default Backgound
