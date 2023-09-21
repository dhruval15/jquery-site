$('#header-import').html(header);
$('#footer-import').html(footer);

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// Page load first time
$('.datapush').find(function () {
    var catProducts = [];
    let test1 = params.brand ?? '';
    let test = params.category ?? '';
    $.getJSON('https://dummyjson.com/products/', function (data) {
        data.products.forEach(product => {
            if (product.category === test || product.brand === test1) {
                catProducts.push(product)
            }
        })
        displayProds(catProducts);
    });
});

$('.dropdown-item').click(function () {
    console.log('hell');
    show.forEach(api => {
        let test = params.category ?? '';
        let test1 = params.brand ?? '';
        var catProducts = [];
        api.forEach(function (product) {
            if (product.category === test || product.brand === test1) {
                //append in products arr cartProducts
                catProducts.push(product)
            }
        });
        displayProds(catProducts);
    })
});
