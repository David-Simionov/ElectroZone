document.addEventListener("DOMContentLoaded", function(){
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get("id"));
    const product = products.find(p=>p.id===productId);
    if(!product){
        document.querySelector("main").innerHTML="<p>Product not found.</p>";
        return;
    }

    // ---------- Populiranje ----------
    document.getElementById("product-title").textContent = product.title;
    document.getElementById("product-brand").textContent = product.brand;
    document.getElementById("product-category").textContent = product.category;
    document.getElementById("product-price").textContent = `$${product.price.toFixed(2)}`;
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-image").alt = product.title;

    const specsDiv = document.getElementById("product-specifications");
    specsDiv.innerHTML = "<strong>Specifications:</strong>";
    const ul = document.createElement("ul");
    Object.entries(product.specifications).forEach(([k,v])=>{
        const li = document.createElement("li");
        li.textContent = `${k}: ${v}`;
        ul.appendChild(li);
    });
    specsDiv.appendChild(ul);

    // ---------- Wishlist ----------
    document.getElementById("add-to-wishlist").addEventListener("click", ()=>{
        const wishlistItem = {
            id: product.id,
            name: product.title,
            price: product.price.toFixed(2),
            brand: product.brand,
            image: product.image
        };
        window.addToWishlist(wishlistItem); // koristi globalnu funkciju iz script.js
    });

    // ---------- Cart ----------
    const btnCart = document.querySelector(".add-to-cart");
    btnCart.dataset.id = product.id;
    btnCart.addEventListener("click", ()=>{
        const cart = JSON.parse(localStorage.getItem("cart")||"[]");
        const existing = cart.find(i=>i.id===product.id);
        if(existing) existing.quantity +=1;
        else cart.push({id:product.id, quantity:1});
        localStorage.setItem("cart", JSON.stringify(cart));
        window.showMessage("Product added to cart!");
    });

    // ---------- Rating ----------
    const ratingContainer = document.querySelector(".rating");
    const stars = ratingContainer.querySelectorAll(".star");
    const ratingValue = ratingContainer.nextElementSibling;
    let selectedRating = parseInt(localStorage.getItem(`rating-${product.id}`)) || 0;
    highlightStars(stars, selectedRating-1);
    if(selectedRating && ratingValue) ratingValue.textContent=`You rated: ${selectedRating} star${selectedRating>1?'s':''}`;

    stars.forEach((star,index)=>{
        star.addEventListener("mouseover",()=>highlightStars(stars,index));
        star.addEventListener("mouseout",()=>highlightStars(stars,selectedRating-1));
        star.addEventListener("click",()=>{
            selectedRating=index+1;
            highlightStars(stars,index);
            localStorage.setItem(`rating-${product.id}`,selectedRating);
            if(ratingValue) ratingValue.textContent=`You rated: ${selectedRating} star${selectedRating>1?'s':''}`;
        });
    });

    function highlightStars(stars,index){
        stars.forEach((star,i)=>star.classList.toggle("selected", i<=index));
    }
});
