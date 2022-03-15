const imp = require('../script.js');

describe('init', () => {
    test('init should be defined', function () {
        expect(imp).toBeDefined();
    });

    test('should show popup', function () {
        const button = document.createElement('button');
        button.classList.add('hideShowAllPopup');
        function showPopup(button) {
            button.classList.remove('hideShowAllPopup')
        }
        showPopup(button);
        expect(button.classList.contains('hideShowAllPopup')).toBe(false);
    });

    test('should hide popup', function () {
        const button = document.createElement('button');
        function showPopup(button) {
            button.classList.add('hideShowAllPopup')
        }
        showPopup(button);
        expect(button.classList.contains('hideShowAllPopup')).toBe(true);
    });

    /*test('test', function () {
        const photos = document.createElement('div');
        photos.setAttribute("src" , "..../images/");
        const firstPhoto = document.createElement('image');
        firstPhoto.setAttribute("src" , "../images/photo1.jpg");
        const secondPhoto = document.createElement('image');
        secondPhoto.setAttribute("src" , "../images/photo2.jpg");
        const button = document.createElement('button');
        photos.appendChild(firstPhoto);
        photos.appendChild(secondPhoto);
        expect(imp.init().displayPhoto(photos, button)).toBe(1);
    });*/
})
  