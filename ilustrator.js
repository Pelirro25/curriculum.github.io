document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlay-image');

    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            overlayImage.src = item.src;
            overlay.classList.add('active');
        });
    });

    overlay.addEventListener('click', function () {
        overlay.classList.remove('active');
    });
});
