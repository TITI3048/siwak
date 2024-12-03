// Fonction pour afficher les tooltips
    document.addEventListener("DOMContentLoaded", function () {
        const socialLinks = document.querySelectorAll(".social-icons a");

        socialLinks.forEach((link) => {
            // Ajouter l'événement de survol
            link.addEventListener("mouseover", (event) => {
                const tooltip = document.createElement("span");
                tooltip.className = "tooltip";
                tooltip.innerText = getTooltipText(event.target);
                document.body.appendChild(tooltip);

                // Positionner la bulle au bon endroit
                const rect = event.target.getBoundingClientRect();
                tooltip.style.left = `${rect.left + window.scrollX + rect.width / 2 - tooltip.offsetWidth / 2}px`;
                tooltip.style.top = `${rect.top + window.scrollY - rect.height - 10}px`;
            });

            // Retirer la bulle quand la souris quitte l'icône
            link.addEventListener("mouseout", () => {
                const tooltip = document.querySelector(".tooltip");
                if (tooltip) tooltip.remove();
            });
        });

        // Texte des infobulles basé sur les classes Font Awesome
        function getTooltipText(target) {
            if (target.classList.contains("fa-snapchat")) return "Snapchat";
            if (target.classList.contains("fa-instagram")) return "Instagram";
            if (target.classList.contains("fa-twitter")) return "Twitter";
            return "Réseau social";
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        const cartContainer = document.getElementById("cart-items");

        if (cartItems.length === 0) {
            cartContainer.innerHTML = "<p>Votre panier est vide.</p>";
        } else {
            let total = 0;
            cartContainer.innerHTML = cartItems.map(item => {
                total += item.price;
                return `<p>${item.name} - ${item.price.toFixed(2)}€</p>`;
            }).join("");
            cartContainer.innerHTML += `<h3>Total : ${total.toFixed(2)}€</h3>`;
        }
    });
