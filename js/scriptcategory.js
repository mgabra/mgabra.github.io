let relateproduct = document.querySelector('.relat');
let productshow = document.querySelector('.show');




function relatedproduct()
{
    let y = Math.ceil(Math.random()*10);
    let z = y+4;
    let productUI = product.slice(y,z).map((x) => {
    return `
    <div class="col-3" >
    <img src="${x.image}" alt="" onclick="details(${x.id});">
    <h4>${x.title}</h4>
    <div class="rating">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star-o"></i>
    </div>
    <p>Rs${x.price}</p>
   </div>
    `});
    relateproduct.innerHTML = productUI;
    }
    relatedproduct();
    drawCardProductUI();

    function details(a)
    {   let i = a-1;
       let productUI = `
            <div class="col-6">
                    <img src="${product[i].image}" width="100%"  id="show-image" >
                    <div class="row-2">
                        <div class="col-4">
                            <img src="${product[i].image}" class="sm-image" onclick="imageview(0);" >
                        </div>
                        <div class="col-4">
                            <img src="${product[i].image}" class="sm-image" onclick="imageview(1);">
                        </div>
                        <div class="col-4">
                            <img src="${product[i].image}" class="sm-image" onclick="imageview(2);">
                        </div>
                        <div class="col-4">
                            <img src="${product[i].image}" class="sm-image" onclick="imageview(3);">
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <p>Home / SweatShirt</p>
                    <h1>${product[i].title}</h1>
                    <p class="price">Rs.${product[i].price}</p>
                    <form  action="products.html"id ="cartform" onsubmit="drawCardProductUI();" method="GET">
                        <select name="size" id="size"required>
                            <option value="">select size</option>
                            <option value="XXL">XXL</option>
                            <option value="XL">XL</option>
                            <option value="L">L</option>
                            <option value="M">M</option>
                            <option value="S">S</option>
                        </select><br>
                        <input class="Pieces-count" id="Pieces-count" type="number" name="count" min="1" value="0"  pattern="^[1-9]{1}$" required>
                        <input class="cart-btn" id ="cart-btn" type="submit" value="Add to cart" >
                        
                     </form> 
                    <h3>Product details</h3>
                    <i class="fa fa-indent"></i>
                    <p>
                        ${product[i].description}</p>
                </div> 
        `
        productshow.innerHTML = productUI;
    }
    
    
        
       
            function imageview(a)
            {
                var show_image = document.getElementById("show-image");
                var small_image = document.querySelectorAll('.sm-image');
                show_image.src = small_image[a].src;
                
            }