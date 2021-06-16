

const createElementWithText = function(element, text) {
  if (!element && !text) {
    return null;
  }
  const htmlElement = document.createElement(element);
  const textNode = document.createTextNode(text);
  htmlElement.appendChild(textNode);
  return htmlElement;
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

  const input = i !== 2 ? document.createElement('input') : document.createElement('textarea');

  const value = element.toLowerCase();

  //make the conditional more versatile using el.nodeName
  if (i === 0) {
    input.setAttribute('type', value);
    input.setAttribute('maxlength', '30');
  } else if (i === 1) {
    input.setAttribute('type', 'text');
    input.setAttribute('maxlength', '30');
  } else {
    input.setAttribute('maxlength', '500');
  }
  
  input.setAttribute('name', value);
  input.setAttribute('required', 'required')
  label.appendChild(input);
  fieldset.appendChild(label);
  fieldset.appendChild(lineBreak);
}
contactForm.appendChild(fieldset);

const formContainer = document.createElement('div');
formContainer.setAttribute('class', 'contact');
formContainer.appendChild(heading);
formContainer.appendChild(description);
formContainer.appendChild(contactForm);

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