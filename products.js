$('#header-import').html(header);
$('#footer-import').html(footer);

console.log('hyy');
$('.btnanimation').find(function () {
    console.log('hello');
    $.getJSON('https://dummyjson.com/products/', function (data) {
        displayProds(data.products);
        console.log(data.products);
    })
});