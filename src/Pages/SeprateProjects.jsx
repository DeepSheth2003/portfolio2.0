import React, { useState } from 'react'
import ProjectName from './ProjectName'
import ProjectDetail from './ProjectDetail'
import Contact from './Contact'
import BackTo from '../Component/BackTo'
import { useNavigate } from 'react-router'

export default function Project({updateConnection, setCheckConnection}) {

  const [ gettingData , setGettingData ] = useState(null);
  // First of all : aopde ahiya thi ak setState() function projectName component ma mokliae chhiye... have tya jay ne vacho....
  // tyar bad te setState() function ma set thyela data ae ProjectDetail component ne mokli devama avya chhe...!

  const navigate = useNavigate();

  return (
    <>
      <div className='seprate-project'>
        <div className="seprate-head">
          <div className="seprate-head-info">
            <p>PROJECTS</p>
            <p>Created <span>Works</span></p>
          </div>
        </div>
        <div className='project'>
          <div className="project-names sepsep">
            <ProjectName projectData={setGettingData}/>
          </div>
          <div className="project-details sepsep">
            <ProjectDetail sendData={gettingData} />
          </div>
        </div>
      </div>
      <div className="mid-adjust" style={{height: '30vh', display:'flex', alignItems:'center', justifyContent:'center', gap:'50px'}}>
        <BackTo name='Go Back' onClick={()=> window.history.back()}/>
        <BackTo name='Back to Home' onClick={()=> navigate('/')} />
      </div>
      <Contact updateConnection={updateConnection} setCheckConnection={setCheckConnection}/>
    </>
  )
}
