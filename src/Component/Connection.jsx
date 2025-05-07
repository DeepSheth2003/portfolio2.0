import { useState } from 'react';
import { useFirebase } from '../Firebase/Firebase'


export default function Connection({checkConnection , setCheckConnection}) {
    
    const firebase = useFirebase();

    const [isCopied, setIsCopied] = useState(false);
    const [alarm, setAlarm] = useState(true);
    
    const copyMail = () => {
    navigator.clipboard.writeText('deepsheth56@gmail.com')
    .then(()=> setIsCopied(true));
    }

    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    const writeMessage = (e) => {
        e.preventDefault();
        try{
            firebase.setMessage(email, message, firebase.isUserActive.displayName).then(()=>{
                window.location.reload();
            })
        }
        catch{
            setAlarm(false);
        }
    }
    
  return (
    <div className={ checkConnection ? 'connection' : 'non-connection' } onClick={()=> setCheckConnection(false)}>
        <div className="connection-box" onClick={(e) => e.stopPropagation()}>
            <div className="connection-upper-box">
                <div className="upper-box-icon">
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
                <div className="upper-box-button">
                    <div className="box-button-connection" onClick={()=> window.open('https://github.com/DeepSheth2003')}>
                        <i className="fa-brands fa-github"></i>
                        <p>deepsheth2003</p>
                    </div>
                    <div className="box-button-connection" onClick={copyMail}>
                        {
                            isCopied ? <><i className="fa-solid fa-check" style={{color: 'green'}}></i><p style={{color: 'green'}}>Copied to clipboard!</p></> : <><i className="fa-regular fa-copy"></i><p>hello@deepsheth.in</p></>
                        }
                    </div>
                </div>
            </div>
            <div className='box-mid-connection'>
                <p>or send a message</p>
            </div>
            <div className="lower-box">
                <div className="lower-box-button">
                    <div className="down-box-button">
                        {
                            firebase.isUserActive ? <><div className="box-icon-img"><div className="box-user-img"></div></div><p>{firebase.isUserActive.displayName}</p></> : <><p>Sign in for Continue</p> &nbsp; &nbsp; <i className="fa-solid fa-circle-info"></i></>
                        }
                    </div>
                    <>
                        {
                            firebase.isUserActive ? <><div className="down-box-button" onClick={()=> {firebase.userSignOut(); window.location.reload();}}><p>Logout</p><div className="box-icon-img"><div className="box-logout-img"></div></div></div></> : <><div className="down-box-button" onClick={()=> {firebase.loginWithGoogle(); setAlarm(true)}}><p>Sign in</p><div className="box-icon-img"><div className="box-logout-img"></div></div></div></>
                        }
                    </>
                </div>
                <form onSubmit={writeMessage}>
                    <input type="email" placeholder='Your email' value={email} onChange={(e)=>{ setEmail(e.target.value); setAlarm(true) }} required/>
                    <textarea placeholder='Your message' value={message} onChange={(e)=>{ setMessage(e.target.value); setAlarm(true)}} required></textarea>
                    {
                        alarm ? <></> : <small style={{color: 'red'}}><i className='fa-solid fa-circle-info'></i> Sign Up for send message!</small>
                    }
                    <button>Send Message</button>
                </form>
            </div>
        </div>
    </div>
  )
}
