document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelector('.btn').addEventListener('click', (event) => {
        event.preventDefault();
        const targetSection = document.querySelector('#case-study');
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    
    const popupModal = document.getElementById('image-popup');
    const popupImg = document.getElementById('popup-img');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.popup-close');

 
    document.querySelectorAll('.popup-trigger').forEach(img => {
        img.addEventListener('click', function() {
            popupModal.style.display = 'block';
            popupImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    
    closeBtn.addEventListener('click', () => {
        popupModal.style.display = 'none';
    });

    
    popupModal.addEventListener('click', (e) => {
        if (e.target == popupModal) {
            popupModal.style.display = 'none';
        }
    });
});
