// TODO: understand how to implement

const MSG_DESTINATION = "CP";
const MODE_VR = "VR";

const urlParams = new URLSearchParams(window.location.search)
const currentMODE = urlParams.get('m') || MODE_VR;

(function () { //eseguire a document ready
    const sm = new SocketManager()
    // TODO: Set the mode here
    sm.init(onauthenticate, ondisconnect, currentMODE); //Callback for authentication and for disconnection. No need to try to reconnect.

    sm.listen(onmessage); //Callback for message reception

})();


function onauthenticate() {
    console.log("Authenticated"); //the client was authenticated by the server. The client can now send messages.
}

function ondisconnect(reason) {
    console.log("Disconnected", reason); //the client was disconnected by the server. The client cannot send messages anymore.
}


function onmessage(msg) {
    console.log("Message received", msg); //a message was received, you can access action, destination, sender and payload properties

    let payload = executeMessage(msg)

    console.log(`Sending result: ${payload}`)

    sm.send(msg.action, MSG_DESTINATION, payload);
}
