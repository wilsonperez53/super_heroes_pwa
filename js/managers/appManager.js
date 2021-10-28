// Fachade
class AppManager {
    constructor(){
        console.log('AppManager here');
        this.uiManager = new UIManager(this);
        this.netManager = new NetManager(this);
        this.dataManager = new DataManager(this);
        this.netManager.getData();

        this.publicKey = 'a687c53da0e69699c7ce21bda54683a6';
        this.privateKey = '7a1ab1478d0fbbec09991147ba5d966ac40ee51b';

        this.isDevelopment = false;

        var messageChannel = new MessageChannel();
        navigator.serviceWorker.controller.postMessage({
            type: 'SET_USER_DATA'
        }, [messageChannel.port2]);

        messageChannel.port2.onmessage = event => {
            switch (event.data.type) {
                case 'MESSSAGE_FROM_SW':
                    console.log('message received from sw');
                    break;
            
                default:
                    break;
            }
        }
    }
}