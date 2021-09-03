var fs = require('fs');
var PeerServer = require('peer').PeerServer;

var server = PeerServer({
    port: 9000,
    host: '157.245.101.140',
    path: '/peerjs',
    ssl: {
        key: fs.readFileSync('key.pem', 'utf8'),
        cert: fs.readFileSync('cert.pem', 'utf8')
    }
});