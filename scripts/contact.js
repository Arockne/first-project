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

const createFormContainerWithChildren = (...children) => {
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

const setNameAndRequiredAttribute = (input ,value) => {
  input.setAttribute('name', value);
  input.setAttribute('required', 'required');
}

const createFieldsetWithInput = (inputElements) => {
  const fieldset = document.createElement('fieldset');
  for (const element of inputElements) {
    
    const value = element.toLowerCase();
    const input = value !== 'message' ? document.createElement('input') : document.createElement('textarea');
    
    setInputType(value, input);
    setMaxLength(input);
    setNameAndRequiredAttribute(input, value);
    
    const label = createElementWithText('label', `${element}:`);
    label.appendChild(input);
    fieldset.appendChild(label);
    
    const lineBreak = document.createElement('br');
    fieldset.appendChild(lineBreak);
  }
  return fieldset;
}

//Creation of heading element
const heading = createElementWithText('h2', 'Contact Lunar Base');

//creation of paragraph element
const contactDescription = 'Email us through our satelite based communications and we will get back to you as soon as your message has been relayed';
const description = createElementWithText('p', contactDescription);

//create form element
const contactForm = document.createElement('form');
contactForm.setAttribute('action', './submission.php');
contactForm.setAttribute('method', 'GET');

const fieldset = createFieldsetWithInput(['Email', 'Subject', 'Message']);
const legend = createElementWithText('legend', 'Contact');
fieldset.appendChild(legend);


contactForm.appendChild(fieldset);

const formContainer = createFormContainerWithChildren(heading, description, contactForm);
formContainer.setAttribute('class', 'contact');


//probably could put nested div in main into a single variable so when we click home it removes and places it back in for better functionality
const main = document.querySelector('main');
const home = document.body.querySelector('div.home');
const contactButton = document.querySelector('.contactButton');
contactButton.addEventListener('click', function() {
  home.remove();
  main.appendChild(formContainer);
})

const homeButton = document.querySelector('.homeButton');
homeButton.addEventListener('click', function() {
  formContainer.remove();
  main.appendChild(home);
})
//tell each input element to have a maximum amount of characters
//append label elements into fieldset
//append fieldset into form
//append rest of elements in order into a div with a class of contact

//also need to add event listener when contact is pressed
  //remove the current home in main
  //append div with class of contact
//once form on lunar-base is successful refactor this page to use functions