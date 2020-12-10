/*var message = {
    action: "",
    destination: "",
    payload: {},
}*/

function SocketManager() {

    var _this = {};

    var socket;
    var modality;

    _this.init = function (onauthenticate, ondisconnect, mode) {
        socket = io("http://127.0.0.1:3000", {
            withCredentials: true,
            extraHeaders: {
                "abilia-socket-header": "cors" //define a header to be able to do CORS requests
            },
            autoConnect: true,
            reconnection: true
        });
        modality = mode;

        socket.on('handshake', function (msg) {
            console.log("🌍⇄ Connected", msg);

            if (mode == undefined) {
                var url = new URL(window.location.href);
                modality = url.searchParams.get("m");
                if (modality == null) {
                    modality = "";
                } else {
                    modality = modality.toUpperCase();
                }
            }

            socket.emit("authenticate", modality);
            console.log("🌍⇄ Authenticated", msg);

            if (typeof (onauthenticate) == "function") {
                onauthenticate();
            }
        });

        socket.on('disconnect', function (reason) {
            console.log("🌍⇹ Disconnected", reason);
            if (typeof (ondisconnect) == "function") {
                ondisconnect(reason);
            }
        });

    };

    _this.send = function (a, d, p) {
        var msg = {
            action: a,
            destination: d.toUpperCase(),
            sender: m.toUpperCase(),
            payload: p,
        }

        socket.emit("message", msg);
        console.log("🌍← Message sent", msg);
    }

    _this.listen = function (callback) {
        socket.on('message', function (msg) {
            console.log("🌍→ Message received", msg);
            callback(msg);
        });
    }

    return _this;

}
