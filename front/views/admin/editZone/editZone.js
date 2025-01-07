var url = new URL("http://localhost:3001/api/editzone");

//fonction pour récupérer les infos en paramètre dans l'url
function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
};


//si id est bien défini dans l'url, on le récupère
const id = GetURLParameter('id');
    
    if(id) {
        document.getElementById("idZone").value = id;
        document.getElementById("idZone").readOnly = true;
        var idZone = id;
    }
    else {//sinon on récupère l'id du champ du formulaire
        var idZone = document.getElementById("idZone").value;
    }


$(document).on("submit", "#editZoneForm", function (event) { //lorsque le formulaire est soumis
    

    event.preventDefault();

    //récuperer les valeurs du formulaire edit
    var editNomZone = document.getElementById("editNomZone").value;
    var editDescriptionZone = document.getElementById("editDescriptionZone").value;
    var temps = document.getElementById("temps").value;

    //création de la zone
    var zone = {
        "id": idZone, "nom": editNomZone, "Description": editDescriptionZone, "Heure_theorique": temps, "Heure_dernier_nettoyage": null
    };


    editZone(zone);
});

function editZone(zone) {

    //on envoie la zone au serveur
    $.ajax({
        url: url,
        method: "PUT",
        contentType: "application/json",
        data: JSON.stringify(zone),
        //en cas de succes
        success: function () {

            $("#alert-message").attr('class', 'alert alert-success');
            $("#alert-message").html("Zone Modifiée !");

            
        },

        //si erreur
        error: function (xhr) {
            $("#alert-message").attr('class', 'alert alert-danger');
            $("#alert-message").html(xhr.responseText);
        }
    });

}






