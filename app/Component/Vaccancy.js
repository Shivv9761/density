"use client";
/* eslint-disable @next/next/no-img-element */
import {gsap,Linear, Power3} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useRef,useEffect} from 'react';
import React from 'react'
function Vaccancy() {
    //  const myRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger);
    let text1= useRef(null);
   
    // const executeScroll = () => myRef.current.scrollIntoView()   
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
            // toggleActions:"restart complete reverse reset"
            // Whatever other ScrollTrigger vars you need here
          }

        })

  

        
    },[])

  return (
    <div className='  p-11 mt-28'>
    <p  ref={(el=>{text1=el})} className='text-5xl font-bold'>Open Vacancies</p>
    <div className='mt-12 justify-between gap-10 flex'>
        <div className='bg-[rgb(254,251,236)] box overflow-hidden p-7 w-[400px] h-[260px] rounded-3xl'>
            <h1 className='text-xl font-bold'>Senior Full-Stack Engineer</h1>
            <div className='flex mt-5 gap-4 items-center'>
                <div className='bg-black h-[10px] w-[10px] rounded-full'></div>
                <div className='font-semibold '>Full Time Position</div>
            </div>
            <div className='flex mt-5 gap-4 items-center'>
                <div className='bg-black h-[10px] w-[10px] rounded-full'></div>
                <div className='font-semibold '>Berlin or Remote</div>
            </div>
            <div className='flex mt-5 gap-4 items-center'>
                <div className='bg-black h-[10px] w-[10px] rounded-full'></div>
                <div className='font-semibold '>$65-85k, 0.5-1.50% equity share options</div>
            </div>
            <button className='bg-black mt-12 rounded-2xl p-3 text-white ml-16 '>Start a test</button>
        </div>
        <div className='bg-[rgb(254,251,236)] p-7 w-[400px] overflow-hidden box h-[260px] rounded-3xl'>
            <h1 className='text-xl font-bold'>Senior Full-Stack Engineer</h1>
            <div className='flex mt-5 gap-4 items-center'>
                <div className='bg-black h-[10px] w-[10px] rounded-full'></div>
                <div className='font-semibold '>Full Time Position</div>
            </div>
            <div className='flex mt-5 gap-4 items-center'>
                <div className='bg-black h-[10px] w-[10px] rounded-full'></div>
                <div className='font-semibold '>Berlin or Remote</div>
            </div>
            <div className='flex mt-5 gap-4 items-center'>
                <div className='bg-black h-[10px] w-[10px] rounded-full'></div>
                <div className='font-semibold '>$65-85k, 0.5-1.50% equity share options</div>
            </div>
            <button className='bg-black mt-12 rounded-2xl p-3 text-white ml-16 '>Start a test</button>
        </div>
        <div className='bg-[rgb(254,251,236)] p-7 w-[400px] overflow-hidden h-[260px] box rounded-3xl'>
            <h1 className='text-xl font-bold'>Senior Full-Stack Engineer</h1>
            <div className='flex mt-5 gap-4 items-center'>
                <div className='bg-black h-[10px] w-[10px] rounded-full'></div>
                <div className='font-semibold '>Full Time Position</div>
            </div>
            <div className='flex mt-5 gap-4 items-center'>
                <div className='bg-black h-[10px] w-[10px] rounded-full'></div>
                <div className='font-semibold '>Berlin or Remote</div>
            </div>
            <div className='flex mt-5 gap-4 items-center'>
                <div className='bg-black h-[10px] w-[10px] rounded-full'></div>
                <div className='font-semibold '>$65-85k, 0.5-1.50% equity share options</div>
            </div>
            <button className='bg-black mt-12 rounded-2xl p-3 text-white ml-16 '>Start a test</button>
        </div>
    </div>
    </div>
  )
}

export default Vaccancy