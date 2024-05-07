import { useEffect } from 'react';
import {useVolumeLevel, VolumeIndicator} from 'react-volume-indicator'

function AudioFile(state) {
 const [startRecording, stopRecording, volume] = useVolumeLevel();

 useEffect(()=>{

    if(state===true)
    {

    }
    else
    {
        
    }
 },[state])
   return (
     <div>
       <div style={{margin: 10}}>

        
       <VolumeIndicator backgroundColor="white" indicatorColor="black" volume={volume*2} />
      <VolumeIndicator backgroundColor="white" indicatorColor="black" volume={volume*5} />
      <VolumeIndicator backgroundColor="white" indicatorColor="black" volume={volume*2} />
      </div>


      <button onClick={startRecording} style={{backgroundColor: 'red', padding: 10, margin: 10}}>
       Record
      </button>
      <button onClick={stopRecording} style={{backgroundColor: 'green', padding: 10, }}>
       Stop
      </button>


     </div>
   );
}

export default AudioFile