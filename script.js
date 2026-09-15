/* =========================
   RESTAURANT MANAGEMENT SYSTEM
========================= */


/* =========================
   MENU FILTER
========================= */

function filterMenu(category) {

    const menuItems =
        document.querySelectorAll(".menu-card");

    menuItems.forEach(function(item) {

        if (
            category === "all" ||
            item.dataset.category === category
        ) {

            item.style.display = "block";

        } else {

            item.style.display = "none";

        }

    });

}


/* =========================
   CART
========================= */

function addToCart(name, price) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem =
        cart.find(item => item.name === name);

    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({

            name: name,

            price: price,

            quantity: 1

        });

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(name + " has been added to your cart! 🛒");

}
