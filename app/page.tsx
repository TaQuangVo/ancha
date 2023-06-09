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
  const loadingRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // let scroll = ScrollSmoother.create({
      //   smooth: 1,               
      //   effects: true,           
      //   ignoreMobileResize: false,
      //   normalizeScroll: true,
      // });
      // scroll.paused(true)

      gsap.from("#heading1", {
          opacity: 0,
      })
    // 
    //   let tl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: "#section2",
    //         start:"top bottom",
    //         toggleActions: "play none none reverse",
    //         
    //         // markers: true,
    //         onEnter: self =>{
    //           let bobastate = isSmallWindow.current ? "boba_bigphone" : "boba_desktop"
    //           spline.current?.emitEvent("mouseDown", bobastate)
    //           scroll.paused(true)
    //           setTimeout(()=>scroll.paused(false), 1500)
    //         },
    //         onLeaveBack: self => {
    //           let bobastate = isSmallWindow.current ? "overview_bigphone" : "overview_desktop"
    //           spline.current?.emitEvent("mouseDown", bobastate)
    //           scroll.paused(true)
    //           setTimeout(()=>scroll.paused(false), 1500)
    //         }
    //       }
    //   }).to("#heading1", {
    //       opacity: 0,
    //   }).to("#heading2", {
    //     opacity: 1,
    //   })

      gsap.timeline({
        scrollTrigger: {
            trigger: "#margin",
            start:"top top",
            end:"bottom bottom",
            // toggleActions: "play none none reverse",
            scrub: true,
            
            // markers: true,
            onEnter: self =>{
              let bobastate = isSmallWindow.current ? "boba_bigphone" : "boba_desktop"
              spline.current?.emitEvent("mouseDown", bobastate)
              // scroll.paused(true)
              // setTimeout(()=>scroll.paused(false), 1500)
            },
            onLeaveBack: self => {
              let bobastate = isSmallWindow.current ? "overview_bigphone" : "overview_desktop"
              spline.current?.emitEvent("mouseDown", bobastate)
              // scroll.paused(true)
              // setTimeout(()=>scroll.paused(false), 1500)
            }
          }
      }).to("#heading1", {
          opacity: 0,
          ease: "none",
          y: "-60%",
          duration: 1
        }).from("#heading2", {
          opacity: 0,
          ease: "power2.out",
          y: "60%",
          duration: 1
        },0.5)
        .to("#heading2", {
          opacity: 0,
          ease: "power2.in",
          y: "-60%",
          duration: 1
        },1.5)


      let tl2 = gsap.timeline({
          scrollTrigger:{
            trigger: "#section2",
            start:"bottom top",
            toggleActions: "play none none reverse",
            
            // markers: true,
            onEnter: self =>{
              let stafplay = isSmallWindow.current ? "stafplay_bigfone" : "stafplay"
              spline.current?.emitEvent("mouseDown", stafplay)
              loadingRef.current?.classList.add("noPointerEvent")
            },
            onLeaveBack: self => {
              let baseState = isSmallWindow.current ? "stafbase_phone" : "stafbasestate"
              spline.current?.emitEvent("mouseDown", baseState)
              loadingRef.current?.classList.remove("noPointerEvent")
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
    if(width < 850){
      isSmallWindow.current = true;
      spline.current?.emitEvent("mouseDown", "overview_bigphone")
    }
    const loading = document.getElementById("loading");
    loading?.classList.add("displaynone")
    document.body.classList.remove("noScroll")
  }

  return (
  <main>
    <Backgound onSceneLoad={onSceneLoad}/>
    <Hero />
    <Headbar />
    <div id='loading' className={styles.loading} ref = {loadingRef}>
      <div>
        <h2>Ancha Huddinge {'<3'}</h2>
        <h2>Bubble tea & asiatiskt livsmedel</h2>
        <ReactLoading className={styles.loadicon}type={'balls'} color={"#000000"}/>
      </div> 
    </div>
    <div id="smooth-wrapper" className={styles.wraper}>
      <div id="smooth-content" className={styles.main}>
        <div className={styles.padding}></div>
        <div id="margin" className={styles.margin}></div>
        <Livs />
        <div id="playground" className={styles.playground}>
        </div>
        <Info />
      </div>
    </div>
  </main>
  )
}
