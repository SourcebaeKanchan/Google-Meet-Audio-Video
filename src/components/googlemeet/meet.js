
import { useEffect, useState } from "react"
import {useVolumeLevel, VolumeIndicator} from 'react-volume-indicator'
import VideoFile from "./videofile"
import "./meet.css"

// import AudioFile from "./AudioFile"

function Meet()
{ 
    const [startRecording, stopRecording, volume] = useVolumeLevel();
    const[isRecord, setIsRecord]= useState(false)
    
    const [status,setStatus] = useState(true)
    // const [mute,setMute] = useState(true)

    const recordHandler= ()=> {
        startRecording()
        setIsRecord(false)
     }
     const stopHandler= ()=> {
        stopRecording() 
        setIsRecord(true) 
     }

    useEffect(()=>{
 
    },[status])

    return(
      
            <div className="main">
            
            <div className="display">
                
                {
                    status ? <VideoFile state={status}/> : 
                    
                        <div className="black-div" >
                            <div className="blank-name">
                                <h1>K</h1> 
                            </div>
                            
                        </div>
              
                }

            <div>
            <VolumeIndicator backgroundColor="white" indicatorColor="red" volume={volume*3} className = "Volume-level" />   
            </div>
              
            </div>
           
              <div className="Submit">
              {isRecord&&<button onClick={recordHandler} id="blue" className="common_css">
                UnMute
                </button>}
                {!isRecord && <button onClick={stopHandler} id="blue" className="common_css">
                Mute
                </button>}
               
             {/* <button onClick={()=> setMute(!mute) }  id="blue" className="common_css">Mute </button> */}
            <button onClick={()=> setStatus(!status) }  id="blue" className="common_css"> Video Cam</button>
              </div>
            
           {/* <FontAwesomeIcon icon="fa-solid fa-video" /> */}
        </div>

    )
}
export default Meet