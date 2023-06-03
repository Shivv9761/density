"use client";
/* eslint-disable @next/next/no-img-element */
import {gsap,Linear, Power3} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useRef,useEffect} from 'react';
import React from 'react'

function Sign() {

    gsap.registerPlugin(ScrollTrigger);
    let text1= useRef(null);
    let text2= useRef(null);
    let button=useRef(null);


    useEffect(()=>{
        gsap.from(text1,{
          duration:1,
          opacity:0,
          y:-50,
          ease:"Power3.out",
          scrollTrigger: {
            trigger: text1,
          
            // markers:true,
            start:"top 80% ",
            start:"bottom 50%",
            toggleActions:"restart complete reverse reset"
            // Whatever other ScrollTrigger vars you need here
          }

        })
        gsap.from(text2,{
          duration:1,
          opacity:0,
          y:-50,
          ease:"Power3.out",
          scrollTrigger: {
            trigger: text2,
          
            // markers:true,
            start:"top 80% ",
            start:"bottom 50%",
            toggleActions:"restart complete reverse reset"
            // Whatever other ScrollTrigger vars you need here
          }

        })

        gsap.from(button,{
            scale:0,
            opacity:0,
            rotate:100,
            // delay:0.4,
            duration:3.2,
            ease:"elastic.out(1.2, 0.3)",
            scrollTrigger: {
              trigger: text1,
            
              // markers:true,
              start:"top 80% ",
              // end:"bottom 50%",
              toggleActions:"restart complete  "
              // Whatever other ScrollTrigger vars you need here
            }
  
        })
  

        
    },[])


    return (
        <div className='text-center mt-56'>
            <p className='text-lg font-semibold' >We take privacy seriously</p>
            <h1 ref={(el=>{text1=el})} className='text-4xl mt-2 font-bold'>Before you get started</h1>
            <p  ref={(el=>{text2=el})} className='text-2xl mt-5'>&quot;We won&apos;t share your answers with anyone (and won&apos;t ever tell <br/>
                you which friends said what about you)&quot;
            </p>
            <p className='text-lg inline-block mt-12'>with love,  </p>
            <span className='inline-block'><img src={"/assets/sign.png"} width={150} /> </span>
            <br/>
            <button ref={(el=>{button=el})} className='bg-black mt-8 rounded-2xl p-3 text-white'>Start a test</button>
            <p className='text-sm mt-5'>Take only 5 minutes</p>
        </div>
    )
}

export default Sign