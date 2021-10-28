class SuperDetailsComponent extends Component {
    constructor(appManager, parent){
        super(appManager, parent, 'superDetailsComponent');
        //this.hide();
        this.model = null;

        this.fade = div({'className': 'superDetailsComponent_fade' }, this.container, null);
        this.dataContainer = div({'className':'superDetailsComponent_data' }, this.container, null);
        this.dataContainer.style.transform = 'translate(' + window.innerWidth+ 'px, 0px)';
    }

    clean(){
        this.dataContainer = '';
    }

    show(model){
        
        this.container.classList.remove('hide');
        this.container.hidden = false;

        this.model = model;
        //this.clean();

        this.imageContainer = div({'className':'superDetailsComponent_imageContainer'}, this.dataContainer, null);
        var img = image({'src': 'images/' + this.model.image, 'className': 'superDetailsComponent_image'}, this.imageContainer, null);
        
        this.name = h2({'innerHTML':this.model.name, 'className': this.model.type === 1 ? 'superComponent_heroe' : 'superComponent_villain'}, this.container, null);

        this.textContainer = div({'className':'superDetailsComponent_textContainer'}, this.dataContainer, null);
        this.emailTitle = p({'innerHTML':'email:'}, this.textContainer, null);
        this.email = p({'innerHTML':this.model.email, 'className':'superDetailsComponent_text'}, this.textContainer, null);
        
        this.textContainer = div({'className':'superDetailsComponent_textContainer'}, this.dataContainer, null);
        this.phoneTitle = p({'innerHTML':'phone:'}, this.textContainer, null);
        this.phone = p({'innerHTML':this.model.phone, 'className':'superDetailsComponent_text'}, this.textContainer, null);

        this.textContainer = div({'className':'superDetailsComponent_textContainer'}, this.dataContainer, null);
        this.levelTitle = p({'innerHTML':'level:'}, this.textContainer, null);
        this.level = p({'innerHTML':this.model.level, 'className':'superDetailsComponent_text'}, this.textContainer, null);


        this.biography = p({'innerHTML':this.model.biography, 'className':'superDetailsComponent_biography'}, this.dataContainer, null);

        this.hireBtn = div({'innerHTML':'HIRE', 'className':'superDetailsComponent_hireBtn'}, this.dataContainer, null);

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