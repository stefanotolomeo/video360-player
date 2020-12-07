const VIDEO_BASE_PATH = "./assets/video/"

/*
var assetVideo = $("#assetVideo360")
var video = $("#videosphere")*/

function setVideo(resourceName, loop, muted, volume, position, rotation){
    console.log("Setting Video into scene")
    
    var videoSrc = VIDEO_BASE_PATH + resourceName
    
    console.log(`Video-Source: ${videoSrc}`)
        
    $("#assetVideo360").attr("src", videoSrc);
    $("#assetVideo360").prop("loop", loop);
    $("#assetVideo360").prop("muted", muted);
    
    console.log(`Applying Rotation: ${rotation}`)
    
    // video.attr("position", position)
    $("#videosphere").attr("rotation", rotation)
        
}


function getVideoTime(){
    console.log(`Getting current 360-Video Time`)
    
    var time = $("#videosphere").currentTime
    
    console.log(`Current time is: ${time}`)
    return time
}


function setVideoTime(time){
    
    $("#videosphere").currentTime = time
}

function playVideo(){
    // Note: remember to enable Browser Autoplay.
    $('#assetVideo360').get(0).play();
}