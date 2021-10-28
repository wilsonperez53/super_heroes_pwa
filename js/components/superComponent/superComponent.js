class SuperComponent extends Component {
    constructor(appManager, parent, model) {
        super(appManager, parent, 'superComponent');
        this.model = model;
        this.imageContainer = div({'className':'superComponent_imageContainer'}, this.container, null);
        var img = image({'src': 'images/' + this.model.image, 'className': 'superComponent_image'}, this.imageContainer, null);
        
        this.infoContainer = div({'className':'superComponent_infoContainer'}, this.container, null);

        this.name = h2({'innerHTML':this.model.name, 'className': this.model.type === 1 ? 'superComponent_heroe' : 'superComponent_villain'}, this.infoContainer, null);

        this.textContainer = div({'className':'superComponent_textContainer'}, this.infoContainer, null);
        this.emailTitle = p({'innerHTML':'email:'}, this.textContainer, null);
        this.email = p({'innerHTML':this.model.email, 'className':'superComponent_text'}, this.textContainer, null);
        
        this.textContainer = div({'className':'superComponent_textContainer'}, this.infoContainer, null);
        this.phoneTitle = p({'innerHTML':'phone:'}, this.textContainer, null);
        this.phone = p({'innerHTML':this.model.phone, 'className':'superComponent_text'}, this.textContainer, null);

        this.textContainer = div({'className':'superComponent_textContainer'}, this.infoContainer, null);
        this.levelTitle = p({'innerHTML':'level:'}, this.textContainer, null);
        this.level = p({'innerHTML':this.model.level, 'className':'superComponent_text'}, this.textContainer, null);

        this.container.onclick = this.onClick.bind(this);
    }

    onClick(){
        this.appManager.uiManager.showSuperDetailsComponent(this.model);
    }
}