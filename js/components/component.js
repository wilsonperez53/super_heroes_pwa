class Component {
    constructor(appManager, parent, className){
        this.appManager = appManager;
        this.parent = parent;
        this.model = null;
        this.container = div({'className':className, 'id':className }, this.parent, null);

    }

    hide(){
        this.container.classList.add('hide');
        this.container.hidden = true;
    }

    show(){
        this.container.classList.remove('hide');
        this.container.hidden = false;
    }

    clean() {
        this.container.innerHTML = '';
    }
}