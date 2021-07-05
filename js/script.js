// Define Product
let productDom = document.querySelector('.product');
let cartProductDom = document.querySelector('.carts-products div');
let cartCountDom = document.querySelector('.cartcountitems');
let shoppingCart = document.querySelector('.carts-products');
let cart = document.querySelector('.cart');

cart.addEventListener('click', openCartMenu);

function drawProductUI() {
    let productUI = product.map((item) => {
        return `
        <div class="col-4 product-item">
                <img src="${item.image}">
                <div class="product-item-description">
                    <h4>${item.title}</h4>
                    <!--<p>Lorem ipsum dolor sit amet, consectetur  nihil.</p>-->
                    <p style="color: black; margin-top: 10px;">${item.price} LE</p>
                </div>
                <div class="ration">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                
                <div class="product-item-action">
                    <button class="add-to-cart" onclick="addedToCard(${item.id})" >Buy Now &#8594</button>
                </div>
            </div> `;
    });
    productDom.innerHTML = productUI;
}
drawProductUI();

let adedItem = localStorage.getItem('productsInCart') ? JSON.parse(localStorage.getItem('productsInCart')) : [] ;


if(adedItem){
    adedItem.map(item =>{
        cartProductDom.innerHTML += `<p>${item.title}</p><hr> ` ;
    });
    cartCountDom.style.display="block"; 
    cartCountDom.innerHTML += adedItem.length;
}
function addedToCard(id){
    
    let choosenItem = product.find((item)=> item.id === id);
    cartProductDom.innerHTML += `<p>${choosenItem.title}</p><hr> ` ;

    adedItem = [...adedItem,choosenItem];
    localStorage.setItem('productsInCart',JSON.stringify(adedItem))

    let cartProductLength = document.querySelectorAll('.carts-products div p');
    cartCountDom.style.display="block";
    cartCountDom.innerHTML= cartProductLength.length;
    
}

function openCartMenu(){
    if(cartProductDom.innerHTML!=""){
        
        if(shoppingCart.style.display == "block"){
            shoppingCart.style.display = "none";
        }else{shoppingCart.style.display = "block";}
    }
    else{}
}