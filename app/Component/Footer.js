"use client";
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {gsap,Linear, Power3} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useRef,useEffect} from 'react';
import Image from 'next/image'
function Footer() {
    gsap.registerPlugin(ScrollTrigger);
    let logo= useRef(null);


    useEffect(()=>{
        gsap.from(logo,{
            scale:0,
            opacity:0,
            rotate:100,
            // delay:0.4,
            duration:4.2,
            ease:"elastic.out(1.2, 0.3)",
            scrollTrigger: {
              trigger: logo,
            
              // markers:true,
              start:"top 80% ",
              // end:"bottom 50%",
              // toggleActions:"restart complete  "

              toggleActions:"restart complete reverse reset"
              // Whatever other ScrollTrigger vars you need here
            }
  
        })
   
  

        
    },[])
    return (
        <div className='mt-24 '>
            <hr />
            <div className='mt-6 w-full gap-6 flex flex-col items-center justify-center'>
                <img  ref={(el=>{logo=el})} src={"/assets/header.jpg"} width={80} />
                <p className='mt-3 text-3xl font-bold text-[#6448D6]'>ahead</p>
                <div className='flex gap-8'>
                    <div className='flex items-center justify-center'>

                        <img src={"/assets/location.png"} />
                        <div>
                            Auguststrabe 26, 10117 Berlin
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>

                        <img src={"/assets/mail.png"} />
                        <div>
                            hi@ahead-app.com
                        </div>
                    </div>
                </div>
                <Image className='' height={100} width={150} src={'/assets/Apple.png'}/>
                <p>© 2022 Ahead app. All Right reserved</p>
            </div>
        </div>
    )
}

export default Footer