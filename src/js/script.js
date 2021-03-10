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
})