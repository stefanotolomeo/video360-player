const IMAGE_BASE_PATH = "./assets/image/"

function editImage(id, resourceName, height, width, position, rotation, scale){
    try {
        console.log(`Editing Image with Id=${id}`)
    
        let imageSrc = IMAGE_BASE_PATH + resourceName
        
        $(`#${id}`).attr({
          src: imageSrc,
          height: height,
          width: width,
          position: position,
          rotation: rotation,
          scale: scale,
        })
        
        return true
        
    } catch(e){
        console.log(`Exception on editImage: ${e}`)
        return false
    }
}


function deleteImage(id){
    try {
        console.log(`Deleting Image with Id=${id}`)
    
        $(`#${id}`).remove()
        
        return true
        
    } catch(e){
        console.log(`Exception on deleteImage: ${e}`)
        return false
    }
}

// Height and Width could both be 1
// Scale is usually "1 1 1"
function addImage(id, resourceName, height, width, position, rotation, scale){
    
    try {
        let imageSrc = IMAGE_BASE_PATH + resourceName

        let img = `<a-image id="${id}" src="${imageSrc}" height="${height}" width="${width}" position="${position}" rotation="${rotation}" scale="${scale}" visible="true"></a-image>`

        console.log(`Appending Image: ${img}`)

        $("#scene").append(img)

        return true
    } catch(e){
        console.log(`Exception on addImage: ${e}`)
        return false
    }
}