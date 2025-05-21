import React, { useState } from 'react'
import Contact from './Contact'
import { useNavigate } from 'react-router';
import BackTo from '../Component/BackTo';

export default function Links({updateConnection, setCheckConnection}) {
  const [isCopied, setIsCopied] = useState(false);

  const copyMail = () => {
    navigator.clipboard.writeText('deepsheth56@gmail.com')
    .then(()=> setIsCopied(true));
  }

  return (
    <>
      <div className='links-container'>
        <div className="inner-links">
          <div className="links-head">
            <div className="link-logo">
              <div className="links-logo-img"></div>
            </div>
            <div className="links-head-detail">
              <p>Deep Sheth</p>
              <p>Developer | Freelancer | Problem Solver</p>
            </div>
            <div className="links-head-btn">
              <button onClick={()=> window.open('https://deepsheth.netlify.app')}><i className="fa-solid fa-globe" style={{WebkitTextStroke: '0.15px white', color: 'transparent'}}></i>&nbsp; Website</button>
              {
                isCopied ? <button onClick={copyMail} style={{color: 'green'}}><i className="fa-solid fa-check"></i>&nbsp; Copied to clipboard!</button> : <button onClick={copyMail}><i className="fa-regular fa-copy"></i>&nbsp; hello@deepsheth.in</button>
              }
            </div>
          </div>
          <div className="links-body">
            <div className="links-body-div" onClick={()=> window.open('https://www.linkedin.com/in/deep-sheth-378164344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')}>
              <i className="fa-brands fa-linkedin-in"></i>
              <button>LinkedIn</button>
            </div>
            <div className="links-body-div" onClick={()=> window.open('https://t.me/')}>
              <i className="fa-brands fa-telegram"></i>
              <button>Telegram</button>
            </div>
            <div className="links-body-div" onClick={()=> window.open('https://github.com/DeepSheth2003')}>
              <i className="fa-brands fa-github"></i>
              <button>GitHub</button>
            </div>
            <div className="links-body-div" onClick={()=> window.open('https://www.instagram.com/deep_.088?')}>
              <i className="fa-brands fa-instagram"></i>
              <button>Instagram</button>
            </div>
            <div className="links-body-div" onClick={()=> window.open('https://wa.me/6353304906?text=Hello%20Deep')}>
              <i className="fa-brands fa-whatsapp"></i>
              <button>Whatsapp</button>
            </div>
            <div className="links-body-div" onClick={()=> window.open('https://x.com/Deep0934?t=-YAC3DHZ95oTWTet3z5x_A&s=08')}>
              <i className="fa-brands fa-twitter"></i>
              <button>X (Twitter)</button>
            </div>
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
