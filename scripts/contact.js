window.addEventListener('load', (e) => {
  const isValid = (input) => {
    return document.createElement(input).toString() != "[object HTMLUnknownElement]";
  }
  
  const createElementWithText = (element, text) => {
    if (!element && !text) {
      return null;
    }
    if (!isValid(element)) {
      return null;
    }
    const htmlElement = document.createElement(element);
    const textNode = document.createTextNode(text);
    htmlElement.appendChild(textNode);
    return htmlElement;
  }
  
  const createContainerWithChildren = (...children) => {
    const container = document.createElement('div');
    for (let child of children) {
      if (child.nodeType === 1) {
        container.appendChild(child);
      }
    }
    return container;
  }
  
  const setMaxLength = (input) => {
    if (input.nodeName === 'TEXTAREA') {
      input.setAttribute('maxlength', '500');
    } else {
      input.setAttribute('maxlength', '30');
    }
  }
  
  const setInputType = (value, input) => {
    if (value === 'email' && input.nodeName === 'INPUT') {
      input.setAttribute('type', value);
    } 
    if (value !== 'email' && input.nodeName === 'INPUT') {
      input.setAttribute('type', 'text');
    }
  }
  
  const setAttributesTo = (input ,value) => {
    input.setAttribute('name', value);
    input.setAttribute('required', 'required');
    input.setAttribute('id', value);
  }
  
  const createFieldsetWithInput = (inputElements) => {
    const fieldset = document.createElement('fieldset');
    const legend = createElementWithText('legend', 'Contact');
    fieldset.appendChild(legend);
    for (const element of inputElements) {
      
      const value = element.toLowerCase();
      const input = value !== 'message' ? document.createElement('input') : document.createElement('textarea');
      
      setInputType(value, input);
      setMaxLength(input);
      setAttributesTo(input, value);
      
      const label = createElementWithText('label', `${element}:`);
      label.appendChild(input);
      fieldset.appendChild(label);
      
      const lineBreak = document.createElement('br');
      fieldset.appendChild(lineBreak);
    }
    return fieldset;
  }
  
  const createFormWithAttributes = (action, method="GET") => {
    const form = document.createElement('form');
    form.setAttribute('action', action);
    form.setAttribute('method', method);
    return form;
  }
  
  const completedFormToFill = () => {
    const fieldset = createFieldsetWithInput(['Name', 'Email', 'Subject', 'Message']);
    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'TO THE MOON!');
    fieldset.append(submit);
    
    const form = createFormWithAttributes('./submission.php', 'GET');
    form.appendChild(fieldset);
    
    return form;
  }
  
  const completedContactContent = () => {
    const heading = createElementWithText('h2', 'Contact Lunar Base');
    const contactDescription = 'Email us through our satelite based communications and we will get back to you as soon as your message has been relayed';
    const description = createElementWithText('p', contactDescription);
    const form = completedFormToFill();
    const formContent = createContainerWithChildren(heading, description, form);
    formContent.setAttribute('class', 'contact');
    return formContent;
  }
  
  //Have heading be Developer
  //create links to my github and linkedin
  
  //may need to put event listeners into its own js file
  const main = document.querySelector('main');
  const home = document.body.querySelector('.home');
  const contact = completedContactContent();
  const contactButton = document.querySelector('.contactButton');
  contactButton.addEventListener('click', function() {
    const content = document.querySelector('main div');
    content.remove();
    main.appendChild(contact);
  })
  
  const homeButton = document.querySelector('.homeButton');
  homeButton.addEventListener('click', function() {
    const content = document.querySelector('main div');
    content.remove();
    main.appendChild(home);
  })
})