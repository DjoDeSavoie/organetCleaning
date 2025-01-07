var url = new URL("http://localhost:3001/api/zones");
var page = 1;
var number = 10;
var nbTotalPage;


function generateTabZones() {

    var zones = "";

    $.get("http://localhost:3001/api/zones", { "page": page, "number": number }, function (data) {
        nbTotalPage = data.totalPages;

        data.result.forEach(user => {

            //boutons modifier et supprimer zone depuis le tableau
            var deleteZone = "<button class='btn btn-danger' onclick=deleteZone(" + user.id + ")>Supprimer</button>";
            var editZone = "<a href='../admin/editZone/editZone.html?id=" + user.id + "'><button class='btn btn-warning'>Modifier</button></a>";
            
            //bouton pour nettoyer la zone
            var nettoyerZone = "<button class='btn btn-success' onclick='cleanZone(" + user.id + ")'>Nettoyer</button>";


            var zone = `<tr>
            <td>`+ user.nom +`</td>
            
            <td>` + user.Description +`</td>
            
            <td>` + user.Heure_dernier_nettoyage + `</td>

            <td>` + user.Heure_theorique + `</td>

            <td>` + editZone + '   ' + deleteZone + '   ' + nettoyerZone + `</td>
            </tr > `;

            zones = zones + zone; 

        });
        $("#zonesList").html(zones);   // modifiee  !!!
    });
}

generateTabZones();