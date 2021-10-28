class LoadingComponent extends Component{
    
    constructor(appManager, parent){
        super(appManager, parent,'loadingComponent');
        this.title = h1({'innerHTML':'Loading', 'className':'loadingComponent_title'}, this.container, null)
    }
}