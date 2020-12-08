const DEFAULT_ROTATION = "0 0 0"

function editText(id, text, color, height, width, position, rotation){
    
    try {
        console.log(`Editing Text with Id=${id}`)
    
        $(`#${id}`).attr({
          value: text,
          color: color,
          height: height,
          width: width,
          position: position,
          rotation: rotation,
        })
        
        return true
        
    } catch(e){
        console.log(`Exception on editText: ${e}`)
        return false
    }
}


function deleteText(id){
    try {
        console.log(`Deleting Text with Id=${id}`)
    
        $(`#${id}`).remove()
        
        return true
        
    } catch(e){
        console.log(`Exception on deleteText: ${e}`)
        return false
    }
    
}

function addText(id, text, color, height, width, position, rotation){
    try {
        console.log("Setting Text into scene..")

        let item = `<a-text id="${id}" value="${text}" color="${color}" height="${height}" width="${width}" position="${position}" rotation="${rotation}"></a-text>`

        console.log(`Appending Text Element: ${item}`)

        $("#scene").append(item)

        return true
    } catch(e){
        console.log(`Exception on addText: ${e}`)
        return false
    }
}
