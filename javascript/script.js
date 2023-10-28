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
    if (!selectedLanguage.toLowerCase() == 'en') {
        window.location.href = `/lang/en/${currentPage}`;
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    } else {
        window.location.href = `/lang/${selectedLanguage.toLowerCase()}/${currentPage}`;
    }
});

const projectMain = document.getElementById('project-main');

projectMain.addEventListener('click', function () {
    var lan = window.location.pathname.split('/')[3];
    window.location.replace("https://hammershlag.github.io/lang/"+lan+"/projects/projectsMain.html");
});
