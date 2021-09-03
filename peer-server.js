var fs = require('fs');
var PeerServer = require('peer').PeerServer;

var server = PeerServer({
    port: 9000,
    path: '/peerjs',
    ssl: {
        key: fs.readFileSync('key.pem', 'utf8'),
        cert: fs.readFileSync('cert.pem', 'utf8')
    }
});