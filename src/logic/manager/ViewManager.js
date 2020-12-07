
var view = {
    pos: {},
    rot: {}
}

function getView(){
    console.log("Getting view..")
    var camera = $("#camera")
    view.pos = camera.attr("position")
    view.rot = camera.attr("rotation")
    
    console.log(`Current Camera is: Position=${view.pos}; Rotation=${view.rot}`)
    return view
}

// Position and Rotation must be both as X, Y, Z
function setView(position, rotation){
    console.log(`Setting View to Position=${position}; Rotation=${rotation}`)
    var camera = $("#camera").attr( "title", "Photo by Kelly Clark" )
    if(!position){
        console.log("Setting Position..")
        camera.attr("position", position)
    }
    
    if(!rotation){
        console.log("Setting Rotation..")
        camera.attr("rotation", rotation)
    }
    
}


function getClickedPoint(){
    console.log("Getting clicked point..")
    
    // TODO 
}
