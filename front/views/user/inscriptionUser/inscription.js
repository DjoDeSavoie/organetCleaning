var url = new URL("http://localhost:3001/api/inscriptionUser");

function inscriptionUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
    var email = document.getElementById("email").value;

    if (password === password2) {
        //création de l'utilisateur
        var user = {
            "username": username, "password": password,"email":email
        };

        //on envoie l'utilisateur au serveur
        $.ajax({
            url: url,
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(user),
            //en cas de succes
            success: function () {
                $("#alert-message").attr('class', 'alert alert-success');
                $("#alert-message").html("Inscription réussie");
                window.location.href = "http://localhost:3000/connexion/connexion.html";
            },

            //si erreur
            error: function (xhr) {
                $("#alert-message").attr('class', 'alert alert-danger');
                $("#alert-message").html(xhr.responseText);
            }
        });
    }
    else {
        $("#alert-message").attr('class', 'alert alert-danger');
        $("#alert-message").html("Les mots de passe ne correspondent pas");
    }

    


}