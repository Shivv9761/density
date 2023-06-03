"use client";
/* eslint-disable @next/next/no-img-element */
import {gsap,Linear, Power3} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useRef,useEffect} from 'react';
import React from 'react'

function Meet() {
    const t1 = gsap.timeline()
    let circle=useRef(null);
    let text1=useRef(null);
    let text2=useRef(null);
    let cutie=useRef(null);
    let leaf1=useRef(null);
    let leaf2=useRef(null);
    let smallcircle=useRef(null);
    let orangecircle=useRef(null);
    let flower=useRef(null);
    let rank=useRef(null);

    useEffect(()=>{
        gsap.from(circle,{
            x:90,
            y:390,
            // x:-900,
            // delay:0.4,
            duration:3,
            // ease:"elastic.out(1.2, 0.3)",
            scrollTrigger: {
                trigger: text1,
              
                // markers:true,
                start:"top 80% ",
                start:"bottom 50%",
                toggleActions:"restart complete reverse reset"
                // Whatever other ScrollTrigger vars you need here
              }

        })
        // .to(circle,{
        //         x:-400
        // })
        gsap.from(cutie,{
            scale:0,
            opacity:0,
            rotate:100,
            // delay:0.4,
            duration:3,
            ease:"elastic.out(1.2, 0.3)",
            scrollTrigger: {
                trigger: text1,
              
                // markers:true,
                start:"top 80% ",
                start:"bottom 50%",
                toggleActions:"restart complete reverse reset"
                // Whatever other ScrollTrigger vars you need here
              }

        })
        gsap.from(orangecircle,{
            scale:0,
            // opacity:0,
            rotation:3000,
            // delay:0.4,
            duration:2,
            // ease:"elastic.out(1.2, 0.3)",
            repeat:-1,
            scrollTrigger: {
                trigger: text1,
              
                // markers:true,
                start:"top 80% ",
                start:"bottom 50%",
                toggleActions:"restart complete reverse reset"
                // Whatever other ScrollTrigger vars you need here
              }

        })
        gsap.from(smallcircle,{
            scale:0.5,
            // opacity:0,
            // rotation:3000,
            // delay:0.4,
            duration:1,
            ease:"elastic.out(1.2, 0.3)",
            repeat:-1,
            scrollTrigger: {
                trigger: text1,
              
                // markers:true,
                start:"top 80% ",
                start:"bottom 50%",
                toggleActions:"restart complete reverse reset"
                // Whatever other ScrollTrigger vars you need here
              }

        })
        gsap.from(flower,{
            // scale:0,
            // opacity:0,
            rotation:3000,
            // delay:0.4,
            duration:5,
            // ease:"elastic.out(1.2, 0.3)",
            repeat:-1,
            scrollTrigger: {
                trigger: text1,
              
                // markers:true,
                start:"top 80% ",
                start:"bottom 50%",
                toggleActions:"restart complete reverse reset"
                // Whatever other ScrollTrigger vars you need here
              }

        })
        gsap.from(leaf1,{
            // scale:0,
            // opacity:0,
            rotation:4000,
            // delay:0.4,
            duration:3,
            // ease:"elastic.out(1.2, 0.3)",
            repeat:-1,
            scrollTrigger: {
                trigger: text1,
              
                // markers:true,
                start:"top 80% ",
                start:"bottom 50%",
                toggleActions:"restart complete reverse reset"
                // Whatever other ScrollTrigger vars you need here
              }

        })
        gsap.from(leaf2,{
            scale:0,
            opacity:0,
            rotation:4000,
            delay:0.4,
            duration:3,
            ease:"elastic.out(1.2, 0.3)",
            repeat:-1,
            scrollTrigger: {
                trigger: text1,
              
                // markers:true,
                start:"top 80% ",
                start:"bottom 50%",
                toggleActions:"restart complete reverse reset"
                // Whatever other ScrollTrigger vars you need here
              }

        })
        gsap.from(rank,{
            scale:0,
            opacity:0,
            rotation:2000,
            delay:0.4,
            duration:3,
            ease:"elastic.out(1.2, 0.3)",
            scrollTrigger: {
                trigger: text1,
              
                // markers:true,
                start:"top 80% ",
                start:"bottom 50%",
                toggleActions:"restart complete reverse reset"
                // Whatever other ScrollTrigger vars you need here
              }

        })
     
        gsap.from(text1,{
            duration:1,
            opacity:0,
            x:-100,
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
            x:-100,
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

    })

    return (
        <div className=' overflow-hidden relative rounded-3xl h-[600px] p-14 mt-36 bg-[#FEF6F0]'>
            <img ref={(el=>{flower=el})} className='absolute right-0 top-0' src={"/assets/flower.png"} width={80} />
            <img ref={(el=>{leaf2=el})} className='absolute right-16 top-20' src={"/assets/leaf.png"} width={80} />
            <p ref={(el=>{text1=el})} className='text-xl font-bold' >Built out fustration</p>
            <h1 ref={(el=>{text2=el})} className='text-5xl font-bold'>Meet the ahead app</h1>
            <div className='flex justify-between  gap-10 -mt-10 items-center h-[100%]  '>
                <div className='flex relative w-[50%] -ml-12 mr-10 items-center justify-center'>
                    <div ref={(el=>{circle=el})} className='absolute h-[240px] w-[240px] -left-20 top-[4rem] rounded-full bg-[#FBE8DC]'>

                    </div>
                    <img ref={(el=>{orangecircle=el})} src={"assets/orange circle.png"}  className='absolute left-[23rem] top-[12rem] ' width={70} />
                    <img ref={(el=>{leaf1=el})} src={"assets/leaf.png"}  className='absolute left-[27rem] top-[9rem] ' width={70} />
                    <img ref={(el=>{smallcircle=el})} src={"assets/gola orange.png"} width={30} height={10}  className='absolute left-[30rem] top-[5rem] '  />
                    <div className='h-[250px] relative w-[250px] rounded-full bg-[#F6F6F6] flex justify-center items-center'>
                        <div>
                            <img ref={(el=>{rank=el})} src={"/assets/1 rank.png"} width={60} className='absolute top-0 left-24' />
                        </div>
                        <div className='h-[200px] flex justify-center  items-center  w-[200px] rounded-full bg-white'>

                        <img ref={(el=>{cutie=el})} width={100} className='relative right-2  -rotate-12' src={"assets/Pink cutie.png"} />
                        </div>

                    </div>
                </div>
                <div className='w-[50%] text-2xl'>
                    A personalized pocket coach that provides bite-
                    sized, science-driven tools to boost emotional
                    intelligence.
                    <br/>
                    <br/>

                    Think of it as a pocket cheerleader towards a
                    better, more fulfilling.

                </div>
            </div>
        </div>
    )
}

export default Meet