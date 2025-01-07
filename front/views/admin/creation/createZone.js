var url = new URL("http://localhost:3001/api/addzones");

//on récupère l'heure de création de la zone comme heure de dernier nettoyage
var date = new Date();
var heure = date.getHours();

console.log(heure);

$(document).on("submit", "#addZoneForm", function (event) { //lorsque le formulaire est soumis

    event.preventDefault();

    //récuperer les valeurs du formulaire
    var nomZone = document.getElementById("nomZone").value;
    var descriptionZone = document.getElementById("descriptionZone").value;
    var tempsZone = document.getElementById("tempsZone").value;

    //création de la zone
    var zone = {
        nom: nomZone,
        Description: descriptionZone,
        Heure_theorique: tempsZone,
        Heure_dernier_nettoyage: heure
    }

    createZone(zone);

});

function createZone(zone) {

    //on envoie la zone au serveur
    $.ajax({
        url: url,
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(zone),
        //en cas de succes
        success: function () {

            $("#alert-message").attr('class', 'alert alert-success');
            $("#alert-message").html("Zone ajoutée avec succès !");

        },

        //si erreur
        error: function (xhr) {
            $("#alert-message").attr('class', 'alert alert-danger');
            $("#alert-message").html(xhr.responseText);
        }
    });

}



