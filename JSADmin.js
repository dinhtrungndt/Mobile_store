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


var product = document.getElementById('ID_products');
var arr = JSON.parse(localStorage.getItem('products'));
var inner = '';
for (var i = 0; i < arr.length; i++) {
    inner += `<li class="main-product">
    <div class="img-product ">
        <a href="Detail.html"><img class="img-prd" src=${arr[i].image} alt=""></a>
    </div>
    <div class="content-product">
        <h3 class="content-product-h3">${arr[i].name}</h3>
        <div class="content-product-deltals">
            <div class="price">
                <span class="money">${arr[i].price}</span>
            </div>
            <button type="button" class="btn btn-cart" id="Them" onclick="Them()">Thêm Vào Giỏ</button>
        </div>
    </div>
</li>`
}
product.innerHTML = inner;

function Click(event) {
    event.preventDefault();
    var inner2 = '';
    var Search = document.getElementById('Search').value;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].name.toLowerCase().includes(Search.toLowerCase())) {
            inner2 += `<li class="main-product">
        <div class="img-product ">
            <a href="Detail.html"><img class="img-prd" src=${arr[i].image} alt=""></a>
        </div>
        <div class="content-product">
            <h3 class="content-product-h3">${arr[i].name}</h3>
            <div class="content-product-deltals">
                <div class="price">
                    <span class="money">${arr[i].price}</span>
                </div>
                <button type="button" class="btn btn-cart" id="Them" onclick="Them()">Thêm Vào Giỏ</button>
            </div>
        </div>
    </li>`
        }
    }
    product.innerHTML = inner2;
}