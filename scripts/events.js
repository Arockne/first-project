window.addEventListener('load', (e) => {
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