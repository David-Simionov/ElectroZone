document.addEventListener("DOMContentLoaded", function () {
    // ---------- HERO секцијата ----------
    const heroMessages = [
        { title: "Welcome to ElectroZone", text: "Your ultimate destination for electronics and gadgets at unbeatable prices!", buttonText: "Shop Now", buttonLink: "products.html", background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)" },
        { title: "Big Summer Sale!", text: "Up to 70% off on selected electronics. Don't miss out!", buttonText: "Explore Deals", buttonLink: "products.html", background: "linear-gradient(135deg, #4b6cb7, #182848)" },
        { title: "New Arrivals Just In", text: "Check out the latest and hottest gadgets on the market!", buttonText: "See New Products", buttonLink: "products.html", background: "linear-gradient(135deg, #1f4037, #99f2c8)" }
    ];
    let currentIndex = 0;
    const heroSection = document.getElementById("hero-section");
    if (heroSection) {
        function updateHero() {
            const message = heroMessages[currentIndex];
            heroSection.style.background = message.background;
            heroSection.classList.remove("fade");
            void heroSection.offsetWidth;
            heroSection.classList.add("fade");
            heroSection.innerHTML = `<h1>${message.title}</h1><p>${message.text}</p><a href="${message.buttonLink}" class="btn">${message.buttonText}</a>`;
            currentIndex = (currentIndex + 1) % heroMessages.length;
        }
        updateHero();
        setInterval(updateHero, 7000);
    }

    // ---------- Cookie Banner ----------
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptCookies = document.getElementById("accept-cookies");
    if (cookieBanner && acceptCookies && !localStorage.getItem("cookiesAccepted")) {
        cookieBanner.style.display = "block";
        acceptCookies.addEventListener("click", () => {
            localStorage.setItem("cookiesAccepted", "true");
            cookieBanner.style.display = "none";
        });
    }

    // ---------- Search, Filter, Sort ----------
    const allProductCards = Array.from(document.querySelectorAll(".product-card"));
    const categoryFilter = document.getElementById("category-filter");
    const brandFilter = document.getElementById("brand-filter");
    const priceMin = document.getElementById("price-min");
    const priceMax = document.getElementById("price-max");
    const applyBtn = document.getElementById("apply-filters");
    const sortFilter = document.getElementById("sort-filter");
    const searchInput = document.getElementById("searchInput");

    if (categoryFilter) categoryFilter.addEventListener("change", () => {
        const val = categoryFilter.value;
        allProductCards.forEach(p => p.style.display = (val === "all" || p.dataset.category === val) ? "block" : "none");
    });

    if (applyBtn) applyBtn.addEventListener("click", () => {
        const cat = categoryFilter?.value || "all";
        const brand = brandFilter?.value || "all";
        const min = parseFloat(priceMin?.value) || 0;
        const max = parseFloat(priceMax?.value) || Infinity;
        allProductCards.forEach(p => {
            const match = (cat === "all" || p.dataset.category === cat) &&
                (brand === "all" || p.dataset.brand === brand) &&
                parseFloat(p.dataset.price) >= min &&
                parseFloat(p.dataset.price) <= max;
            p.style.display = match ? "block" : "none";
        });
    });

    if (sortFilter) sortFilter.addEventListener("change", () => {
        const container = document.querySelector(".products");
        const visible = allProductCards.filter(p => p.style.display !== "none");
        if (sortFilter.value === "asc") visible.sort((a,b)=>parseFloat(a.dataset.price)-parseFloat(b.dataset.price));
        else if (sortFilter.value === "desc") visible.sort((a,b)=>parseFloat(b.dataset.price)-parseFloat(a.dataset.price));
        visible.forEach(p=>container.appendChild(p));
    });

    if (searchInput) searchInput.addEventListener("input", () => {
        const q = searchInput.value.toLowerCase();
        allProductCards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            const desc = card.querySelector("p").textContent.toLowerCase();
            card.style.display = (title.includes(q) || desc.includes(q)) ? "block" : "none";
        });
    });

    // ---------- Toast / Message ----------
    function showMessage(text, isError=false){
        let el = document.getElementById("cart-message");
        if(!el){
            el = document.createElement("div");
            el.id="cart-message";
            el.style.cssText="position:fixed;bottom:20px;right:20px;padding:15px 25px;border-radius:8px;opacity:0;pointer-events:none;transition:opacity .3s ease;z-index:1000;font-weight:600;color:#fff";
            document.body.appendChild(el);
        }
        el.textContent = text;
        el.style.background = isError ? "#dc3545" : "#4CAF50";
        el.style.opacity="1";
        clearTimeout(window.__toastTimer);
        window.__toastTimer = setTimeout(()=>el.style.opacity="0",1800);
    }
    window.showMessage = showMessage;

    // ---------- Wishlist ----------
    window.wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    function saveWishlist(){ localStorage.setItem("wishlist", JSON.stringify(window.wishlist)); }
    function addToWishlist(product){
        if(!product?.id) return showMessage("Missing product ID", true);
        const exists = window.wishlist.some(i=>i.id===product.id);
        if(!exists){
            window.wishlist.push(product);
            saveWishlist();
            showMessage("Added to wishlist! ❤️");
            document.dispatchEvent(new CustomEvent("wishlist:changed",{detail:{count:window.wishlist.length}}));
        } else showMessage("Already in wishlist!", true);
    }
    window.addToWishlist = addToWishlist;

    // ---------- Add to Cart ----------
    function addToCart(productId){
        const cart = JSON.parse(localStorage.getItem("cart")||"[]");
        const existing = cart.find(i=>i.id===productId);
        if(existing) existing.quantity += 1;
        else cart.push({id:productId, quantity:1});
        localStorage.setItem("cart", JSON.stringify(cart));
        showMessage("Product added to cart!");
    }
    document.querySelectorAll(".add-to-cart").forEach(btn=>{
        const id = parseInt(btn.dataset.id);
        btn.addEventListener("click", ()=>addToCart(id));
    });

});
