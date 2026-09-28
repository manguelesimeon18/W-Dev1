document.addEventListener("DOMContentLoaded", function(){
    // Recherche des CERs
    const searchInput = document.querySelector("#search-cers");
    const cards = document.querySelectorAll(".cers__grid .card");

    if(searchInput && cards.length> 0){
          searchInput.addEventListener("input" , function(){
            const searchValue = searchInput.value.trim().toLowerCase();

            let visiblecards = 0;

            cards.forEach(function(card){
                const title = card.querySelector(".card__title")?.textContent.toLowerCase() || "";
                const description = card.querySelector(".card__text")?.textContent.toLowerCase() || "";

                const match = title.includes(searchValue) || description.includes(searchInput);

                if(match){
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            });

            console.log("CERs trouvés:", visiblecards);
          });
    }

});




document.addEventListener("DOMContentLoaded", function () {

    const registerForm = document.querySelector("#register-form");

    if (registerForm) {

        registerForm.addEventListener("submit", function (event) {

            // Empêche le navigateur de changer de page
            event.preventDefault();

            const fullname = document.querySelector("#fullname").value.trim();
            const email = document.querySelector("#email").value.trim().toLowerCase();
            const level = document.querySelector("#level").value;
            const password = document.querySelector("#password").value;

            // Vérification du mot de passe
            if (password.length < 8) {
                alert("Le mot de passe doit contenir au moins 8 caractères.");
                return;
            }

            // Récupération des utilisateurs existants
            const users = JSON.parse(localStorage.getItem("users")) || [];

            // Vérification de l'email
            const existingUser = users.find(function (user) {
                return user.email === email;
            });

            if (existingUser) {
                alert("Cette adresse email est déjà utilisée.");
                return;
            }

            // Création du nouvel utilisateur
            const newUser = {
                fullname: fullname,
                email: email,
                level: level,
                password: password
            };

            // Ajout du nouvel utilisateur
            users.push(newUser);

            // Sauvegarde dans le navigateur
            localStorage.setItem("users", JSON.stringify(users));

            alert("Compte créé avec succès !");

            // Redirection vers la connexion
            window.location.href = "connexion.html";
        });
    }

});