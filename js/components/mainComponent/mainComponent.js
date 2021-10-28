class MainComponent extends Component{
    constructor(appManager, parent, model){
        super(appManager,parent, 'mainComponent', model);
        this.loadingComponent = new LoadingComponent(appManager,this.container);
        //this.container.classList.add('mainComponent');
        this.navigationBarComponent = new NavigationBarComponent(appManager,this.container);
        this.hallSelectionComponent = new HallSelectionComponent(appManager,this.container);
        this.superListComponent = new SuperListComponent(appManager,this.container);
        this.superDetailsComponent = new SuperDetailsComponent(appManager,this.container);
        this.addSuperComponent = new AddSuperComponent(appManager,this.container);
    }
}