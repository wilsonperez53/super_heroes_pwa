
//"use strict";
var window = window.addEventListener('load', init, false);

function init() {
    console.log('App running');
    let installContainer = document.getElementById('installContainer');
    var installButton = document.getElementById('installButton')

    console.log(navigator);
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register('/sw.js',{ scope: './'}).then((registration)=>{
            console.log('SW registered:', registration);
        }, (error)=>{
            console.log('Error registerin SW:', error);
        });
    }

    var appManager = new AppManager();
    
    if(!appManager.isDevelopment){
        // Validate HTTPs 
        if (window.location.protocol === 'http'){
            var requiredHTTPS = document.getElementById('requiredHTTPS');
            requiredHTTPS.classList.remove('hide');
        }
    }

    window.addEventListener('beforeinstallprompt', (event) => {
        event.preventDefault();
        window.deferredPrompt = event;
        installContainer.classList.remove('hide');
    });

    installButton.addEventListener('click', (event) => {
        console.log('install button');
        var promptEvent = window.deferredPrompt;

        if(!deferredPrompt) return;

        deferredPrompt.prompt();

        promptEvent.userChoice.then((result) => {
            window.deferredPrompt = null;
            installContainer.classList.add('hide');
        });
    });
}