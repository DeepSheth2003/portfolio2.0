import React, { useState } from 'react';
import './Component.css';
import Resume from '../assets/DeepOriginResume.pdf';
import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../Firebase/Firebase'


export default function Navbar() {

  const [ check , setCheck ] = useState(false);
  const [ checkSetting , setCheckSetting ] = useState(false);
  const [ darkMode , setDarkMode ] = useState(true);
  const navigate = useNavigate();
  const firebase = useFirebase();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('themeChange');
  }

  // Text Color-scheme :

  const removeColors = () => {
    document.body.classList.remove(
      'toggleGold',
      'toggleLightSeaGreen',
      'toggleSeaGreen',
      'toggleRed',
      'toggleDeepPink',
    );
  }

  const toggleGold = () => {
    removeColors();
    document.body.classList.add('toggleGold');
  }

  const toggleLightSeaGreen = () => {
    removeColors();
    document.body.classList.add('toggleLightSeaGreen');
  }

  const toggleSeaGreen = () => {
    removeColors();
    document.body.classList.add('toggleSeaGreen');
  }

  const toggleRed = () => {
    removeColors();
    document.body.classList.add('toggleRed');
  }

  const toggleDeepPink = () => {
    removeColors();
    document.body.classList.add('toggleDeepPink');
  }

  return (


  <div id={check ? 'menuOn' : 'menuOff'} className="menu">
    <div className="settings">
      <div className="outer-icons">
        <div className="bars-icon">
          <div className="bars-inner-icon" onClick={(e)=>{setCheck(!check)}}>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
        <div className="light-dark">
          <div className="light-dark-inner-icon" onClick={toggleTheme}>
            <i className={darkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
          </div>
        </div>
        <div className="setting-icon">
          <div className="setting-inner-icon" onClick={()=>setCheckSetting(!checkSetting)}>
            <i className="fa-solid fa-gear"></i>
          </div>
        </div>
        <div className={checkSetting ? 'settingOn' : 'settingOff'}>
          <div className="set-gold set" onClick={toggleGold}></div>
          <div className="set-lightseagreen set" onClick={toggleLightSeaGreen}></div>
          <div className="set-seagreen set" onClick={toggleSeaGreen}></div>
          <div className="set-red set" onClick={toggleRed}></div>
          <div className="set-deeppink set" onClick={toggleDeepPink}></div>
        </div>
      </div>
    </div>
    <div className="sidebar">
      <div className="inner-sidebar">
        <div className="navigation-sidebar">
          <p>Navigation</p>
          <div className="sidebar-btn-div"  onClick={()=> navigate('/')}>
            <div className="sidebar-btn">
              <div className="sidebar-icon-home sideIcon"></div>
            </div>
            <div className="sidebar-btn-info">
              <p>Home</p>
              <p>Welcome to my forever work-in-progress!</p>
            </div>
          </div>
          <div className="sidebar-btn-div" onClick={()=> navigate('/projects')}>
            <div className="sidebar-btn">
              <div className="sidebar-icon-project sideIcon"></div>
            </div>
            <div className="sidebar-btn-info">
              <p>Project</p>
              <p>Showcase of my projects</p>
            </div>
          </div>
          <div className="sidebar-btn-div" onClick={()=> navigate('/error')}>
            <div className="sidebar-btn">
              <div className="sidebar-icon-blog sideIcon"></div>
            </div>
            <div className="sidebar-btn-info">
              <p>Blog</p>
              <p>Thoughts, Updates</p>
            </div>
          </div>
          <div className="sidebar-btn-div" onClick={()=> navigate('/about')}>
            <div className="sidebar-btn">
              <div className="sidebar-icon-about sideIcon"></div>
            </div>
            <div className="sidebar-btn-info">
              <p>About</p>
              <p>Learn more about me!</p>
            </div>
          </div>
          <div className="sidebar-btn-div" onClick={()=> navigate('/contact')}>
            <div className="sidebar-btn">
              <div className="sidebar-icon-contact sideIcon"></div>
            </div>
            <div className="sidebar-btn-info">
              <p>Contact</p>
              <p>Let's have a conversation!</p>
            </div>
          </div>
          <div className="sidebar-btn-div" onClick={()=> navigate('/guestbook')}>
            <div className="sidebar-btn">
              <div className="sidebar-icon-guest sideIcon"></div>
            </div>
            <div className="sidebar-btn-info">
              <p>Guestbook</p>
              <p>Leave a message for me</p>
            </div>
          </div>
          <div className="sidebar-btn-div" onClick={()=> navigate('/links')}>
            <div className="sidebar-btn">
              <div className="sidebar-icon-links sideIcon"></div>
            </div>
            <div className="sidebar-btn-info">
              <p>Links</p>
              <p>All my links are here!</p>
            </div>
          </div>
        </div>
        <div className="general-sidebar">
          <p>General</p>
          <div className="sidebar-btn-div" onClick={()=> window.open(Resume)}>
            <div className="sidebar-btn">
              <div className="sidebar-icon-resume sideIcon"></div>
            </div>
            <div className="sidebar-btn-info">
              <p>Resume</p>
              <p>View my resume</p>
            </div>
          </div>
        </div>
        <div className="login-sidebar">
          <p>Account</p>
          {
            firebase.isUserActive ? (
              <>
                <div className="sidebar-btn-div">
                  <div className="sidebar-btn" style={{filter:'invert(1)'}}>
                    <div className="sidebar-icon-sign sideIcon"></div>
                  </div>
                  <div className="sidebar-btn-info">
                    <p>{firebase.isUserActive.displayName}</p>
                    <p className='sidebar-if-user-signout' onClick={()=>{ firebase.userSignOut(); window.location.reload(); }}>Sign Out</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="sidebar-btn-div" onClick={()=> firebase.loginWithGoogle().then(()=> window.location.reload())}>
                  <div className="sidebar-btn">
                    <div className="sidebar-icon-sign sideIcon"></div>
                  </div>
                  <div className="sidebar-btn-info">
                    <p>Sign up</p>
                    <p>Create an account</p>
                  </div>
                </div>
              </>
            )
          }
        </div>
        <div className="social-sidebar">
          <p>Social</p>
          <div className="sidebar-btn-div" onClick={()=> window.open('https://github.com/DeepSheth2003')}>
            <div className="sidebar-btn">
              <div className="sidebar-icon-github sideIcon"></div>
            </div>
            <div className="sidebar-btn-info">
              <p>GitHub</p>
              <p>Visit my GitHub profile</p>
            </div>
          </div>
          <div className="sidebar-btn-div" onClick={()=> window.open('https://www.linkedin.com/in/deep-sheth-378164344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')}>
            <div className="sidebar-btn">
              <div className="sidebar-icon-linkedin sideIcon"></div>
            </div>
            <div className="sidebar-btn-info">
              <p>Linkedin</p>
              <p>Visit my Linkedin profile</p>
            </div>
          </div>
          <div className="sidebar-btn-div" onClick={()=> window.open('https://x.com/Deep0934?t=-YAC3DHZ95oTWTet3z5x_A&s=08')}>
            <div className="sidebar-btn">
              <div className="sidebar-icon-twitter sideIcon"></div>
            </div>
            <div className="sidebar-btn-info">
              <p>Twitter X</p>
              <p>Visit my Twitter profile</p>
            </div>
          </div>
          <div className="sidebar-btn-div" onClick={()=> window.open(firebase.isUserActive ? `mailto:deepsheth56@gmail.com&subject=Hi%20${firebase.isUserActive.displayName}` : `mailto:deepsheth56@gmail.com&subject=Hi%20Deep,`)}>
            <div className="sidebar-btn">
              <div className="sidebar-icon-mail sideIcon"></div>
            </div>
            <div className="sidebar-btn-info">
              <p>Mail</p>
              <p>Write me an Email</p>
            </div>
          </div>
          <div className="sidebar-btn-div" onClick={()=> window.open('https://wa.me/6353304906?text=Hello%20Deep')}>
            <div className="sidebar-btn">
              <div className="sidebar-icon-whatsapp sideIcon"></div>
            </div>
            <div className="sidebar-btn-info">
              <p>Whatsapp</p>
              <p>Let's have a conversation!</p>
            </div>
          </div>
          <div className="sidebar-btn-div" onClick={()=> window.open('https://www.instagram.com/deep_.088?')}>
            <div className="sidebar-btn">
              <div className="sidebar-icon-instagram sideIcon"></div>
            </div>
            <div className="sidebar-btn-info">
              <p>Instagram</p>
              <p>Visit my Instagram profile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
