/*
    Here we have all the predefined tags to be easily used by the app 
*/ 
const div = (attributes, parent, children) => {
    return tag('div', attributes, parent, children);
}

const h1 = (attributes, parent, children) => {
    return tag('h1', attributes, parent, children);
}

const h2 = (attributes, parent, children) => {
    return tag('h2', attributes, parent, children);
}

const h3 = (attributes, parent, children) => {
    return tag('h3', attributes, parent, children);
}

const p = (attributes, parent, children) => {
    return tag('p', attributes, parent, children);
}

const input = (attributes, parent, children) => {
    return tag('input', attributes, parent, children);
}

const image = (attributes, parent, children) => {
    return tag('img', attributes, parent, children);
}

const tag = (type, attributes, parent, children) => {
    var element = document.createElement(type);
    
    if (parent !== null && parent !== undefined && parent !== ''){
        parent.appendChild(element)
    }
    
    if(children !== null){
        children.forEach(child => {
            element.appendChild(child)
        });
    }

    for(const attribute in attributes){
        //console.log(attribute);

        // using bracket notation to fill the object
        element[attribute] = attributes[attribute];
    }
    
    return element;
}