'use client'
import styles from './page.module.css'
import Backgound from './components/background'
import {useLayoutEffect, useRef} from 'react'
import Livs from './components/livs'
import Hero from './components/hero'
import Info from './components/info'
import Headbar from './components/headbar'

import ReactLoading from 'react-loading';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Application } from '@splinetool/runtime';
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollSmoother);


export default function Home() {
  const spline = useRef<Application>();
  const isSmallWindow = useRef<boolean>(false)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let scroll = ScrollSmoother.create({
        smooth: .3,               
        effects: true,           
        smoothTouch: 0,        
        ignoreMobileResize: true,
        normalizeScroll: true,
      });

      gsap.from("#heading1", {
          opacity: 0,
      })
    
      let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#section2",
            start:"top bottom",
            toggleActions: "play none none reverse",
            
            // markers: true,
            onEnter: self =>{
              let bobastate = isSmallWindow.current ? "boba_bigphone" : "boba_desktop"
              spline.current?.emitEvent("mouseDown", bobastate)
              scroll.paused(true)
              setTimeout(()=>scroll.paused(false), 1000)
            },
            onLeaveBack: self => {
              let bobastate = isSmallWindow.current ? "overview_bigphone" : "overview_desktop"
              spline.current?.emitEvent("mouseDown", bobastate)
              scroll.paused(true)
              setTimeout(()=>scroll.paused(false), 1000)
            }
          }
      }).to("#heading1", {
          opacity: 0,
      }).to("#heading2", {
        opacity: 1,
      })

      let tl2 = gsap.timeline({
          scrollTrigger:{
            trigger: "#section2",
            start:"bottom top",
            toggleActions: "play none none reverse",
            
            // markers: true,
            onEnter: self =>{
              let stafplay = isSmallWindow.current ? "stafplay_bigfone" : "stafplay"
              spline.current?.emitEvent("mouseDown", stafplay)
            },
            onLeaveBack: self => {
              let baseState = isSmallWindow.current ? "stafbase_phone" : "stafbasestate"
              spline.current?.emitEvent("mouseDown", baseState)
            }
          }
        }).to("#heading2", {
        opacity: 0,
      })
        })

    return () =>  {
        ctx.revert();
      }
  }, []);

  
  let onSceneLoad = (e:Application) => {
    spline.current = e;
    let width = window.innerWidth;
    console.log(width)
    if(width < 850){
      isSmallWindow.current = true;
      spline.current?.emitEvent("mouseDown", "overview_bigphone")
      console.log("small phone")
    }
    const loading = document.getElementById("loading");
    loading?.classList.add("displaynone")
    console.log(loading)
  }

  return (
  <main>
    <Backgound onSceneLoad={onSceneLoad}/>
    <Hero />
    <Headbar />
    <div id='loading' className={styles.loading}>
      <div>
        <h2>Ancha Huddinge {'<3'}</h2>
        <h2>Bubble tea & asiatiskt livsmedel</h2>
        <ReactLoading className={styles.loadicon}type={'balls'} color={"#000000"}/>
      </div>
    </div>
    <div id="smooth-wrapper" className={styles.wraper}>
      <div id="smooth-content" className={styles.main}>
        <div className={styles.margin}></div>
        <Livs />
        <div id="playground" className={styles.playground}>
        </div>
        <Info />
      </div>
    </div>
  </main>
  )
}
