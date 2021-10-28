class InputComponent extends Component {
    constructor(appManager, parent, placeholder, label, error, type){

        super(appManager, parent, 'inputComponent');
        this.type = type;
        this.label = p({'innerHTML': label, 'className':'inputComponent_label'}, this.container, null);
        this.input = input({'type': type, 'placeholder':placeholder, 'className':'inputComponent_input'}, this.container, null);
        this.error = p({'innerHTML': error, 'className':'inputComponent_error'}, this.container, null);
        
    }

    showError(){
        this.error.classList.remove('hide');
    }
    
    hideError(){
        this.error.classList.add('hide');
    }

    validate(){
        var value = this.input.value;
        if(value === ''){
            this.showError();
            return false;
        }
        return true;
    }

    getValue(){
        var value = this.input.value;
        if (this.type === 'number') {
            return Number(value);
        }
        return value; 
    }

    clean(){
        this.hideError();
        this.input.value = '';
    }
}