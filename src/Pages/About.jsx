import React from 'react'
import Contact from './Contact'
import BackTo from '../Component/BackTo'
import { useNavigate } from 'react-router-dom'

export default function About({updateConnection, setCheckConnection}) {
    const navigate = useNavigate();
  return (
    <>
        <div className='about-me'>
            <div className="big-inner-about-me">
                <div className="inner-about-me">
                    <p>MORE ABOUT ME</p>
                    <p>Hi there! I'm <span>Deep</span></p>
                    <p>
                        I'm Deep Sheth, a proactive React developer passionate about creating dynamic web experiences. From frontend to backend, I thrive on solving complex problems with clean, efficient code. React is my strongest area, along with HTML, CSS, and JavaScript, and I'm always eager to learn more.
                        <span>When I'm Away from the screen, I'm exploring new ideas and staying curious. Life is all about balance, and I love to accept every part of it.</span>
                        <span className='bruceLee'>
                            <span>Knowing is not enough! We must apply,</span>
                            <span>Willing is not enough! We must do.</span>
                        </span>
                    </p>
                    <span className='a-span-i'>
                        <i className="fa-brands fa-linkedin-in" onClick={()=> window.open('https://www.linkedin.com/in/deep-sheth-378164344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')}></i>
                        <i className="fa-brands fa-github" onClick={()=> window.open('https://github.com/DeepSheth2003')}></i>
                        <i className="fa-brands fa-twitter" onClick={()=> window.open('https://x.com/Deep0934?t=-YAC3DHZ95oTWTet3z5x_A&s=08')}></i>
                    </span>
                </div>
            </div>
        </div>
        <div className="mid-contact" style={{height: '30vh', display:'flex', alignItems:'center', justifyContent:'center', gap:'50px'}}>
            <BackTo name='Go Back' onClick={()=> window.history.back()}/>
            <BackTo name='Back to home' onClick={()=> navigate('/')}/>
        </div>
        <Contact updateConnection={updateConnection} setCheckConnection={setCheckConnection}/>
    </>
  )
}
