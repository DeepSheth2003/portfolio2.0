import React, { useEffect, useState } from 'react';
import Comments from '../Component/Comments';
import MoveTo from '../Component/MoveTo'
import Contact from './Contact'
import { useFirebase } from '../Firebase/Firebase';
import { useNavigate } from 'react-router';
import BackTo from '../Component/BackTo';
import toast from 'react-hot-toast';

export default function Guest({updateConnection, setCheckConnection}) {

  const firebase = useFirebase();
  const navigate = useNavigate();

  const  logIn = () => {
    firebase.loginWithGoogle().then(()=>{
        toast.success('Log in Successfull',{
            duration: 4000
        })
    })
  }

  const [ inpVal , setInpVal ] = useState(null);

  const [commentData, setCommentData] = useState([])

  const letsComment = (e) => {
    e.preventDefault();
    const promise = firebase.setUpData(inpVal, firebase.isUserActive.displayName, firebase.isUserActive.email);

    toast.promise(promise, {
        loading: 'Posting Comment...',
        success: 'Comment Posted!',
        error: 'Something went wrong!',
    }, {
        success: {
            duration: 4000,
            icon: '🔥'
        }
    })

    promise.then(() => setTimeout(()=> window.location.reload(),3000) );
  }

  useEffect(()=>{
    firebase.getComments().then((snapshot) => {
        if(snapshot) setCommentData(snapshot.docs);
    });
}, [])

  return (
    <>
        <div className='guest'>
            <div className="inner-guest">
                <div className="one-guest">
                    <div className="guest-head">
                        <p>THE GUEST BOOK</p>
                        <p><span>Got a message?</span> I'd love to hear from you!</p>
                        <p>Sign my guestbook and share your idea. You can tell me anything here!</p>
                    </div>
                    <div className="guest-pin">
                        <div className="pin-box">
                            <p><i className="fa-solid fa-map-pin"></i> Pinned</p>
                            <p>Hey there! Thanks for visiting my website. If you have a moment, I'd love to hear your thoughts on my work. Please log in with your account to leave a comment. Thanks!</p>
                        </div>
                        {
                            firebase.isUserActive ? <div className='userID'>
                                <div className="inner-userID">
                                    <p>{firebase.isUserActive.email}</p>
                                    <p onClick={()=> {firebase.userSignOut(); window.location.reload()}}>Sign Out</p>
                                </div>
                            </div> : ''
                        }
                    </div>
                    <div className="guest-login">
                        <div className="login-box">
                            {
                                firebase.isUserActive ? <>
                                    <form onSubmit={letsComment}>
                                        <input type="text" placeholder='Share your thoughts...' value={inpVal} onChange={(e)=> setInpVal(e.target.value) } required /> <MoveTo name='Comment'/>
                                    </form>
                                </> : <><button onClick={logIn} className='login-box-btn'>Login</button><p>to continue leaving a message</p></>
                            }
                        </div>
                    </div>
                </div>
                <div className="second-guest">
                    <div className="guest-comment">
                        {
                            commentData ? commentData.map((doc) => { return <Comments key={doc.id} send={doc.data()} /> }) : <p style={{color:'white', fontSize:'2rem'}}>Loading...</p>
                        }
                    </div>
                </div>
                <div className="mid-contact" style={{height: '30vh', display:'flex', alignItems:'center', justifyContent:'center', gap:'50px'}}>
                    <BackTo name='Go Back' onClick={()=> window.history.back()}/>
                    <BackTo name='Back to home' onClick={()=> navigate('/')}/>
                </div>
                <Contact updateConnection={updateConnection} setCheckConnection={setCheckConnection}/>
            </div>
        </div>
    </>
  )
}
