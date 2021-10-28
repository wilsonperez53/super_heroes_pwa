class DataManager {
    constructor(appManager){
        this.appManager = appManager;
        this.supers = [];
    }

    addSupers(data){
        
        for(const attribute in data){
            var item = data[attribute];
            var newSuper = new Super(item.age, item.biography, item.email,item.image, attribute, item.name, item.phone, item.powers, item.secretIdentity, item.type )
            this.supers.push(newSuper);
        }

        //for (const item of Object.entries(data)){
        /*for (const item of Object.entries(data)){
            var newSuper = new Super(item[1].age, item[1].biography, item[1].email,item[1].image, item[1].key, item[1].name, item[1].phone, item[1].powers, item[1].secretIdentity, item[1].type )
            this.supers.push(newSuper);
            //console.log("Supers:" + this.supers);
        }
        /*data.forEach(item => {
            var newSuper = new Super(item.age, item.biography, item.email, item.image, item.key, item.name, item.phone, item.powers, item.secretIdentity, item.type, item.level);
            this.supers.push(newSuper);
        });*/
        
        //console.log(this.supers);
        this.appManager.uiManager.showHallComponent();
    }


    getSupersForComponent(type){
        var temp = [];
        this.supers.forEach(item => {
            if (item.type === type) {
                temp.push(item);
            }
        });

        return temp;
    }

}