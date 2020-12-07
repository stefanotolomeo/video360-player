// TODO: understand how to implement

sm.init(onauthenticate, ondisconnect); //Callback for authentication and for disconnection. No need to try to reconnect.

function onauthenticate() {
    console.log("Authenticated"); //the client was authenticated by the server. The client can now send messages.
}

function ondisconnect(reason) {
    console.log("Disconnected", reason); //the client was disconnected by the server. The client cannot send messages anymore.
}



sm.listen(onmessage); //Callback for message reception

function onmessage(msg) {
    console.log("Message received", msg); //a message was received, you can access action, destination, sender and payload properties
}


sm.send("action","destination","payload");