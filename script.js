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
/* =========================
   CAR WASH PRICE
========================= */

const packageSelect =
    document.getElementById("package");

const washPrice =
    document.getElementById("washPrice");


if (packageSelect && washPrice) {

    packageSelect.addEventListener(
        "change",
        function () {

            let price = 0;

            if (this.value === "Exterior Wash") {
                price = 50;
            }

            else if (this.value === "Premium Wash") {
                price = 80;
            }

            else if (this.value === "Deluxe Wash") {
                price = 120;
            }

            washPrice.textContent =
                "R" + price;

        }
    );

}


/* =========================
   CAR WASH BOOKING
========================= */

const carWashForm =
    document.getElementById("carWashForm");


if (carWashForm) {

    carWashForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const customer =
                document.getElementById(
                    "customerName"
                ).value;

            const vehicle =
                document.getElementById(
                    "vehicle"
                ).value;

            const selectedPackage =
                document.getElementById(
                    "package"
                ).value;

            const date =
                document.getElementById(
                    "date"
                ).value;

            const time =
                document.getElementById(
                    "time"
                ).value;


            alert(
                "Booking Confirmed! 🚗\n\n" +

                "Customer: " + customer + "\n" +

                "Vehicle: " + vehicle + "\n" +

                "Package: " + selectedPackage + "\n" +

                "Date: " + date + "\n" +

                "Time: " + time
            );

        }
    );

}
