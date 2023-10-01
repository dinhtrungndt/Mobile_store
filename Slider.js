let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("Img-Back-Next");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}
window.addEventListener('load', function(e) {
    const userLogin = store.parseUser()
    if (userLogin && userLogin.getRole() === 'admin') {

    } else {
        window.location.href = 'login.html'
    }
})