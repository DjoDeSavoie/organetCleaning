var url = new URL("http://localhost:3001/api/removezone");


$(document).on("submit", "#removeZoneForm", function (event) { //lorsque le formulaire est soumis    // modifiee

    event.preventDefault();

    //récuperer les valeurs du formulaire
    var idZone = document.getElementById("id").value;

    

    deleteZone(idZone);

});



function deleteZone(idZone) {


    if (confirm("Etes-vous sûr de vouloir supprimer cette zone ?")) { //si oui
        //on envoie la zone au serveur
        $.ajax({
            url: url + '?' + $.param({ "id": idZone }),
            method: "POST",
            contentType: "application/json",

            //en cas de succes        
            success: function () {

                $("#alert-message").attr('class', 'alert alert-success');
                $("#alert-message").html("Zone Supprimée");

                

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
