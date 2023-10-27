const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    const yOffset = -60;
    window.scroll({
        top: targetElement.offsetTop + yOffset,
        behavior: 'smooth'
    });
}

const languageSelector = document.getElementById('language-selector');

languageSelector.addEventListener('change', function () {
    const selectedLanguage = this.value;
    const currentPage = window.location.pathname.split('/').pop();

    window.location.href = `/lang/${selectedLanguage.toLowerCase()}/${currentPage}`;
});
