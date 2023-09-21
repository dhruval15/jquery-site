var show = [];
var cartProducts = [];
var wishlistProducts = [];
var product;
let scripts = `<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="style.css" rel="stylesheet" type="text/css">

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet">
<title>Bootstrap Example</title>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
    integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />


<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/svg-with-js.min.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
    integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
<link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
    integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />

<title>Document</title>
<link rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css">

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"
    integrity="sha512-pumBsjNRGGqkPzKHndZMaAG+bir374sORyzM3uulLV14lN5LyykqNk8eEeUlUkB3U0M4FApyaHraT65ihJhDpQ=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"> </script>
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>`;

var header = `<header class="sticky-top bg-white container-fluid s-pad">
<nav class="navbar navbar-expand-lg  d-flex justify-content-between ">
    <div class="container-fluid ">
        <div class="d-flex">
            <img class="img1 bg-transparent pe-3" src="shop.png">
        </div>
        <button class="navbar-toggler down position-absolute order-3 border-0 bg-light ms-3 end-0 text-white">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="d-flex">
            <div class="collapse navbar-collapse work mx-4" id="navbarSupportedContent" data-bs-backdrop="true">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item pe-4 py-4">
                        <a class="nav-link activehome home f-szie redirect" aria-current="page"
                            href="index.html">HOME</a>
                    </li>

                    <li class="nav-item item-drop py-4 dropdown pe-4 position-relative">
                        <a class="nav-link home f-szie" href="#" role="button" aria-expanded="false">
                            CATEGORY
                            <div class="position-absolute"></div>
                        </a>


                        <ul class="dropdown-menu position-absolute m-0"
                            style="top: 86px;border-top: 3px solid #9F78FF;">
                            <li><a class="dropdown-item redirect" data-category="smartphones"
                                    href="category.html?category=smartphones">Smartphones</a></li>
                            <li><a class="dropdown-item redirect" data-category="laptops"
                                    href="?category=laptops">Laptops</a></li>

                            <li><a class="dropdown-item redirect" data-category="fragrances"
                                    href="?category=fragrances">Fragrances</a>
                            </li>
                            <li><a class="dropdown-item redirect" data-category="skincare"
                                    href="?category=skincare">Skincare</a>
                            </li>
                            <li><a class="dropdown-item redirect" data-category="groceries"
                                    href="?category=groceries">Groceries</a>
                            </li>
                        </ul>
                    </li>


                    <li class="nav-item item-drop dropdown pe-4 py-4">
                        <a class="nav-link f-szie home" href="#" role="button" aria-expanded="false">
                            BRAND
                        </a>
                        <ul class="dropdown-menu" style="top: 86px;border-top: 3px solid #9F78FF;">
                            <li><a class="dropdown-item redirect" data-brand="Apple" href="brand.html?brand=Apple">Apple</a>
                            </li>
                            <li><a class="dropdown-item redirect" data-brand="OPPO" href="brand.html?brand=OPPO">OPPO</a>
                            </li>
                            <li><a class="dropdown-item redirect" data-brand="Samsung"
                                    href="brand.html?brand=smasung">Samsung</a></li>
                            <li><a class="dropdown-item redirect" data-brand="Huawei" href="brand.html?brand=Huawei">Huawei</a>
                            </li>
                            <li><a class="dropdown-item redirect" data-brand="Infinix"
                                    href="brand.html?brand=Infinix">Infinix</a></li>
                            <li><a class="dropdown-item redirect" data-brand="HP Pavilion"
                                    href="brand.html?brand=HP Pavilion">HP
                                    Pavilion</a>
                            </li>
                            <li><a class="dropdown-item redirect" data-brand="Dry Rose" href="brand.html?brand=Dry Rose">Dry
                                    Rose</a>
                            </li>
                            <li><a class="dropdown-item redirect " data-brand="Flying Wooden"
                                    href="brand.html?brand=Flying Wooden">Flying
                                    Wooden</a></li>
                            <li><a class="dropdown-item redirect" data-brand="Golden" href="brand.html?brand=Golden">Golden</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item pe-4 py-4">
                        <a class="nav-link wish redirect f-szie home" href="wishlist.html">WISHLIST</a>
                    </li>
                    <li class="nav-item pe-4 py-4">
                        <a class="cart2 nav-link redirect home f-szie" href="#cart">CART</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="d-flex align-items-center flex-wrap me-5">
            <label class="px-1 text-dark" for="">Dhruval</label>
            <i class="fa-solid fa-user ps-1 fa-21x"></i>
        </div>
    </div>
</nav>
</div>
</header>`;

