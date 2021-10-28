class SuperListComponent extends Component {
    constructor(appManager, parent) {
        super(appManager, parent, 'superListComponent');
        // this.title = p({}, this.container, null);
        //this.hide(); 
       
        this.fade = div({'className': 'superListComponent_fade' }, this.container, null);
        this.dataContainer = div({'className':'superListComponent_data' }, this.container, null);
        this.dataContainer.style.transform = 'translate(' + window.innerWidth+ 'px, 0px)';
    }

    clean(){ 
            while(this.dataContainer.firstChild) {
                this.dataContainer.removeChild(this.dataContainer.firstChild);
            }
    }

    show(type) {
        this.clean();
        this.container.classList.remove('hide');
        this.container.hidden = false;
        var supers = [];
        supers = this.appManager.dataManager.getSupersForComponent(type);
        supers.forEach(item => {
            var superComponent = new SuperComponent(this.appManager, this.dataContainer, item);
        });
        //gsap.to(this.container, {rotation: 27, x:100, duration: 1});
        gsap.to(this.fade, {opacity: 0, duration: 0.5});
        gsap.to(this.dataContainer, {x: 0, duration: 1, ease: "power.out", onComplete: this.onShowComplete.bind(this)});
    }

    onShowComplete(){ }

    hide(){
        gsap.to(this.fade, {opacity: 0, duration: 0.5});
        gsap.to(this.dataContainer, {x: window.innerWidth, ease: "power.out",  onComplete: this.onHideComplete.bind(this), duration: 1});
    }

    onHideComplete(){
        super.hide();
        //this.appManager.uiManager.showHallComponent();
    }
}