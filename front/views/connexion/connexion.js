var url = new URL("http://localhost:3001/api/connexion");

function connexion() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

        //création de l'utilisateur
        var user = {
            "username": username, "password": password
        };
        

        //on envoie l'utilisateur au serveur
        $.ajax({
            url: url,
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(user),

            //en cas de succes            
            success: function () 
            {
                $("#alert-message").attr('class', 'alert alert-success');
                $("#alert-message").html("Connexion réussie");

                window.location.href = "http://localhost:3000/listZones/listZones.html";

            },

            //si erreur
            error: function (xhr) {
                $("#alert-message").attr('class', 'alert alert-danger');
                $("#alert-message").html(xhr.status);

                window.location.href = "http://localhost:3000/listZones/listZones.html";
            }
        });
    }