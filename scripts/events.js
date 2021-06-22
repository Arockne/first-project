window.addEventListener('load', (e) => {
  
  const mainContent = () => document.querySelector('main div');

  const main = document.querySelector('main');
  const home = document.body.querySelector('.home');
  const contact = completedContactContent();
  const workInProgress = createElementWithText( 'div', 'Currently under construction');
  workInProgress.style.textAlign = 'center';
  workInProgress.style.fontSize = '50px';
  
  const homeButton = document.querySelector('.homeButton');
  homeButton.addEventListener('click', function appendHome() {
    mainContent().remove();
    main.appendChild(home);
  })

  const staffButton = document.querySelector('.staffButton');
  staffButton.addEventListener('click', function appendStaff() {
    mainContent().remove();
    main.appendChild(workInProgress);
  })

  const articleButton = document.querySelector('.articleButton');
  articleButton.addEventListener('click', function appendArticle() {
    mainContent().remove();
    main.appendChild(workInProgress);
  })

  const contactButton = document.querySelector('.contactButton');
  contactButton.addEventListener('click', function appendContact() {
    mainContent().remove();
    main.appendChild(contact);
    
    const form = document.querySelector('form');
    form.addEventListener('submit', function onSubmit() {
      mainContent().remove();
      main.appendChild(workInProgress);
    })
  })
})