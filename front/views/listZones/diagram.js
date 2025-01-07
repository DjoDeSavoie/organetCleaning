// Construction du diagram 

var xmlhttp = new XMLHttpRequest();

//crée une variable de type date pour récupérer l'heure actuelle
var actualDate = new Date();
var actualHour = actualDate.getHours();



var url = "http://localhost:3001/api/zones";

xmlhttp.open("GET", url, true);
xmlhttp.send();

xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    nom = data.result.map(function (elem) {
      return elem.nom;
    })
    Heure_theorique = data.result.map(function (elem) {
      return elem.Heure_theorique;
    })
    

    Heure_dernier_nettoyage = data.result.map(function (elem) {
      return elem.Heure_dernier_nettoyage;
    })
    



    tempsRestant = data.result.map(function (elem) {
      return (elem.Heure_theorique-elem.Heure_dernier_nettoyage);
    })
   



    const ctx = document.getElementById('diagram').getContext('2d');

    var dynamicBackgroundColors = [];

    var myChart = new Chart(ctx, {
      type: 'bar',
      
      data: {
        labels: nom,
        datasets: [{
          label: '# Zones à nettoyer',
          data:   tempsRestant ,  //Heure_theorique,
          borderWidth: 1,

          var:Heure_dernier_nettoyage,

          backgroundColor: dynamicBackgroundColors
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        
        cutoutPercentage: 30,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });


    // couleur des zones en fonction de l'heure restant pour les nettouyer

    for (var i = 0; i < myChart.data.datasets[0].data.length; i++) {
      
      var leftTime = myChart.data.datasets[0].data[i];    //valeur de l'heure théorique de la zone
      var backgroundColor = '';

      // Logique conditionnelle pour déterminer la couleur de fond en fonction du temps restant (leftTime) avant le prochain nettoyage

      if ( leftTime <= 0 || leftTime <= 1) {
        backgroundColor = "red"; // 

      } else if (leftTime >= 2 && leftTime <=4 ) {

        backgroundColor = "orange"; // 

      } else {

        backgroundColor = "green"; // 
      }

      dynamicBackgroundColors.push(backgroundColor);
      myChart.update();
    }

  }

}
