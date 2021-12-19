document.addEventListener('DOMContentLoaded', ClickBurger)

function ClickBurger(){
    const burger = document.querySelector('.header__burger');
    burger.addEventListener('click',event => AddClassMenu())
};

function AddClassMenu() {
    const menu = document.querySelector('.header__menu');
    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    const burger = document.querySelector('.header__burger');
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('lock')

    if(header.classList.contains('header_scroll')){
        header.classList.toggle('header_scroll');
    }
};

window.addEventListener('scroll', HeaderScroll);

function HeaderScroll(){
    const header = document.querySelector('.header');
    if (window.pageYOffset > 10) {header.classList.add('header_scroll');}
    else {header.classList.remove('header_scroll');}
}

let scroll = document.querySelector('#scroll');
scroll.addEventListener('click',() => {
    const attractions = document.querySelector('#attractions');
    attractions.scrollIntoView({behavior: "smooth"});
});

window.addEventListener('scroll',ActiveLink);

function ActiveLink() {
    var body = document.body.getBoundingClientRect();
    var welcome = document.querySelector('#welcome').getBoundingClientRect();
    var attractions = document.querySelector('#attractions').getBoundingClientRect();
    var tours = document.querySelector('#tours').getBoundingClientRect();
    var contacts = document.querySelector('#contacts').getBoundingClientRect();
    var link = document.links
    var windowY = window.pageYOffset+500
    console.log(windowY,welcome.bottom,attractions.top);
    if (windowY >= welcome.top-body.top && windowY < attractions.top-body.top){
        link[1].style.cssText='text-decoration:underline;';
    } else {link[1].style.cssText='text-decoration:none;';}

    if (windowY >= attractions.top-body.top && windowY < tours.top-body.top){
        link[2].style.cssText='text-decoration:underline;';
    } else {link[2].style.cssText='text-decoration:none;';}

    if (windowY >= tours.top-body.top && windowY < contacts.top-body.top){
        link[3].style.cssText='text-decoration:underline;';
    }else {link[3].style.cssText='text-decoration:none;';}

    if (windowY >= contacts.top-body.top){
        link[4].style.cssText='text-decoration:underline;';
    }else {link[4].style.cssText='text-decoration:none;';}
}
