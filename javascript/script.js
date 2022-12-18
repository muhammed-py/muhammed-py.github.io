gsap.registerPlugin(ScrollTrigger);

const body = document.querySelector('body'),
      mode = document.querySelector('.mode_switch'),
      h1 = document.querySelectorAll('h1'),
      h2 = document.querySelectorAll('.h2'),
      p = document.querySelectorAll('p'),
      aboutMe = document.querySelector('.about_me'),
      skills = document.querySelector('.skills'),
      sites = document.querySelector('.sites'),
      contactMe = document.querySelector('.contact_me');

const menuBtn = document.querySelector('.menu-btn'),
    dropDownMenu = document.querySelector('.drop_down_menu');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        dropDownMenu.classList.remove('hidden_phone');
        menuOpen = true
    } else {
        menuBtn.classList.remove('open');
        dropDownMenu.classList.add('hidden_phone');
        menuOpen = false;
    }
});




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

    if (scroll >= 700 && scroll <= 1600) {
        aboutMe.classList.add('selected');
    } else {
        aboutMe.classList.remove('selected');
    }

    if (scroll >= 1600 && scroll <= 2400) {
        skills.classList.add('selected');
    } else {
        skills.classList.remove('selected');
    }

    if (scroll >= 2400 && scroll <= 3600) {
        sites.classList.add('selected');
    } else {
        sites.classList.remove('selected');
    }

    if (scroll >= 3600) {
        contactMe.classList.add('selected');
    } else {
        contactMe.classList.remove('selected');
    }
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

gsap.to('h1', {opacity:1, x:0, duration:1.5,})
gsap.to('h2', {opacity:1, y:0, duration:1.5,})




gsap.to('.about_me_animation', {
scrollTrigger: {
        trigger: '.about_me_animation',
    toggleActions: 'restart reverse none none',
    end: ' top top',
    scrub: 3,
},
opacity:1,
x:0,
duration: 1.5,
})

gsap.to('.skills_animation', {
    scrollTrigger: {
        trigger: '.skills_animation',
        toggleActions: 'restart pause reverse pause',
        end: ' top top',
        scrub: 3,
    },
    opacity: 1,
    x: 0,
    duration: 1.5,
})

gsap.to('.sites_animation', {
    scrollTrigger: {
        trigger: '.sites_animation',
        toggleActions: 'restart pause reverse pause',
        end: ' top top',
        scrub: 3,
    },
    opacity: 1,
    x: 0,
    duration: 1.5,
})

gsap.to('.contact_me_animation', {
    scrollTrigger: {
        trigger: '.contact_me_animation',
        toggleActions: 'restart pause reverse pause',
        end: ' top top',
        scrub: 3,
    },
    opacity: 1,
    x: 0,
    duration: 1.5,
})