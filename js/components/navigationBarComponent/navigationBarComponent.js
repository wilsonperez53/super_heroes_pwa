class NavigationBarComponent extends Component {
    constructor(appManager, parent) {
        super(appManager, parent, 'navigationBarComponent');

        this.backBtn = div({'innerHTML':'Back', 
                            'onclick':this.onBackBtn.bind(this),
                            'className':'navigationBarComponent_backBtn hide'}, this.container, null);
        this.addBtn = div({'innerHTML':'+', 
                            'onclick':this.onAddBtn.bind(this),
                            'className':'navigationBarComponent_addBtn hide'}, this.container, null);
                            
    }

    onBackBtn(){
        this.appManager.uiManager.onBackBtn();
    }

   

    showAddBtn() {
        this.addBtn.classList.remove('hide');
    }

    hideAddBtn() {
        this.addBtn.classList.add('hide');
    }

    showBackBtn() {
        this.backBtn.classList.remove('hide');
    }

    hideBackBtn() {
        this.backBtn.classList.add('hide');
    } 
    
    onAddBtn(){
        this.hideAddBtn();
        this.appManager.uiManager.showSuperComponent();
    }
}