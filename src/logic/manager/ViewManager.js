
function getView(){
    try {
        console.log("Getting view..")
        var camera = $("#camera")
        let view = {}
        view.pos = camera.attr("position")
        view.rot = camera.attr("rotation")

        console.log(`Current Camera View is: ${JSON.stringify(view)}`)
        return view
    } catch(e){
        console.log(`Exception on GetView: ${e}`)
        return false
    }
    
}

// Not used
// Position and Rotation must be both as "X Y Z"
function setView(position, rotation){
    
    try {
        console.log(`Setting View to Position=${position}; Rotation=${rotation}`)
    
        if(!position){
            console.log("Setting Position..")
            $("#camera").attr("position", position)
        }

        if(!rotation){
            console.log("Setting Rotation..")
            $("#camera").attr("rotation", rotation)
        }
        
        return true
    } catch(e){
        console.log(`Exception on SetView: ${e}`)
        return false
    }
}

function setViewPosition(x, y, z){
 
    try {
        if(x == undefined || y == undefined || z == undefined){
            return false       
        }
        let newPos = `${x} ${y} ${z}`
        console.log(`Setting Position: ${JSON.stringify(newPos)}`)
        $("#camera").attr("position", newPos)
        
        return true  
        
    } catch(e){
        console.log(`Exception on SetViewPosition: ${e}`)
        return false
    }
}

function setViewRotation(x, y, z){
    
    try {
        if(x == undefined || y == undefined || z == undefined){
            return false       
        }
    
        let newRot = `${x} ${y} ${z}`
        console.log(`Setting Rotation: ${JSON.stringify(newRot)}`)
        $("#camera").attr("rotation", newRot)
        return true
        
    } catch(e){
        console.log(`Exception on setViewRotation: ${e}`)
        return false
    }
}

function getClickedPoint(){
   
    try {
        console.log("Getting clicked point..")
    
        // TODO  
        
        return true
    } catch(e){
        console.log(`Exception on getVideoTime: ${e}`)
        return false
    }
}
