const body = document.querySelector('body'),
      mode = document.querySelector('.mode_switch'),
      h1 = document.querySelectorAll('h1'),
      h2 = document.querySelectorAll('.h2'),
      p = document.querySelectorAll('p'),
      aboutMe = document.querySelector('.about_me'),
      skills = document.querySelector('.skills'),
      sites = document.querySelector('.sites'),
      contactMe = document.querySelector('.contact_me');


mode.addEventListener('click', () => {

    mode.classList.toggle('mode_switch_light');
    body.classList.toggle('light_background');
    body.classList.toggle('light_text');
    
    for (var i=0; i<h1.length; i++)
        h1[i].classList.toggle('identity_light');

    for (var l = 0; l < h1.length; l++)
        h1[l].classList.toggle('sahdow');

    for (var k = 0; k<h2.length; k++)
        h2[k].classList.toggle('light_text');
})

window.addEventListener('scroll', function (event) {
    var scroll = this.scrollY;
    console.log(scroll)
})

aboutMe.addEventListener('click', ()=> {
    document.getElementById('about_me').scrollIntoView();
})

skills.addEventListener('click', () => {
    document.getElementById('skills').scrollIntoView();
})

sites.addEventListener('click', () => {
    document.getElementById('sites').scrollIntoView();
})

contactMe.addEventListener('click', () => {
    document.getElementById('contact_me').scrollIntoView();
})