class PowerInputComponent extends Component {
    constructor(appManager, parent, placeholder, label, error, type, removeCallback){

        super(appManager, parent, 'powerInputComponent');
        this.id = -1;
        this.inputContainer = div({'className':'powerInputComponent_container'}, this.container, null);
        this.input = input({'type': type, 'placeholder':placeholder, 'className':'powerInputComponent_input'}, this.inputContainer, null);
        this.removeBtn = div({'innerHTML':'X','className':'powerInputComponent_removeBtn',
                                'onclick':this.onRemoveBtn.bind(this)},this.inputContainer, null);

        this.error = p({'innerHTML': error, 'className':'powerInputComponent_error'}, this.container, null);
        this.removeCallback = removeCallback;
    }

    onRemoveBtn(){
        this.container.parentElement.removeChild(this.container);
        this.removeCallback(this);
        
    }
    showError(){
        //this.label.classList.add('powerInputComponent_label_error');
        this.input.classList.add('powerInputComponent_input_error');
        this.error.classList.remove('hide');
    }
    
    hideError(){
        //this.label.classList.remove('powerInputComponent_label_error');
        this.input.classList.remove('powerInputComponent_input_error');
        this.error.classList.add('hide');
    }

    validate(){
        var value = this.input.value;
        if(value === ''){
            this.showError();
            return false;
        }

        this.hideError();
        return true;
    }

    getValue(){
        var value = this.input.value;
        if(this.type === 'number'){
            return Number(value);
        }
        return value;
    }

    clean(){
        debugger;
        this.container.parentElement.removeChild(this.container);
    }
}