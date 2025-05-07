import React from 'react'
import { useNavigate } from 'react-router-dom'
import Contact from "../Pages/Contact"
import BackTo from '../Component/BackTo'

export default function NotFound({updateConnection, setCheckConnection}) {

  const navigate = useNavigate();

  return (
    <>
      <div className='main-error'>
          <div className="inner-error">
              <p>404</p>
              <div className="upper-error">
                  <div className="upper-inner-error">
                      <p>Page not found!</p>
                      <p>The Page you are looking for doesn't exist or has been removed.</p>
                      <div>
                      <BackTo name='Go Back' onClick={()=> window.history.back()} /> <BackTo name='Back to Home' onClick={()=> navigate('/')} />
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="mid-adjust" style={{height: '25vh'}}></div>
      <Contact updateConnection={updateConnection} setCheckConnection={setCheckConnection}/>
    </>
  )
}
