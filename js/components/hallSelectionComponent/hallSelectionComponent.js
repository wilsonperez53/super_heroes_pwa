class HallSelectionComponent extends Component {
    constructor(appManager, parent){
        super(appManager, parent, 'hallSelectionComponent');
        this.heroesBtn = div({
            'onclick': this.onHeroesBtn.bind(this),
            'innerHTML': 'Heroes',
            'className': 'hallSelectionComponent_heroesBtn'}, 
            this.container, null);
        this.villiansBtn = div({
            'onclick': this.onVilliansBtn.bind(this), 
            'innerHTML': 'Villians',
            'className': 'hallSelectionComponent_villiansBtn'
        }, this.container, null);
        //this.container.classList.add('hallSelectionComponent');
        //this.container.onclick = this.hide.bind(this);
    }

    onHeroesBtn(){
        //this.hide();
        this.appManager.uiManager.showSuperListComponent(1);
    }

    onVilliansBtn(){
        //this.hide();
        this.appManager.uiManager.showSuperListComponent(2);
    }
}