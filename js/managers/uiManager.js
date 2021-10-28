class UIManager {
    constructor(appManager){
        this.appManager = appManager;
        this.mainComponent = new MainComponent(appManager, document.body);
        this.isShowingSuperList = false;
        this.isShowingSuperDetails = false;
        this.isShowingAddSuperComponent = false;
        this.type = 0;
    }

    showSuperListComponent(type) {
        this.type = type;
        this.mainComponent.navigationBarComponent.showBackBtn();
        this.mainComponent.navigationBarComponent.showAddBtn();
        this.isShowingSuperList = true;
        this.mainComponent.hallSelectionComponent.hide();
        this.mainComponent.superDetailsComponent.hide();
        
        this.mainComponent.superListComponent.show(type);
    }

    onBackBtn(){
        if(this.isShowingSuperList) {
            this.mainComponent.navigationBarComponent.hideBackBtn();
            this.mainComponent.navigationBarComponent.hideAddBtn();
            this.mainComponent.superListComponent.hide();
            //this.mainComponent.superListComponent.clean();
            this.mainComponent.hallSelectionComponent.show();
        } else if (this.isShowingSuperDetails) {
            this.showSuperListComponent(this.type);
            this.isShowingSuperList = true;
            this.isShowingSuperDetails = false;
            //
            //this.mainComponent.hallSelectionComponent.hide();
        } else if (this.isShowingAddSuperComponent){
            this.isShowingSuperList = true;
            this.isShowingAddSuperComponent = false;
            this.mainComponent.addSuperComponent.hide();
            this.showSuperListComponent(this.type);
        }
    }

    onAddBtn(){
        this.mainComponent.addSuperComponent.show();
        this.mainComponent.superListComponent.hide();
        this.mainComponent.hallSelectionComponent.hide();
        this.mainComponent.superDetailsComponent.hide();
        this.mainComponent.superListComponent.hide();
        this.isShowingSuperList = false;
    }

    showHallComponent(){
        this.mainComponent.hallSelectionComponent.show();
        this.mainComponent.loadingComponent.hide();
    }

    showSuperDetailsComponent(model){
        this.isShowingSuperList = false;
        this.isShowingSuperDetails = true;
        this.mainComponent.hallSelectionComponent.hide();
        this.mainComponent.superListComponent.hide();
        this.mainComponent.superDetailsComponent.show(model);
        this.mainComponent.navigationBarComponent.hideAddBtn();
    }

    showSuperComponent(){
        this.isShowingSuperList = false;
        this.isShowingAddSuperComponent = true;
        this.mainComponent.addSuperComponent.show();
    }
    
    hideSuperComponent(){
        
    }
}