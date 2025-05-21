import { useState } from 'react';
import { useFirebase } from '../Firebase/Firebase'
import { useNavigate } from 'react-router';


export default function Connection({checkConnection , setCheckConnection}) {
    
    const firebase = useFirebase();
    const navigate = useNavigate();
    
    const [messagerName, setMessagerName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [userNotAvailable, setUserNotAvailable] = useState(false);
    const [fieldError, setFieldError] = useState(false);

    const writeMessage = (e) => {
        e.preventDefault();
        try{
            firebase.setMessage(messagerName, email, message, firebase.isUserActive.displayName).then(()=>{
                window.location.reload();
            },()=>{
                setFieldError(!fieldError);
            })
        }
        catch{
            setUserNotAvailable(true);
        }
    }

    const [ isOne, setIsOne ] = useState(true);
    
  return (
    <div className={ checkConnection ? 'connection' : 'non-connection' } onClick={()=> setCheckConnection(false)}>
        <div className="connection-box" onClick={(e) => e.stopPropagation()}>
            <div className="connection-upper">
                <div className="fix-icon">
                    <div className="connect-box-img" onClick={()=> window.open('tel: 6353304906')}>
                        <div className="box-icon-call"></div>
                    </div>
                    <div className="connect-box-img" onClick={()=> window.open('sms: 6353304906?body=Hi%20Deep!')}>
                        <div className="box-icon-message"></div>
                    </div>
                    <div className="connect-box-img" onClick={()=> window.open('https://wa.me/6353304906?text=Hi%20Deep!')}>
                        <div className="box-icon-whatsapp"></div>
                    </div>
                    <div className="connect-box-img" onClick={()=> window.open('https://x.com/Deep0934?t=-YAC3DHZ95oTWTet3z5x_A&s=08')}>
                        <div className="box-icon-twitter"></div>
                    </div>
                </div>
            </div>
            <div className="connection-change">
                <div className="change-btn">
                    <button onClick={()=> setIsOne(true)} className={ isOne ? 'true-click' : ''}>Quick Connect</button>
                    <button onClick={()=> setIsOne(false)} className={ isOne ? '' : 'false-click'}>Send a message</button>
                </div>
            </div>
            
            {
                isOne ? (
                    <>
                        <div className="quick">
                            <div className="quick-divs">
                                <div className="inner-quick-divs">
                                    <div className="quick-google" onClick={()=>{firebase.isUserActive ? '' : firebase.loginWithGoogle();}}>
                                        <div className="first-line-google">
                                            <div className="quick-box-img">
                                                <div className="box-icon-google"></div>
                                            </div>
                                            {
                                                firebase.isUserActive ? <><p>{firebase.isUserActive.email}</p></> : <p>Sign up with Google &nbsp;<i className="fa-solid fa-arrow-right-to-bracket"></i></p>
                                            }
                                        </div>
                                        <div className="second-line-google">
                                            {
                                                firebase.isUserActive ? <p>Hi, <span>{firebase.isUserActive.displayName}</span>! Welcome to my forever wroking place. Explore features and also make connection with me. <span onClick={()=>{firebase.userSignOut(); window.location.reload();}}>Sign out</span></p> : <p>Hello There! Here you can login and explore more features. Also you can make connection with me.</p>
                                            }
                                        </div>
                                    </div>
                                    <div className="quick-both">
                                        <div className="quick-mail" onClick={()=>{window.open(firebase.isUserActive ? `mailto:deepsheth56@gmail.com&subject=Hi%20${firebase.isUserActive.displayName}` : `mailto:deepsheth56@gmail.com&subject=Hi%20Deep,`)}}>
                                            <div className="first-line-both">
                                                <div className="quick-box-img">
                                                    <div className="box-icon-qemail"></div>
                                                </div>
                                                <p>Email</p>
                                            </div>
                                            <div className="second-line-both">
                                                <p>hello@deepsheth.in</p>
                                                <p>Send me an email directly</p>
                                            </div>
                                        </div>
                                        <div className="quick-schedule" onClick={()=> {navigate('/error'); setCheckConnection(!checkConnection)}}>
                                            <div className="first-line-both">
                                                <div className="quick-box-img">
                                                    <div className="box-icon-qschedule"></div>
                                                </div>
                                                <p>Schedule</p>
                                            </div>
                                            <div className="second-line-both">
                                                <p>Book a time slot</p>
                                                <p>Book a call on my calender</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="quick-available">
                                    <div className="quick-available-slot">
                                        <div className="bepper"></div>
                                        <p>Currently available for new opportunities</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="connection-message">
                            <form onSubmit={writeMessage}>
                                <div className="first-inp">
                                    <label>
                                        <p>Name</p>
                                        <input type="text" placeholder='Your name' value={messagerName} className={ fieldError ? (messagerName ? '': 'occurs') : '' } onChange={(e)=> setMessagerName(e.target.value)}/>
                                    </label>
                                    <label>
                                        <p>Email</p>
                                        <input type="email" placeholder='your.email@example.com' value={email} className={ fieldError ? (email ? '' : 'occurs') : '' } onChange={(e)=> setEmail(e.target.value)}/>
                                    </label>
                                </div>
                                <label className='text-label'>
                                    <p>{userNotAvailable ? (firebase.isUserActive ? 'Message' : <span style={{color: 'red'}}>User not found!</span>) : 'Message'} <span>{message ? message.length : '0'}/1000</span></p>
                                    <textarea placeholder='What would you like to discuss?' maxLength={1000} value={message} className={ fieldError ? (message ? '' : 'occurs') : '' } onChange={(e)=> setMessage(e.target.value)}></textarea>
                                </label>
                                <button className='con-form-btn' style={{ backgroundColor: userNotAvailable ? (firebase.isUserActive ? '' : 'red') : '', color: userNotAvailable ? (firebase.isUserActive ? '' : 'white') : '' }}><i className="fa-solid fa-paper-plane"></i> &nbsp; &nbsp; Send Message</button>
                            </form>
                        </div>
                    </>
                )
            }
            
        </div>
    </div>
  )
}