var footer = `<footer class="text-center text-lg-start text-white mb-2 ">
<div class="categories-area">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
                <img src="services1.svg" class="pb-4">
                <h5 class="text-dark">Fast & Free delivery</h5>
                <p style="color: #57667e;">Free delivery on all products</p>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <img src="services2.svg" class="pb-4">
                <h5 class="text-dark">Secure services</h5>
                <p style="color: #57667e;">Provide securities on all payment</p>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <img src="services3.svg" class="pb-4">
                <h5 class="text-dark">Ease transaction</h5>
                <p style="color: #57667e;">Diffrent paymnet option provided</p>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <img src="services4.svg" class="pb-4">
                <h5 class="text-dark">24*7</h5>
                <p style="color: #57667e;">Service available at 24 hours</p>
            </div>
        </div>
    </div>
</div>
<section class="d-flex justify-content-between p-3 pt-5" style="background-color: #e6e7ec">
    <div class="d-flex w-100 justify-content-between">


    </div>
</section>
<section class="pt-5" style="background: #17253f;">
    <div class="row mt-3 justify-content-between">
        <div class="col-md-6 col-lg-8 col-xl-3 col-sm-12 mb-2 ps-5">
            <h6 class="text-uppercase text-start">bizzcorpy</h6>
            <hr class="mb-4 mt-0 mx-2" style="width: 60px; background-color: #fff; height: 2px;" />
            <p class="pb-3 text-start" style="color:#57667e;">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit fuga rerum voluptates iusto
                dignissimos nam beatae, perferendis enim. Explicabo, adipisci.
            </p>
            <div class="d-flex flex-wrap mb-5">
                <div>
                    <a href="" class=" me-3">
                        <i class="text-white fa-brands fa-google fs-4"></i>
                    </a>
                </div>
                <div>
                    <a href="" class=" me-3">
                        <i class="text-white fa-brands fa-instagram fs-4"></i>
                    </a>
                </div>
                <div>
                    <a href="" class=" me-3">
                        <i class="text-white fa-brands fa-linkedin fs-4"></i>
                    </a>
                </div>
                <div>
                    <a href="" class="me-3">
                        <i class="text-white fa-brands fa-twitter fs-4"></i>
                    </a>
                </div>
                <div>
                    <a href="" class=" me-3">
                        <i class="text-white fa-brands fa-facebook fs-4"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3 col-sm-12 mb-2 ps-5">
            <h6 class="text-uppercase text-start">Products</h6>
            <hr class="mb-4 mt-0 " style="width: 60px; background-color: #fff; height: 2px;" />
            <p class="text-start ">
                <a href="#" class="font-color text-decoration-none">bootstrap</a>
            </p>
            <p class="text-start ">
                <a href="#" class="text-start font-color text-decoration-none">Wordpress</a>
            </p>
            <p class="text-start ">
                <a href="#" class="text-start font-color text-decoration-none">tailwind</a>
            </p>
        </div>
        <div class="col-md-6 col-xl-3 col-lg-8 col-sm-12  mb-2 ps-5">
            <h6 class="text-uppercase text-start">Useful links</h6>
            <hr class="mb-4 mt-0 mx-3" style="width: 60px; background-color: #fff; height: 2px;" />
            <p class="text-start ">
                <a href="#" class="font-color text-decoration-none">Become an Affiliate</a>
            </p>
            <p class="text-start ">
                <a href="#" class="font-color text-decoration-none">Shipping rates</a>
            </p>
            <p class="text-start ">
                <a href="#" class="font-color text-decoration-none">Work for us</a>
            </p>
            <p class="text-start ">
                <a href="#" class="font-color text-decoration-none">Order Now</a>
            </p>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3 col-sm-12 mb-2 ps-5">
            <h6 class="text-uppercase text-start">Contact</h6>
            <hr class="mb-4 mt-0  mx-1" style="width: 60px; background-color: #fff; height: 2px;" />
            <p class="d-flex flex-wrap text-start font-color">
                <i class="fa-solid fa-house me-2 "></i>Ahmedabad,Gujarat
            </p>
            <p class="text-start font-color">
                <i class="fa-solid fa-envelope me-2 "></i><a href=""
                    class="pe-auto text-decoration-none font-color">abc@gmail.com</a>
            </p>
            <p class="text-start font-color">
                <i class="fa-solid fa-phone me-2 "></i>+1 12345
            </p>
            <p class="text-start font-color">
                <i class="fa-solid fa-print me-2 "></i>+1 01234
            </p>
        </div>

    </div>
    <div class="text-center p-3 font-color">
        &copy;2023 Copyright:
        <a class=" text-decoration-none" href="">wwww.bizzcorpy.com</a>
    </div>
</section>

</footer>`;

