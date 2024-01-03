'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
    e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////
/////////////////////////////////////////////
// LECTURE
// Selecting Elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section')
// console.log(allSections);

// document.getElementById('section--1')
// const allButtons = document.getElementsByTagName('button')
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'))

// Creating and Inserting elements
// const message = document.createElement('div')
// message.classList.add('cookie-message')
// message.innerHTML = `we use cookied for improved functionality and analytics. <button class="btn
// btn--close-cookie">Got It!</button>`;

// // prepend and append have to choose one (cause cant be place once at a time)
// // header.prepend(message);
// // prepend add element to first child to parent element
// header.append(message)
// // apped add element to last child to parent element 

// // using clone node you can copy so it display twice
// // header.append(message.cloneNode(true))

// // header.before(message)
// // header.after(message)

// // DELETE Elements
// document.querySelector('.btn--close-cookie').addEventListener('click',function(){
//     message.remove();
//     // message.parentElement.removeChild(message);
// })

// // Styles
// message.style.backgroundColor = '#37383d'
// message.style.width = '120%'

// console.log(message.style.width);
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);
// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// // css Variables changer
// document.documentElement.style.setProperty('--color-primary','orangered')

// // Attributes (ID,CLASS,alt,src) 

// const logo = document.querySelector('.nav__logo')
// console.log(logo.alt);
// // console.log(logo.src);
// console.log(logo.className);
// console.log(logo.id);

// logo.alt = 'beautiful minimalist logo'

// // todo Non-standart
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company','Bankist')

// console.log(logo.getAttribute('src'))
// console.log(logo.src);


// const link = document.querySelector('.nav__link--btn')
// console.log(link.href);
// console.log(link.getAttribute('href'));

// // Data attributes
// console.log(logo.dataset.versionNumber);

// // Classes
// logo.classList.add('c')
// logo.classList.remove('c')
// logo.classList.toggle('c')
// logo.classList.contains('c')  //not includes

// dont use this !!!
// logo.className = 'jerry'


////////////////////////////////
////////////////////////////////

const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')

btnScrollTo.addEventListener('click',function(e){
    const s1coords = section1.getBoundingClientRect()
    console.log(s1coords);

    console.log(e.target.getBoundingClientRect());

    // console.log('Current scroll (X/Y)',window.pageXOffset,pageYoffset);

    console.log('height/width viewport', document.documentElement.clientHeight,
    document.documentElement.clientWidth);
    // todo scrolling
    // window.scrollTo(
        
    //     s1coords.left + window.pageXOffset
    //     ,s1coords.top + window.pageYOffset)
    // window.scrollTo({
    // left: s1coords.left + window.pageXOffset,
    // top: s1coords.top + window.pageYOffset,
    // behavior: 'smooth',})
    
    // modern way of using smooth behavior
    section1.scrollIntoView({behavior: 'smooth'})
    })




