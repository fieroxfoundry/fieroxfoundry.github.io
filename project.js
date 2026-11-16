const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const prevBtn = document.getElementById('lightbox-prev');
const nextBtn = document.getElementById('lightbox-next');
const photos = Array.from(document.querySelectorAll('.photo-stack img'));
let currentIndex = 0;

function showPhoto(index) {
    currentIndex = (index + photos.length) % photos.length;
    lightboxImg.src = photos[currentIndex].src;
}

// Open de lightbox bij klikken op een foto
photos.forEach((photo, index) => {
    photo.addEventListener('click', () => {
        showPhoto(index);
        lightbox.style.display = 'flex';
    });
});

// Klikken op de pijltjes
prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showPhoto(currentIndex - 1);
});

nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showPhoto(currentIndex + 1);
});

// Sluit alleen als je naast de foto/knoppen op de achtergrond klikt
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Toetsenbord-navigatie
document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
        if (e.key === 'Escape') {
            lightbox.style.display = 'none';
        } else if (e.key === 'ArrowRight') {
            showPhoto(currentIndex + 1);
        } else if (e.key === 'ArrowLeft') {
            showPhoto(currentIndex - 1);
        }
    }
});