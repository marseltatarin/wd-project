window.addEventListener('DOMContentLoaded', () => {
    const samplesItems = document.querySelectorAll('.samples_item');

    samplesItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.firstElementChild.classList.toggle('samples_eye_active');
        })
    });

    samplesItems.forEach(item => {
        item.addEventListener('mouseout', () => {
            item.firstElementChild.classList.toggle('samples_eye_active');
        })
    });
    
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })

})