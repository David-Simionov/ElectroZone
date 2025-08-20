console.log("products:", products);

document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceEl = document.getElementById("total-price");
    const checkoutBtn = document.getElementById("checkout-btn");
    const checkoutMessage = document.getElementById("checkout-message");

    // Проверка дали страницата има кошничка елементи
    if (!cartItemsContainer || !totalPriceEl || !checkoutBtn || !checkoutMessage) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const TAX_RATE = 0.05; // 5% данок

    // Функција за пресметка на цена со попуст
    function calculateDiscountedPrice(product) {
        if (!product.discount) return product.price;
        if (product.discount.type === "percent") {
            return product.price - (product.price * product.discount.value / 100);
        }
        if (product.discount.type === "fixed") {
            return product.price - product.discount.value;
        }
        return product.price;
    }

    function renderCart() {
        cartItemsContainer.innerHTML = "";
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
            totalPriceEl.textContent = "Total: $0.00";
            checkoutBtn.disabled = true;
            return;
        }

        let subtotal = 0;

        cart.forEach(item => {
            const product = products.find(p => p.id === item.id);
            if (!product) return;

            const discountedPrice = calculateDiscountedPrice(product);
            const itemTotal = discountedPrice * item.quantity;
            subtotal += itemTotal;

            const discountBadge = product.discount ?
                `<span class="discount-badge">-${product.discount.value}${product.discount.type === 'percent' ? '%' : '€'}</span>` : "";

            const priceHTML = product.discount ? `
                <div class="old-price">$${product.price.toFixed(2)}</div>
                <div class="new-price">$${discountedPrice.toFixed(2)} ${discountBadge}</div>
            ` : `<div class="new-price">$${product.price.toFixed(2)}</div>`;

            const div = document.createElement("div");
            div.className = "cart-item";
            div.innerHTML = `
                <img src="${product.image}" alt="${product.title}" />
                <div class="cart-item-details">
                    <div class="cart-item-title">${product.title}</div>
                    ${priceHTML}
                    <div class="quantity-control">
                        <button class="decrease-qty" data-id="${item.id}">–</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="increase-qty" data-id="${item.id}">+</button>
                    </div>
                    <div class="cart-item-price">Total: $${itemTotal.toFixed(2)}</div>
                </div>
                <button class="remove-btn" data-id="${item.id}">X</button>
            `;

            cartItemsContainer.appendChild(div);
        });

        const tax = subtotal * TAX_RATE;
        const total = subtotal + tax;

        totalPriceEl.innerHTML = `
            Subtotal: $${subtotal.toFixed(2)} <br>
            Tax (5%): $${tax.toFixed(2)} <br>
            <strong>Total: $${total.toFixed(2)}</strong>
        `;
        checkoutBtn.disabled = false;

        // Слушачи за бришење
        document.querySelectorAll(".remove-btn").forEach(button => {
            button.addEventListener("click", () => {
                const idToRemove = parseInt(button.dataset.id);
                cart = cart.filter(item => item.id !== idToRemove);
                localStorage.setItem("cart", JSON.stringify(cart));
                renderCart();
            });
        });

        // Слушачи за зголемување количина
        document.querySelectorAll(".increase-qty").forEach(button => {
            button.addEventListener("click", () => {
                const id = parseInt(button.dataset.id);
                const productInCart = cart.find(item => item.id === id);
                if (productInCart) {
                    productInCart.quantity += 1;
                    localStorage.setItem("cart", JSON.stringify(cart));
                    renderCart();
                }
            });
        });

        // Слушачи за намалување количина
        document.querySelectorAll(".decrease-qty").forEach(button => {
            button.addEventListener("click", () => {
                const id = parseInt(button.dataset.id);
                const productInCart = cart.find(item => item.id === id);
                if (productInCart && productInCart.quantity > 1) {
                    productInCart.quantity -= 1;
                    localStorage.setItem("cart", JSON.stringify(cart));
                    renderCart();
                }
            });
        });
    }

    renderCart();

    checkoutBtn.addEventListener("click", () => {
        // Прикажи пораката
        checkoutMessage.style.opacity = "1";
        checkoutMessage.style.pointerEvents = "auto";

        // После 3 секунди избледи пораката и врати на home
        setTimeout(() => {
            checkoutMessage.style.opacity = "0";
            checkoutMessage.style.pointerEvents = "none";

            localStorage.removeItem("cart");
            window.location.href = "home.html";
        }, 3000);
    });

});
