class AddSuperComponent extends Component {
    constructor(appManager, parent){
        super(appManager, parent, 'addSuperComponent');
        this.hide();
        this.model = null;

        /*this.nameLabel = p({'innerHTML': 'Name', 'className':'input_label'}, this.container, null);
        this.name = input({'type': 'text', 'placeholder':'Name'}, this.container, null);
        this.errorLabel = p({'innerHTML': 'Invalid Name', 'className':'error_label'}, this.container, null);
        */
       this.formContainer = div({'className':'addSuperComponent_formContainer'},this.container, null);

       this.title = h2({'innerHTML':'Add Character', 'className':'addSuperComponent_title'}, this.formContainer, null);
       this.name = new InputComponent(appManager, this.formContainer, 'Enter the name here','Name', 'Invalid name', 'text');
       this.secretIdentity = new InputComponent(appManager, this.formContainer, 'Enter the name here','Secret Identity', 'Invalid name', 'text');
       this.email = new InputComponent(appManager, this.formContainer, 'Enter email','Email', 'Invalid email', 'text');
       this.phone = new InputComponent(appManager, this.formContainer, 'Enter the phone number','Phone', 'Invalid number', 'number');
       this.biography = new InputComponent(appManager, this.formContainer, 'Biography','Biography', 'Please add text', 'text');
       this.age = new InputComponent(appManager, this.formContainer, 'Enter the age number','Age', 'Invalid age', 'number');
       this.level = new InputComponent(appManager, this.formContainer, 'Enter the level!','Level', 'Invalid number', 'number');
       this.level.input.max = 5;
       this.level.input.min = 1;
       this.level.input.value = 5;
       this.type = 1;

       this.typesContainer = div({'className':'addSuperComponent_typesContainer'},this.formContainer, null);
       
       this.heroesBtn = div({'innerHTML':'Heroes','className':'addSuperComponent_heroBtn',
                                'onclick':this.onHeroesBtn.bind(this)},this.typesContainer, null);
       this.villianBtn = div({'innerHTML':'Villians','className':'addSuperComponent_villianBtn',
                                'onclick':this.onVilliansBtn.bind(this)},this.typesContainer, null);
       
      
       this.addPowerBtn = div({'innerHTML':'Add Power','className':'addSuperComponent_addPowerBtn',
                                'onclick':this.onAddPowerBtn.bind(this)},this.formContainer, null);

       this.powersContainer = div({'className':'addSuperComponent_powersContainer'},this.formContainer, null);

       this.submitBtn = div({'innerHTML':'Submit','className':'addSuperComponent_submitBtn',
                                'onclick':this.onSubmitBtn.bind(this)},this.formContainer, null);
        this.powerInputs = [];

        this.onHeroesBtn();

        this.hide();
    
    }

    onSubmitBtn(){
        if(this.name.validate() && this.secretIdentity.validate() && this.email.validate() && this.phone.validate() && this.age.validate() && this.validatePowerInputs() ){
            var superModel = new Super(this.age.getValue(), 
                                        this.biography.getValue(),
                                        this.email.getValue(), 
                                        '',//this.image.getValue(),
                                        '',
                                        this.name.getValue(),
                                        this.phone.getValue(),
                                        this.getPowerInputValues(),
                                        this.secretIdentity.getValue(),
                                        this.type,
                                        this.level.getValue());
            this.appManager.netManager.sendSuper(superModel);
            this.clean();
        }
        //this.clean();
        //this.appManager.uima
    }

    onHeroesBtn(){
    this.type = 1;
       this.heroesBtn.classList.add('addSuperComponent_heroBtn_selected');
       this.villianBtn.classList.remove('addSuperComponent_villianBtn_selected');
    }
    onVilliansBtn(){
        this.type = 2;
        this.villianBtn.classList.add('addSuperComponent_villianBtn_selected');
        this.heroesBtn.classList.remove('addSuperComponent_heroBtn_selected');
    }  
    
    onAddPowerBtn(){
        //alert();
       var power = new PowerInputComponent(this.appManager, this.powersContainer, 'Enter the power', 'Name', 'Missing name', this.removeCallBack.bind(this));
       power.id = this.powerInputs.length
       this.powerInputs.push(power);
    }

    removeCallBack(power){
        this.powerInputs.splice(power.id, 1);
        for(let i = 0; this.powerInputs.length; i++){
            const element = this.powerInputs[i];
        }
    }

    validatePowerInputs(){
        for(let i = 0; i < this.powerInputs.length; i++){
            console.log(this.powerInputs[i]);
            let isValid = this.powerInputs[i].validate();
            if(!isValid) { 
                return false; 
            }
        }
        return true;
    }

    getPowerInputValues(){
        var values = [];
        for(let i = 0; i < this.powerInputs.length; i++){
            values.push(this.powerInputs[i].getValue());
        }
        return values;
    }

    clean(){
        this.name.clean();
        this.secretIdentity.clean();
        this.email.clean();
        this.phone.clean();
        this.biography.clean();
        this.age.clean();
        this.level.input.value = 5;
        this.type = 1;
        //this.removeCallback(this);
        for(let i = 0; i < this.powerInputs.length; i++){
            this.powerInputs[i].clean();
        }
        this.powerInputs = [];
    }
}