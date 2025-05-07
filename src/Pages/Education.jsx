import React, { useRef } from 'react'
// GSAP
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export default function Education() {

    useGSAP(()=>{

        gsap.from('.education-head',{
            opacity:0,
            scrollTrigger: {
              trigger: '.education',
              scroller: '.home',
              start: 'top 15%',
            }
        })

        gsap.from('.studies',{
            opacity:0,
            scrollTrigger: {
              trigger: '.education',
              scroller: '.home',
              start: 'top 15%',
            }
        })

        gsap.from('.content-box',{
          x: -100,
          opacity:0,
          delay: 0.5,
          stagger: 1,
          scrollTrigger: {
            trigger: '.education',
            scroller: '.home',
            start: 'top 5%',
          }
        })
      })

  return (
    <>
        <div className="education">
            <div className="education-head">
                <p>STUDIES</p>
            </div>
            <div className="education-inner">
                <div className="studies">
                    <div className="first-box content-box">
                        <div className="date">
                            <i className="fa-solid fa-calendar-days"></i>
                            <span>2020 - 2023</span>
                        </div>
                        <p className='content-box-p'>Sahjanand College of IT and Management</p>
                        <div className="institute">
                            <p>Graduated in Bachelor of computer applications</p>
                            <p>I have completed my Bachelor of Computer Applications-BCA, gaining essential skills in Website development and Front-end development.</p>
                        </div>
                    </div>
                    <div className="second-box content-box">
                        <div className="date">
                            <i className="fa-solid fa-calendar-days"></i>
                            <span>2018 - 2020</span>
                        </div>
                        <p className='content-box-p'>Gangotri School Gondal</p>
                        <div className="institute">
                            <p>I successfully completed my 11th and 12th grade in the commerce stream, demonstrating dedicated efforts and achieving exceptional results.</p>
                        </div>
                    </div>
                    <div className="third-box content-box">
                        <div className="date">
                            <i className="fa-solid fa-calendar-days"></i>
                            <span>2008 - 2018</span>
                        </div>
                        <p className='content-box-p'>Nirmala Primary School</p>
                        <div className="institute">
                            <p>I have Completed my primary studies at Nirmala Prathmik School.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
