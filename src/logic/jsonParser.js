'use strict';

var JSON_PATH = './fixture/example.json'

function readJson(document){
    console.log(`Document Ready. Reading from: ${JSON_PATH}`)
    var xhr = new XMLHttpRequest()
    xhr.open("GET", JSON_PATH)
    xhr.addEventListener('load', processJSON)
    xhr.send()

    function processJSON(event) {
        var json = this.responseText;
        var obj = JSON.parse(json);
        console.log(obj)
        
        // (1) Get from JSON: Video source and rotation
        var videoRotation = `${obj.init_settings.rotation.x} ${obj.init_settings.rotation.y} ${obj.init_settings.rotation.z}`
        setVideo(obj.src, true, 1, undefined, videoRotation)        
        
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
        
        addText("text_1", "FORZA INTER", "blue", 30, 30, "-2 2 -2", "0 90 0")
        
        addImage("img_1", "mouse.jpg", 5, 5, "2 2 -3", "0 90 0", "1 1 1")
        
        playVideo()
        
        // This is just for testing
        // var intervalID = setInterval(function(){getView()}, 2000);
    }
}

$(document).ready(() => {
    // init()
    readJson()
    
    // TODO: this is for you MIRKO
    $("#scene").click(function (evt) {
        
        /*var cursor = document.querySelector('a-cursor'); 
        console.log(cursor)
        if (!cursor.components.intersectedEl) { return; }
        var intersection = cursor.components.raycaster.getIntersection(cursor.components.intersectedEl);
        var intersectionPosition = intersection.point;*/
        console.log(evt.originalEvent)
       /*console.log(`Intersection Point is: ${JSON.stringify(evt.detail.intersection)} `)
    
        console.log($("#cursor"))
        
        
        var cursor = $("#cursor")
        var elToWatch = $("#scene")
        var intersection = cursor.components.raycaster.getIntersection(elToWatch);
        var intersectionPosition = intersection.point;
        
        console.log("Intersection is: ", intersection)*/
        
        /*console.log(`Inner-Window Height: ${window.innerHeight} Width: ${window.innerWidth}`)
        let x = evt.originalEvent.clientX
        let y = evt.originalEvent.clientY
        
        let offsetX = evt.originalEvent.offsetX
        let offsetY = evt.originalEvent.offsetY
        
        let sceneX = ( x / window.innerWidth ) * 2 - 1;
	    let sceneY = - ( y / window.innerHeight ) * 2 + 1;
        
        let sceneOffsetX = ( offsetX / window.innerWidth ) * 2 - 1;
	    let sceneOffsetY = - ( offsetY / window.innerHeight ) * 2 + 1;
        
        console.log(`(1) Clicked Clients on X=${x} Y=${y} --> Scene X=${sceneX} Y=${sceneY}`)
        console.log(`(2) Clicked Offset on X=${offsetX} Y=${offsetY} --> Scene X=${sceneOffsetX} Y=${sceneOffsetY}`)*/
    });
})
