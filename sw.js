var userData=null;
var port = null;

self.addEventListener('activate', (event) => {
    console.log(event);
    // This is to make sure this is the sw on this app
    event.waitUntil(client.claims());
});

self.addEventListener('install', (event) => {
    console.log("Installing", event);
});

self.addEventListener('fetch', (event) => {
    console.log("fetch", event);
});

self.addEventListener('message', event => {
    switch (event.data.type){
        case 'SET_USER_DATA':
            self.port = event.ports[0];
            self.userData = event.data.userData;
            port.postMessage({type:'MESSSAGE_FROM_SW'});
            break;
        default:
            break;
    }
});