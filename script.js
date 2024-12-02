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
