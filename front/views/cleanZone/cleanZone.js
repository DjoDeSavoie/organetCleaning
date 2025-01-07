var url = new URL("http://localhost:3001/api/cleanzone");


function cleanZone(idZone) {


    if (confirm("Etes-vous sûr de vouloir nettoyer cette zone ?")) { //si oui
        //on envoie la zone à nettoyer au serveur
        $.ajax({
            url: url,
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({ "id": idZone }),

            //en cas de succes        
            success: function () {

                $("#alert-message").attr('class', 'alert alert-success');
                $("#alert-message").html("Zone nettoyée");

                

                setTimeout(function() {//si pas d'attente, trop de requête au même moment donc on patiente 1.5 secondes
                    //on a pas un serveur permettant de traiter plusieurs requêtes en même temps
                    generateTabZones(); //régénération du tableau après 1.5 secondes
                }, 1500);
            },

            //si erreur
            error: function (xhr) {

                $("#alert-message").attr('class', 'alert alert-danger');
                $("#alert-message").html(xhr.responseText);
            }
        });
    }


}
