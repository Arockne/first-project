
//contact button
  //replace main content with a form
  //create multiple form elements
  //append the form into the main element
//in addition
  //insert linkedin link
  //insert personal github link

//somehow store main content from home
const home = document.body.querySelector('div.home');
console.log('Home:', home);

//Creation of heading element
const heading = document.createElement('h2');
const headingText = document.createTextNode('Contact Lunar Base');
heading.appendChild(headingText);

//creation of paragraph element
const pElement = document.createElement('p');
const contactDescription = 'Email us through our satelite based communications and we will get back to you as soon as your message has been relayed';
const pTextNode = document.createTextNode(contactDescription);
pElement.appendChild(pTextNode);
console.log(pElement);

//Contact button

//create form element
const contactForm = document.createElement('form');
//create input element for name
const textArea = document.createElement('textarea');
const lineBreak = document.createElement('br');
const inputElements = ['Email:', 'Subject:', 'Message:'];


//create input element for email
//create input element for subject
//create input element for message
//append name email subject and message to form



  