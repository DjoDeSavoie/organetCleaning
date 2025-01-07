# developpementLogiciel


Pour idée de projet, nous avons choisi le domaine de l'industrie agro-alimentaire et des enjeux d'hygiène qu'elle relève.
Dans une usine destiné à fournir en denrée une grande quantité de personne, la question de l'hygiène est primordiale.

Nous souhaitons développer une application web permettant de consulter l'état de propreté des différentes zones de l'usine.

L'usine est divisée en différentes zones stratégiques.
Chaque zone à besoin d'être nettoyée sur un certain intervalle d'heure h dépendant de l'exposition de celle-ci à la poussière et
autres insalubrité.
Lorsqu'un agent d'entretien aura fini son travail dans une zone, la couleur de la zone passsera au vert.
L'angent d'entretien signalera le début du nettoyage en badgant, la fin du nettoyage de même puis prendra une photo et 
l'uploadera sur l'application.
Puis, au fur et à mesure de du temps qui passe, la couleur de la zone passsera au orange puis au rouge et dès qu'il sera nécessaire
de la nettoyer à nouveau, une alerte sera envoyer et l'application choisira quel agent d'entretien en fonction de son emploi du temps.
devra s'occuper de cette zone-ci.

Cette  application est adaptable, il sera simplement nécessaire que l'usine en question renseigne les différentes zone choisie et 
l'intervalle de temps par zone entre deux nettoyages.



si modelisation par bdd :
-history -> jointure entre table user et zone en primary key et une date 

Points à améliorer :
-système de gestion de cookies pour garder en mémoire les infos du clients pour naviguer entre les pages de manière fluide
-cryptage du mot de passe pour l'inscription et la connexion dans le back
-tests unitaires pour chaque commit




ORGANISATION DU REPERTOIRE : 

langue de nommage des dossiers / fichiers / etc : anglais.
Les majuscules remplacent les espaces : Falilou Lucas Jonathan -> listezones.html -> listZones.html
Singulier quand on agit sur une zone : deleteZone
Pluriel quand on agit sur un ensemble de zones par exemple : listZones


# Démarrer le serveur

    -Ouvrir terminal
    -Split terminal(Ouvrir deux terminals sinon)

     -->Dans la première fenêtre lancer le frontEnd 
            cd front 
            node index.js
     -->Dans la seconde fenêtre lancer le BackEnd
            cd back
            node index.js
    ---> Aller dans votre navigateur et copier collé :
                localhost:3000
    Vous pouvez maintenant utilisé l'application web.
