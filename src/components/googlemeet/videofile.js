import { useEffect } from "react";
import "./style.css"

function VideoFile({ state }) {

    function hello() {
        const video = document.querySelector("video");
        // const audio = document.querySelector("audio")

        // Put variables in global scope to make them available to the browser console.
        const constraints = {
            audio: false,
            video: true,
        };

        navigator.mediaDevices
            .getUserMedia(constraints)
            .then((stream) => {  
                video.srcObject = stream;  //const videoTracks = stream.getVideoTracks();
                video.play();  

                //-----------------------------------------
                
                    // const tracks = stream.getAudioTracks();
                    // console.log(tracks , "We are getting an audio track")
                    // tracks[0].stop();
                 

                //----------
                // audio.srcObject = stream

                // const tracks = audio.srcObject.getAudioTracks()
                // console.log(tracks, "Tracks")
                //-----------------
                // console.log("Got stream with constraints:", constraints);
                // console.log(`Using video device: ${videoTracks[0].label}`);
                // stream.onremovetrack = () => {
                //   console.log("Stream ended");
                console.log(stream, "Here is the string")
                console.log("Video is being played 2.")             
             
                // };

                // const videoElement = document.querySelector("video");
                // videoElement.srcObject = stream;
            })
            .catch((err) => {
                // if (error.name === "OverconstrainedError") {
                console.error(`An error occurred: ${err}`);
                //     `The resolution ${constraints.video.width.exact}x${constraints.video.height.exact} px is not supported by your device.`,
                //   );
                // } else if (error.name === "NotAllowedError") {
                //   console.error(    
                //     "You need to grant this page permission to access your camera and microphone.",
                //   );
                // } else {
                //   console.error(`getUserMedia error: ${error.name}`,'Error opening video camera.', error);
                // }
            });


    }
        useEffect(() => {
            if (state) {
                hello()
            }
        }, [state])
        
    return (
        <div>
            <video id="video"> Video stream is not available. </video>
           
            
        </div>
    )
}
export default VideoFile