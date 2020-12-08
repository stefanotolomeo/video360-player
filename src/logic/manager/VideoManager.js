const VIDEO_BASE_PATH = "./assets/video/"

function setVideo(resourceName, loop, muted, volume, position, rotation){
    try {
        console.log("Setting Video into scene")
    
        var videoSrc = VIDEO_BASE_PATH + resourceName

        console.log(`Video-Source: ${videoSrc}`)

        $("#assetVideo360").attr("src", videoSrc);
        $("#assetVideo360").prop("loop", loop);
        $("#assetVideo360").prop("muted", muted);

        console.log(`Applying Rotation: ${rotation}`)

        // video.attr("position", position)
        $("#videosphere").attr("rotation", rotation) 
        return true
    } catch(e){
        console.log(`Exception on setVideo: ${e}`)
        return false
    }
        
}


function getVideoTime(){
    try {
        console.log(`Getting current 360-Video Time`)
    
        let time = $('#assetVideo360')[0].currentTime;
    
        console.log(`Current time is: ${time}`)
        return time    
    } catch(e){
        console.log(`Exception on getVideoTime: ${e}`)
        return false
    }
    
}

function getVideoDuration(){
    try {
        console.log(`Getting 360-Video Duration`)
    
        let duration = $('#assetVideo360')[0].duration;
    
        console.log(`360-Video Duration is: ${duration}`)
        return duration    
    } catch(e){
        console.log(`Exception on getVideoDuration: ${e}`)
        return false
    }
    
}

function setVideoTime(time){
    
    try {
        if(time == undefined){
            return false
        }
        $('#assetVideo360')[0].currentTime = time
        return true   
    } catch(e){
        console.log(`Exception on setVideoTime: ${e}`)
        return false
    }
}

function playVideo(){
    // Note: remember to enable Browser Autoplay.
    try {
        $("#assetVideo360").get(0).play()   
        return true
    } catch(e){
        console.log(`Exception on playVideo: ${e}`)
        return false
    }
}

function pauseVideo(){
    try {
        $("#assetVideo360").get(0).pause()
        return true
    } catch(e){
        console.log(`Exception on pauseVideo: ${e}`)
        return false
    }
     
}