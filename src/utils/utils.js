

    const getLocalIp = () => {
        window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;   //compatibility for firefox and chrome
        var pc = new RTCPeerConnection({iceServers:[]}), noop = function(){};      
        pc.createDataChannel("");    //create a bogus data channel
        pc.createOffer().then(() => {
            pc.setLocalDescription.bind(pc)
        })
   
        pc.onicecandidate = function(ice){  //listen for candidate events
            if(!ice || !ice.candidate || !ice.candidate.candidate)  return;
            var myIP = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
            document.write('IP: ', myIP);
            console.log(myIP);
            pc.onicecandidate = noop;
        };
    }

    export {getLocalIp}