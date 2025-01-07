var url = new URL("http://localhost:3001/api/inscriptionAdmin");

function inscription() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
    var email = document.getElementById("email").value;

    
    
     if (password === password2) {
        //création du Zone
        var admin = {
            "username": username, "password": password, "email":email
        };
        

        //on envoie le Zone au serveur
        $.ajax({
            url: url,
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(admin),
            //en cas de succes
            success: function () {
                $("#alert-message").attr('class', 'alert alert-success');
                $("#alert-message").html("Inscription réussie");
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