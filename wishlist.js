$('#header-import').html(header);
$('#footer-import').html(footer);

var wishlistProducts = [];
function handleWishList(id, isWishList) {
    console.log('id', isWishList);
    let isDeleted = false
    if (wishlistProducts.length === 0) {
        // console.log("show", show[0]);
        show[0].forEach(api => {
            console.log("id:",id);
            if (api.id == id) {
                // console.log(api);
                wishlistProducts.push(api)
            }
        })
    } else {
        wishlistProducts.forEach((api, index) => {
            if (api.id == id) {
                console.log(api, index);
                wishlistProducts.splice(index, 1)
                isDeleted = true;
            }
        })
        if (!isDeleted) {
            show[0].forEach(api => {
                if (api.id == id) {
                    wishlistProducts.push(api)
                    isDeleted = false;
                }
            })
        }
    }
    console.log(isWishList);
    if (isWishList) displayProds(wishlistProducts, true);
};
$('.wish').click(function () {
    console.log('hello');
    displayProds(wishlistProducts, true);
});