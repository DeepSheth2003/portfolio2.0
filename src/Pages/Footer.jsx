import React, { useState } from 'react'
import { useFirebase } from '../Firebase/Firebase'

export default function Footer() {
    const firebase = useFirebase();
    
    const [isCopied, setIsCopied] = useState(false);

    const copyMail = () => {
    navigator.clipboard.writeText('deepsheth56@gmail.com')
    .then(()=> setIsCopied(true));
    }

  return (
    <>
    <div className="mid-contact"></div>
    <div className="contact-info">
        <div className="gradiant-border"></div>
        <div className="inner-contact-info">
            <div className="leftInfo">
                <p>Deep Sheth</p>
                <p>Help you create experiences where aesthetics & functionality seamlessly come together.</p>
                <span className='leftInfo-icon'>
                    <i className="fa-brands fa-linkedin-in" onClick={()=> window.open('https://www.linkedin.com/in/deep-sheth-378164344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')}></i>
                    <i className="fa-brands fa-github" onClick={()=> window.open('https://github.com/DeepSheth2003')}></i>
                    <i className="fa-brands fa-twitter" onClick={()=> window.open('https://x.com/Deep0934?t=-YAC3DHZ95oTWTet3z5x_A&s=08')}></i>
                </span>
            </div>
            <div className="rightInfo">
                <p>Feel free to reach out to me for any inquiries or here's my mail.</p>
                <p onClick={()=> {copyMail()} }>{
                    isCopied ? <><i className="fa-solid fa-check"></i> Copied to clipboard!</> : <><i className="fa-regular fa-copy"></i> hello@deepsheth.in</>
                    }</p>
            </div>
        </div>
    </div>
    <div className="gradiant-border"></div>
    <div className="contact-copyright">
        <p>© 2025 Deep sheth. All rights reserved.</p>
    </div>
    </>
  )
}
