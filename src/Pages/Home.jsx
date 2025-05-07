import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import Resume from '../assets/DeepOriginResume.pdf';
// CSS & Page
import './pages.css';
import Education from './Education';
import Stacks from './Stacks';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
// Component
import Button from '../Component/Button';
import MoveTo from '../Component/MoveTo';
// GSAP
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export default function Home({updateConnection, setCheckConnection}) {

  const firstButton = useRef();
  const secondButton = useRef();
  const topHome = useRef();
  const navigate = useNavigate();

  useGSAP(()=>{
    const timeline = gsap.timeline();
    timeline.from(firstButton.current,{
      x: -100,
      opacity:0,
      duration: 1,
      delay: 0.5
    })

    timeline.from('.actual-text',{
      opacity:0,
      duration: 1,
    })


    timeline.from('.infos-home',{
      opacity:0,
      duration: 1,
    })
    
    timeline.from(secondButton.current,{
      x: -100,
      opacity:0,
      duration: 1,
    })

  });

  useGSAP(()=>{
    gsap.from('.about-info div',{
      x: -100,
      opacity:0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: '.about-info',
        scroller: '.home',
        start: 'top 40%'
      }
    })
  })

  return (
    <div className='home' ref={topHome}>
      <div className="home-info">
        <div className="home-name">
          <div className="version" ref={firstButton}>
            <Button name='Portfolio 2.0'/>
          </div>
          <div className="my-info">
            <div className="text">
              <p className='actual-text'>Hello, My name is <span data-text='&nbsp;Deep&nbsp;Sheth&nbsp;'>&nbsp;Deep&nbsp;Sheth&nbsp;</span></p>
            </div>
            <div className="infos-home">
              <p>A dedicated web developer who loves to create websites that are not only functional but also provide a great user experience. I Can work with both frontend and backend development, working with tools like HTML, CSS, JavaScript, ReactJS, and NodeJS.</p>
            </div>
          </div>
          <div className="version" ref={secondButton}>
            <MoveTo name='Download CV' onClick={()=> window.open(Resume)}/>
          </div>
        </div>
      </div>

      <div className="about-info">
        <div className="about-name">
            <div className="about-text">
              <p>KNOW ABOUT ME</p>
            </div>
            <div className="skill-roller">
              <p>React Developer And &nbsp; a little bit of <span>everything</span></p>
            </div>
            <div className="about-para">
              <p>I’m a passionate and dedicated Front-End Developer with hands-on experience in building responsive and interactive web applications using HTML, CSS, JavaScript, and ReactJS. I also have experience with API integration, Git/GitHub, and deploying projects. I enjoy solving real-world problems with clean, efficient code and continuously learning new technologies to improve my skills. <small>Learn more</small></p>
            </div>
            <div className="about-btn">
              <MoveTo name='More about me' onClick={()=> navigate('/about')}/>
            </div>
        </div>
      </div>

      <Education />

      <div className="mid-level">
        <MoveTo name="Back to top" onClick={() =>  topHome.current.scrollTo({ top: 0, behavior: 'smooth' })}/>
      </div>

      <Project />

      {/** Three Extra Div for Formal Space --- mid-level , mid-adjust , mid-contact --- **/}
      <div className="mid-level">
        <MoveTo name='See more projects' onClick={() => navigate('/projects') }/>
      </div>

      <Stacks />

      <div className="mid-level">
        <div className="banners">
          <div className="back-banner"></div>
          <div className="top-banner">
            <div className="scroll-content">
              <span>Interactive</span>
              <span>Secure</span>
              <span>Reliable</span>
              <span>Engaging</span>
              <span>Accessible</span>
              <span>Responsive</span>
              <span>Dynamic</span>
              <span>Scalable</span>
              <span>Search optimized</span>

              {/* Duplicate content for Continousley loop */}
              <span>Interactive</span>
              <span>Secure</span>
              <span>Reliable</span>
              <span>Engaging</span>
              <span>Accessible</span>
              <span>Responsive</span>
              <span>Dynamic</span>
              <span>Scalable</span>
              <span>Search optimized</span>
            </div>
          </div>
        </div>
      </div>

      {/*** This div mid-adjust is for color adjustment betwwen contact and home page ! */}
      <div className="mid-adjust"></div>
      <div className="mid-contact" style={{height:'5vh'}}></div>
      <Contact  updateConnection={updateConnection} setCheckConnection={setCheckConnection}/>
      <Footer />
      
    </div>
  )
}
