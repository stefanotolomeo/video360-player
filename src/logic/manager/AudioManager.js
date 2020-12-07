
const AUDIO_BASE_PATH = "./assets/audio/"

// TODO: this does not work: audio must be applied to an object
function setAudio(resourceName, startTime, autoplay, loop, volume){
    console.log("Setting Audio into scene")
    
    // Create the Audio source path
    var src = AUDIO_BASE_PATH + resourceName
    
    $("#assetAudio").attr("src", src);
    var item = `<a-entity sound='src: ${src}; autoplay: ${autoplay}; loop: ${loop}; volume: ${volume};' position='1 1 1' rotation='0 0 0' visible="true"></a-entity>`
    
    console.log(`Appending SOUND: ${item}`)
    $("#scene").append(item)
}