const IMAGE_BASE_PATH = "./assets/image/"

function editImage(id, position, rotation){
    console.log(`Updating Image with Id=${id}`)
    
    // TODO
}


function deleteImage(id){
    console.log(`Deleting Image with Id=${id}`)
    
    // TODO
}


function addImage(resourceName, position, rotation){
    
    var imageSrc = IMAGE_BASE_PATH + resourceName
    
    console.log(`Image-Source: ${imageSrc}`)
    
    $("#assetImage").attr("src", imageSrc);
}