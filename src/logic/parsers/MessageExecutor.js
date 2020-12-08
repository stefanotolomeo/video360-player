
const ActionEnum = {
    "getView": 1, 
    "setView": 2, 
    "getTime": 3, 
    "setTime": 4,
    "getDuration": 5,
    "playVideo": 6,
    "pauseVideo": 7,
    "addText": 8,
    "editText": 9,
    "deleteText": 10,
    "addImage": 11,
    "editImage": 12,
    "deleteImage": 13
    
}
                  
// Parse a message in JSON format
function executeMessage(msg){
    switch(msg.action){
        // **** VIEWS **** //
        case ActionEnum.getView:
            /* E.G. 
            {
                action: "getView",
                destination: "VR",
                sender: *,
            }
            */
            let view = getView()
            console.log(`Returning View=${JSON.stringify(view)}`)
            return view
            
        case ActionEnum.setView:
            
            /* E.G. 
            {
                action: "setView",
                destination: "VR",
                sender: *,
                payload: {
                    rotation:{
                        x: value,
                        y: value,
                        z: value
                    },
                    position:{
                        x: value,
                        y: value,
                        z: value
                    }
                }
            }
            */
            let rotVal = msg.payload.rotation
            let posVal = msg.payload.position
            
            let rotRes = rotVal == undefined ? true : setViewRotation(rotVal.x, rotVal.y, rotVal.z)
            let posRes = posVal == undefined ? true : setViewPosition(posVal.x, posVal.y, posVal.z)
        
            let res = rotRes && posRes
            console.log(`Returning Set-View Result=${res}`)
            return res
            
        // **** VIDEO **** //
        case ActionEnum.getTime:
            /* E.G. 
            {
                action: "getTime",
                destination: "VR",
                sender: *,
            }
            */
            let time = getVideoTime()
            console.log(`Returning Get-Video Time Result=${time}`)
            return time
        
        case ActionEnum.setTime:
            /* E.G.
            {
                action: "setView",
                destination: "VR",
                sender: *,
                payload: {
                    time: 13
                }
            }
            */
            let res = setVideoTime(msg.payload.time)
            console.log(`Returning Set-Video Time Result=${res}`)
            return res
        case ActionEnum.getDuration:
            /* E.G. 
            {
                action: "getDuration",
                destination: "VR",
                sender: *,
            }
            */
            let duration = getVideoDuration()
            console.log(`Returning Get-Video Duration Result=${duration}`)
            return duration
        case ActionEnum.playVideo:
            /* E.G. 
            {
                action: "playVideo",
                destination: "VR",
                sender: *,
            }
            */
            return playVideo()
            
        case ActionEnum.pauseVideo:
            /* E.G. 
            {
                action: "pauseVideo",
                destination: "VR",
                sender: *,
            }
            */
            return pauseVideo()
        
        
        // **** TEXT **** ///    
        case ActionEnum.addText:
            /* E.G.
            {
                action: "addText",
                destination: "VR",
                sender: *,
                payload: {
                    id: "111",
                    text: "Guarda qui",
                    color: "#FF0000",
                    position: {
                        x: 0,
                        y: 0,
                        z: -5
                    },
                    rotation: {
                        x: 0,
                        y: 0,
                        z: 0
                    }
                }
            }
            */
            let p = msg.payload
            let res = addText(p.id, p.text, p.color, p.position, p.rotation)
            
            console.log(`Returning Add-Text Result=${res}`)
            return res
        case ActionEnum.editText:
            /* E.G.
            {
                action: "editText",
                destination: "VR",
                sender: *,
                payload: {
                    id: "111",
                    text: "Guarda qui",
                    color: "#FF0000",
                    position: {
                        x: 0,
                        y: 0,
                        z: -5
                    },
                    rotation: {
                        x: 0,
                        y: 0,
                        z: 0
                    }
                }
            }
            */
            let p = msg.payload
            let res = editText(p.id, p.text, p.color, p.position, p.rotation)
            
            console.log(`Returning Edit-Text Result=${res}`)
            return res
        case ActionEnum.deleteText:
            /* E.G.
            {
                action: "deleteText",
                destination: "VR",
                sender: *,
                payload: {
                    id: "111"
                }
            }
            */
            
            let res = deleteText(msg.payload.id)
            
            console.log(`Returning Delete-Text Result=${res}`)
            return res
            
        // **** IMAGE **** ///    
        case ActionEnum.addImage:
            /* E.G.
            {
                action: "addImage",
                destination: "VR",
                sender: *,
                payload: {
                    id: "111",
                    src: "mouse.jpg",
                    height: 2,
                    width: 2,
                    position: {
                        x: 2,
                        y: 2,
                        z: -3
                    },
                    rotation: {
                        x: 0,
                        y: 90,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    },
                }
            }
            */
            let p = msg.payload
            let res = addImage(p.id, p.src, p.height, p.width, p.position, p.rotation, p.scale)
            
            console.log(`Returning Add-Image Result=${res}`)
            return res
        case ActionEnum.editImage:
            /* E.G.
            {
                action: "editImage",
                destination: "VR",
                sender: *,
                payload: {
                    id: "111",
                    src: "mouse.jpg",
                    height: 2,
                    width: 2,
                    position: {
                        x: 2,
                        y: 2,
                        z: -3
                    },
                    rotation: {
                        x: 0,
                        y: 90,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    },
                }
            }
            */
            let p = msg.payload
            let res = editImage(p.id, p.src, p.height, p.width, p.position, p.rotation, p.scale)
            
            console.log(`Returning Edit-Image Result=${res}`)
            return res
        case ActionEnum.deleteImage:
            /* E.G.
            {
                action: "deleteImage",
                destination: "VR",
                sender: *,
                payload: {
                    id: "111"
                }
            }
            */
            
            let res = deleteImage(msg.payload.id)
            
            console.log(`Returning Delete-Image Result=${res}`)
            return res
    }
}

