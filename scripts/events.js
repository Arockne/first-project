window.addEventListener('load', (e) => {
  
  const mainContent = () => document.querySelector('main div');

  const main = document.querySelector('main');
  const home = document.body.querySelector('.home');
  const contact = completedContactContent();
  
  const contactButton = document.querySelector('.contactButton');
  contactButton.addEventListener('click', function appendContact() {
    mainContent().remove();
    main.appendChild(contact);
  })
  
  const homeButton = document.querySelector('.homeButton');
  homeButton.addEventListener('click', function appendHome() {
    mainContent().remove();
    main.appendChild(home);
  })
})