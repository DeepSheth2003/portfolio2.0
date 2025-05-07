import React, { useState } from 'react'
import ProjectName from './ProjectName'
import ProjectDetail from './ProjectDetail'

// GSAP
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export default function Project() {

  const [ gettingData , setGettingData ] = useState(null);
  // First of all : aopde ahiya thi ak setState() function projectName component ma mokliae chhiye... have tya jay ne vacho....
  // tyar bad te setState() function ma set thyela data ae ProjectDetail component ne mokli devama avya chhe...!

  useGSAP(()=>{
    gsap.from('.project-head',{
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.project-head',
        scroller: '.home',
        start: 'top 50%',
      }
    });

    gsap.from('.project-names',{
      x: -300,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.project',
        scroller: '.home',
        start: 'top 40%',
      }
    });
    
    gsap.from('.project-details',{
      x: 300,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.project',
        scroller: '.home',
        start: 'top 40%',
      }
    });
  });

  return (
    <>
      <div className="project-head"><p>PROJECTS</p></div>
      <div className='project'>
        <div className="project-names">
          <ProjectName projectData={setGettingData}/>
        </div>
        <div className="project-details">
          <ProjectDetail sendData={gettingData} />
        </div>
      </div>
    </>
  )
}
