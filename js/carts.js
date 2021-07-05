let tableRows = document.querySelector('.tableRows');





function drawCardProductUI(allProducts = []) {
    let products = JSON.parse(localStorage.getItem('productsInCart')) || allProducts;
    
    let productUI = products.map((item) => {
        return `
                
                <tr>
                <td>
                    <div class="cart-info">
                        <img src="${item.image}">
                        <div>
                            <p>${item.title}</p>
                            
                            <a onclick="removeFromCard(${item.id})">remove</a>
                        </div>
                    </div>
                </td>
                <td></td>
                <td id="loop">${item.price}</td>
                </tr> `;
                
    });
    tableRows.innerHTML = productUI;
}
drawCardProductUI();




function collectTotal(){
    let productsInCart = localStorage.getItem('productsInCart');
    let tableTotalPrice = document.querySelector('.Milad');
    let generaltotelPrice = document.querySelector('.generaltotelPrice');
    
    if (productsInCart) {
        let items = JSON.parse(productsInCart);
        var totalPrice=0;    
        for(var i=0;i<items.length;i++){
            totalPrice += items[i].price
        }
        tableTotalPrice.innerHTML = totalPrice + " LE";
        generaltotelPrice.innerHTML = totalPrice + " LE";
    }
}



collectTotal();

function removeFromCard(id) {
    console.log(id);
    let productsInCart = localStorage.getItem('productsInCart')
    if (productsInCart) {
        let items = JSON.parse(productsInCart);

        let filteredItems = items.filter((item) => item.id !== id);

        localStorage.setItem('productsInCart', JSON.stringify(filteredItems));
        collectTotal();
        drawCardProductUI(filteredItems);
    }
}