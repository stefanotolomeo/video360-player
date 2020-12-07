
// TODO: fare lista degli id presenti

function editText(id, text, position, rotation){
    console.log(`Updating Text with Id=${id}`)
    
    // TODO
}


function deleteText(id){
    console.log(`Deleting Text with Id=${id}`)
    
    // TODO
}


function addText(id, text, position, rotation){
    console.log("Setting Text into scene: ")
    // Add <a-entity bmfont-text="text: Hello world"></a-entity>
    // textObj.text = text
    
    var item = `<a-text id="${id}" value="${text}" color="red" position="0 0 -2"></a-text>`
    
    console.log(`Appending Text Element: ${item}`)
    
    $("#scene").append(item)
}
