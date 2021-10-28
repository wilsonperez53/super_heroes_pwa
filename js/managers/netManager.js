class NetManager {
    constructor(appManager){
        this.appManager = appManager;
        this.url = 'https://superstohire-7a59c-default-rtdb.firebaseio.com/data.json'
    }

    getData(){
        var request = new XMLHttpRequest();
        request.open('GET', this.url);
        request.send();

        request.onreadystatechange = this.onGetData.bind(this);
    }

    onGetData(e){
        var request = e.target;
        if (request.readyState === 4) {
            if(request.status === 200){
                var data = [];
                data = JSON.parse(request.response);

                this.appManager.dataManager.addSupers(data);
            } else {
                console.log('Error');
            }
        }
    }

    sendSuper(superModel){
        var request = new XMLHttpRequest();
        request.open('POST', (this.url + '/'));
        request.send(JSON.stringify(superModel));
    }
}