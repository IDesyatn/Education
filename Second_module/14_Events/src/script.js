'use strict';

window.addEventListener('DOMContentLoaded', () => {
    init();
})

function init () {
    const photos = document.getElementById('photos');
    const mainPhoto = document.getElementById('mainPhoto');
    const gallery = document.querySelectorAll('.gallery__slider-photo');
    const showAll = document.getElementById('showAll');
    const showAllPopup = document.getElementById('showAllPopup');
    const closePopup = document.getElementById('closePopup');
    const showAllPhoto = document.getElementById('showAllPhoto');
    let timerId;

    for (let i of gallery) {
        i.addEventListener('mouseover', () => {
            i.classList.add('smooth');
        })
        i.addEventListener('mouseout', () => {
            i.classList.remove('smooth');
        })
    }
    
    mainPhoto.src = gallery[0].src;

    showAll.addEventListener('click', () => {
        showPopup(showAllPopup);
        showPhoto(gallery, showAllPhoto);
    })

    closePopup.addEventListener('click', () => {
        hidePopup(showAllPopup);
        mainPhoto.src = showAllPhoto.src;
        clearTimeout(timerId);
    })

    photos.addEventListener('click', displayPhoto);

    function showPopup (element) {
        element.classList.remove('hideShowAllPopup');
    }

    function hidePopup (element) {
        element.classList.add('hideShowAllPopup');
    }

    function displayPhoto (event) {
        const image = event.target;
        const isPhoto = image.dataset.type === 'photo';
        if (!isPhoto) return;
        mainPhoto.src = image.src;
    }

    function showPhoto (gallery, showAllPhoto) {
        let i = 0;
        showAllPhoto.src = gallery[i].src;
        timerId = setInterval(() => {
            i++;
            showAllPhoto.src = gallery[i].src;
            if (i === gallery.length - 1) {
                i = -1;
            }
        }, 2000);
                
    }
}

module.exports = { init };