window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');

    if(window.scrollY > 50) {
        header.classList.remove('header-tranparent');
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
        header.classList.add('header-tranparente');
    }
});