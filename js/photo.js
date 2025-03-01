document.querySelectorAll('.gallery__list img').forEach(img => {
    img.addEventListener('click', () => {
        const fullScreenImage = document.createElement('div');
        fullScreenImage.classList.add('fullscreen');
        fullScreenImage.innerHTML = `
            <div class="overlay"></div>
            <img src="${img.src}" alt="Збільшене фото">
            <span class="close">&times;</span>
        `;
        document.body.appendChild(fullScreenImage);

        document.querySelector('.close').addEventListener('click', () => {
            fullScreenImage.remove();
        });

        document.querySelector('.overlay').addEventListener('click', () => {
            fullScreenImage.remove();
        });
    });
});
