document.addEventListener('DOMContentLoaded', init)

function init()  {
    const buttonToggleItems = document.getElementsByClassName('btn--toggle-items')

    if(buttonToggleItems.length === 0) {
        throw new Error('Кнопка не найдена')
    }

    const listItemsContainer = document.getElementsByClassName('tours__list')

    buttonToggleItems[0].addEventListener('click', (event) => handleToggleItemsButtonClick(listItemsContainer[0], event))
}

const handleToggleItemsButtonClick = (listItemsContainer, pointerEvent) => {
    const classForVisibleHiddenItems = 'tours_list--all-hidden-visible'

    if (pointerEvent.currentTarget.innerText === 'Больше туров') {
        pointerEvent.currentTarget.innerText = 'Скрыть туры'
        listItemsContainer.classList.add(classForVisibleHiddenItems)
    } else {
        pointerEvent.currentTarget.innerText = 'Показать больше'
        listItemsContainer.classList.remove(classForVisibleHiddenItems)
    }
}

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
