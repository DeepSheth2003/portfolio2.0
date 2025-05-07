import React, { useRef } from 'react'
// GSAP
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Footer from './Footer';
gsap.registerPlugin(ScrollTrigger);

export default function Contact({updateConnection, setCheckConnection}) {

  const firstLine = useRef();
  const secondLine = useRef();

  useGSAP(()=>{
    gsap.from(firstLine.current,{
      x: -500,
      opacity: 0,
      delay: 1,
      duration: 2,
    });
    gsap.from(secondLine.current,{
      x: 500,
      opacity: 0,
      duration: 2,
      delay: 1,
    });
  });

  return (
    <>
      <div className='contact-container'>
        <div className="inner-contact">
            <div className="contact-head">
                <div className="contact-logo">
                    <div className="contact-logo-text"><span>Deep</span></div>
                </div>
                <div className="contact-head-details">
                    <p><span ref={firstLine}>FROM CONCEPT TO <span className='contact-head-span'>CREATION</span></span> <span ref={secondLine}>LET's MAKE IT <span className='contact-head-span'>HAPPEN!</span></span></p>
                </div>
            </div>
            <div className="contact-btn">
                <button onClick={()=> setCheckConnection(!updateConnection)}>Get in Touch <span><i className="fa-solid fa-arrow-right"></i></span></button>
            </div>
            <div className="contact-body">
                <p>I'm available for full-time roles & freelance projects.</p>
                <p>I thrive on crafting dynamic web applications, and delivering seamless user experiences.</p>
            </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}
