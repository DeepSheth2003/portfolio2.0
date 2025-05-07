import MoveTo from '../Component/MoveTo'

export default function ProjectDetail({sendData}) {

    if(!sendData){
        return <div className='pro-comp' style={{display:'flex',alignItems:'center',justifyContent:'center',color:'gray'}}>Select a project to see details...</div>
    }

  return (
    <div className='right-comp  pro-comp'>
        <div className="pro-title">
            <p>{sendData.name}</p>
        </div>
        <div className="pro-description">
            <p>Description</p>
            <p>{sendData.description}</p>
        </div>
        <div className="pro-link">
            <p style={{color: sendData.textColor}}>{sendData.link}</p>
        </div>
        <div className="pro-trans-btn">
            <MoveTo name='Visit project' onClick={()=>{window.open(sendData.link)}}/>
        </div>
    </div>
  )
}
