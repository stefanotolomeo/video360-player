// Type = box, sphere, ecc (altri object A-Frame)

function editElement3D(id){
    console.log(`Updating Element-3D with Id=${id}`)
    
    // TODO
}


function deleteElement3D(id){
    console.log(`Deleting Element-3D with Id=${id}`)
    
    // TODO
}


function setElement3D(type, color, position, startTime, duration){
    // E.g.:
    // <a-box color="red" position="0 0 -5" animation="property:rotation; to:0 360 0; loop:true; delay:1000; dur:2000"></a-box>
    
    console.log("Setting 3D element into scene")
    
    var item = `<a-${type} color="${color}" position="${position}"></a-${type}>`
    
    console.log(`Appending 3D ELEMENT: ${item}`)
    $("#scene").append(item)
}