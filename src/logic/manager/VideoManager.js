const VIDEO_BASE_PATH = "./assets/video/"

const LOAD_TIMEOUT = 10000

function setVideoAsync(url, loop, volume, position, rotation){
    /*
        options: {
                    volume: 1,
                    loop: true,
                    position: {
                        x: 1,
                        y: 1,
                        z: 1
                    },
                    rotation: {
                        x: 0,
                        y: 0,
                        z: 0
                    }
                }
    */
    // Run: - DOM Loading; - Resource Downloading
    return new Promise((resolve, reject) => {
        setTimeout(() => 
                   resolve(setVideo(url, loop, volume, position, rotation)), 
                   LOAD_TIMEOUT)
    });
}

function setVideo(resourceName, loop = false, volume = 1, position = "0 0 0", rotation = "0 0 0"){
    try {
        console.log("Setting Video into scene")
    
        // var videoSrc = VIDEO_BASE_PATH + resourceName
        var videoSrc = "http://5.153.24.46/~abilia/resources/RES_0BTOEQRCBU374KIONNKVICADOX8Q.mp4"
        
        let assetVideo = $("#assetVideo360")
        let videosphere = $("#videosphere")

        console.log(`Video-Source: ${videoSrc}`)

        assetVideo.attr("src", videoSrc);
        assetVideo.prop("loop", loop);
        assetVideo.prop("volume", volume);

        console.log(`Applying Position: ${position}`)
        videosphere.attr("position", position)
        
        console.log(`Applying Rotation: ${rotation}`)
        videosphere.attr("rotation", rotation) 
        
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