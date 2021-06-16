
//contact button
  //replace main content with a form
  //create multiple form elements
  //append the form into the main element
//in addition
  //insert linkedin link
  //insert personal github link

//somehow store main content from home
const home = document.body.querySelector('div.home');

//Creation of heading element
const heading = document.createElement('h2');
const headingText = document.createTextNode('Contact Lunar Base');
heading.appendChild(headingText);

//creation of paragraph element
const pElement = document.createElement('p');
const contactDescription = 'Email us through our satelite based communications and we will get back to you as soon as your message has been relayed';
const pTextNode = document.createTextNode(contactDescription);
pElement.appendChild(pTextNode);

//Contact button

//create form element
const contactForm = document.createElement('form');
contactForm.setAttribute('action', './submission.php');
contactForm.setAttribute('method', 'GET');
//create input element for name
const fieldset = document.createElement('fieldset');

const legend = document.createElement('legend');
const legendText = document.createTextNode('Contact');
legend.appendChild(legendText);
fieldset.appendChild(legend);

const lineBreak = document.createElement('br');
const inputElements = ['Email', 'Subject', 'Message'];

for (let i = 0; i < inputElements.length; i++) {
  const element = inputElements[i];
  const textNode = document.createTextNode(`${element}:`);
  const label = document.createElement('label');
  label.appendChild(textNode);
  console.log(label);

  
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
}
contactForm.appendChild(fieldset);

const formContainer = document.createElement('div');
formContainer.setAttribute('class', 'contact');
formContainer.appendChild(heading);
formContainer.appendChild(pElement);
formContainer.appendChild(contactForm);
//tell each input element to have a maximum amount of characters
//append label elements into fieldset
//append fieldset into form
//append rest of elements in order into a div with a class of contact

//also need to add event listener when contact is pressed
  //remove the current home in main
  //append div with class of contact
//once form on lunar-base is successful refactor this page to use functions