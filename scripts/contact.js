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

//somehow store main content from home
const home = document.body.querySelector('div.home');

//Creation of heading element
const heading = createElementWithText('h2', 'Contact Lunar Base');

//creation of paragraph element
const contactDescription = 'Email us through our satelite based communications and we will get back to you as soon as your message has been relayed';
const description = createElementWithText('p', contactDescription);

//create form element
const contactForm = document.createElement('form');
contactForm.setAttribute('action', './submission.php');
contactForm.setAttribute('method', 'GET');
//create input element for name
const fieldset = document.createElement('fieldset');

const legend = createElementWithText('legend', 'Contact');
fieldset.appendChild(legend);

const inputElements = ['Email', 'Subject', 'Message'];

for (let i = 0; i < inputElements.length; i++) {
  const element = inputElements[i];
  const label = createElementWithText('label', `${element}:`);
  const lineBreak = document.createElement('br');

  const value = element.toLowerCase();
  const input = value !== 'message' ? document.createElement('input') : document.createElement('textarea');

  if (value === 'email' && input.nodeName === 'INPUT') {
    input.setAttribute('type', value);
  } 
  if (value !== 'email' && input.nodeName === 'INPUT') {
    input.setAttribute('type', 'text');
  }
  if (input.nodeName === 'TEXTAREA') {
    input.setAttribute('maxlength', '500');
  } else {
    input.setAttribute('maxlength', '30');
  }
  
  input.setAttribute('name', value);
  input.setAttribute('required', 'required')
  label.appendChild(input);
  fieldset.appendChild(label);
  fieldset.appendChild(lineBreak);
}
contactForm.appendChild(fieldset);

const formContainer = createFormContainerWithChildren(heading, description, contactForm);
formContainer.setAttribute('class', 'contact');

const contactButton = document.querySelector('.contactButton');
const main = document.querySelector('main');
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