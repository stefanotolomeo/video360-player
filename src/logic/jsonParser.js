'use strict';

var JSON_PATH = './fixture/example.json'

function readJson(document){
    console.log("Document Ready. Reading from: "+JSON_PATH)
    var xhr = new XMLHttpRequest()
    xhr.open("GET", JSON_PATH)
    xhr.addEventListener('load', processJSON)
    xhr.send()

    function processJSON(event) {
        var json = this.responseText;
        var obj = JSON.parse(json);
        console.log(obj)
        
        // (1) Get from JSON: Video source and rotation
        var videoRotation = obj.init_settings.rotation.x + " " + obj.init_settings.rotation.y + " " + obj.init_settings.rotation.z
        setVideo(obj.src, true, false, 1, null, videoRotation)        
        
        // (2) Attach Elements (Loop + call a function)
        for(let el of obj.elements){
            var type = el.type
            var delay = el.delay_in_sec
            var color = el.color
            var elemPosition = el.position.x + " " + el.position.y + " " + el.position.z
        
            // setAudio(1,2,3)
            setElement3D(type, color, elemPosition, null, null)
            // setText(1,2,3)
            // setAudio("sea.mp3", null, true, true, 1)   
        }
        
        addText("new_id", "CIAO", null, null)
        
        playVideo()
        
        //var intervalID = setInterval(function(){getView()}, 2000);
    }
}

$(document).ready(readJson);