let headTag = document.getElementsByTagName('head');
headTag[0].innerHTML = scripts;

$('.down').click(function () {
    $('.work').slideToggle();
    // $('body').addClass("remove-scrolling");
});
document.querySelectorAll('.redirect').forEach(n => n.addEventListener('click', () => {
    $('.work').slideToggle();
    // $('body').removeClass("remove-scrolling");
}));

$.getJSON('https://dummyjson.com/products/', function (data) {
    let productList = data.products;
    for (let i in productList) {
        productList[i].wishlist = 0;
        productList[i].quantity = 1;
        show.push(productList)
    }
});

function displayProds(products, isWishList) {
    console.log("workinggg....");
    $(".datapush").empty();
    // $(".background").empty();
    for (var i = 0; i < products.length; i++) {
        product = products[i];
        let total = 5;
        var s1 = product.rating;
        const starPercentage = (s1 / total) * 100;
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}`;

        let car = '<div class="col-sm-12 col-md-6 col-lg-4 g-3">'
        car += '<div class=""><div class="card border-0 object-fit">'
        car += '<img class="pic card-img-top" src=' + product.thumbnail + ' />'
        car += '<div class="card-body>'
        car += '<div class="card-title fw-bolder">' + product.title + '</div>'
        car += '<div class="card-text ms-3"><span class="price text-success me-2">'
        car += '₹ ' + product.price + ' </span>'
        car += '<span class="discount "> ' + product.discountPercentage + ''
        car += '<span class="badge">'
        car += '<i class="fa-solid fa-percent fs-6 discount"></i></span></span></div>'
        car += '<div class="d-flex card-footer justify-content-between">'
        car += '<div class="">'
        car += '<div class="stars-outer">'
        car += '<div class=" stars-inner"  style="width:' + starPercentageRounded + '%;">'
        car += '</div></div>'
        car += '<span class="number-rating ps-2">' + product.rating + '</span></div>'
        car += '<div class="color">'
        car += `<button class="wishlist border-0  bg-transparent text-color-blue " onclick="handleWishList(${product.id},${isWishList})" data-product-id=${product.id} >`
        car += '<i class="fa-solid fa-heart live"></i>'
        car += '</button>'
        car += `<button class="cart1 border-0 bg-transparent " onclick="pushCart(${product.id})" data-product-id=${product.id} `
        car += '><i class="fa-solid fa-cart-shopping"></i></div>'
        car += '</button></div></div></div></div></div></div>'
        car += '</div>'
        $('.datapush').append(car);
    }
}
