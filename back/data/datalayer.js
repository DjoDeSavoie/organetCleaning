const fs = require("fs");
const { get } = require("http");

//fichiers
const filenameZone = "./data/zones.json";

const filenameUser = "./data/users.json";

//Parse object zone
let rawdataZone = fs.readFileSync(filenameZone, "utf8");
let objectZones = JSON.parse(rawdataZone);

//parse obkect user
let rawdataUser = fs.readFileSync(filenameUser, "utf8");
let objectUsers = JSON.parse(rawdataUser);

const currentDate = new Date();



var numberZone;

let resUser = "";

let datalayer = {



    /*PARTIE USER/ADMIN */
    /********************************************************************************************* */
    /********************************************************************************************* */
    /********************************************************************************************* */
    connexion: function (user) {
        resUser = "echec";
        //verification par rapport à la base de données
        objectUsers.forEach(element => {
            if ((element.username == user.username || element.username == user.email) && element.password == user.password) {
                console.log("connexion réussie");
                if (element.role == "admin") {
                    console.log("admin");
                }
                else {
                    console.log("user");
                }

                return element;
            }
        });

        console.log(resUser);

    },
    /*PARTIE USER */
    /********************************************************************************************* */
    addUser: function (user) {

        let test = false;
        //verification par rapport à la base de données
        objectUsers.forEach(element => {
            if (element.username == user.username || element.email == user.email) {
                resUser = ("echec");
                test = true;
            }
        });

        if (test === true) {
            return resUser;
        }
        else {

            //id du nouveau client
            idUser = objectUsers.length + 1;
            user.id = idUser;
            //date de création du nouveau utilisateur
            user.created_at = currentDate;
            //ajouter user à users
            objectUsers.push(user);
            //ecriture dans le fichier json
            fs.writeFileSync(filenameUser, JSON.stringify(objectUsers));
            //affichage du nouveau client dans la console pour verifier
            console.log("User :", user);

            return resUser = "success";
        }
    },
    getUser: function () {
        {
            //read json file
            var tot = objectUsers.length;

            users = {
                id: objectUsers.id,
                username: objectUsers.username,
                email: objectUsers.email,
                role: objectUsers.role,
                created_at: objectUsers.created_at,
                history: objectUsers.history[0]
            };

            const result = {
                total: tot,
                result: users
            };

            console.log("result", result.result);

            return result;
        }
    },
    getUserHystory: function (idUser) {
        {

            var indexUser = objectUsers.findIndex(user => user.id === idUser);
            return objectUsers[indexUser].history;


        }
    },

    removeUser: function (idUser) {

        var indexUser = objectUsers.findIndex(user => user.id === idUser);

        //supprimer l'user  
        objectUsers.splice(indexUser, 1);

        // enregistrer les modifications dans le fichier JSON

        fs.writeFileSync(filenameUser, JSON.stringify(objectUsers)); //on réécrit le fichier sans les données supprimées

        return resJson("success");
    },



    /*PARTIE ADMIN */
    /********************************************************************************************* */
    addAdmin: function (user) {
        let test = false;
        //verification par rapport à la base de données
        objectUsers.forEach(element => {
            if (element.username == user.username || element.email == user.email) {
                console.log("echec");
                resUser = ("echec");
                test = true;
            }
        });

        if (test === true) {
            return resUser;
        }
        else {

            //id du nouveau admin
            idUser = objectUsers.length + 1;
            user.id = idUser;
            //date de création du nouveau admin
            user.created_at = currentDate;

            //ajouter user à users
            objectUsers.push(user);
            //ecriture dans le fichier json
            fs.writeFileSync(filenameUser, JSON.stringify(objectUsers));

            //affichage du nouveau admin dans la console pour verifier
            console.log("Admin :", user);

            return resUser = "success";
        }
    },



    /*PARTIE ZONE */
    /********************************************************************************************* */
    /********************************************************************************************* */
    /********************************************************************************************* */
    getZones: function () {
        {
            //read json file
            var tot = objectZones.length;

            triZoneCroissant(objectZones);

            const result = {
                total: tot,
                result: objectZones
            };

            console.log("result", result.result);

            return result;
        }
    },





    //ecriture nouvelle zone

    addZones: function (zoneJSON) {

        //Définition de l'id du nouveau client
        const getNewId = objectZones => Math.max(...objectZones.map(zone => zone.id)) + 1;
        numberZone = getNewId(objectZones);
        zoneJSON.id = numberZone;

        //définition de la date d'ajout du nouveau client
        zoneJSON.Heure_dernier_nettoyage = 0;
        zoneJSON.Heure_theorique=parseInt(zoneJSON.Heure_theorique);

        //ajouter zoneJSON à objectZones
        objectZones.push(zoneJSON);

        fs.writeFileSync(filenameZone, JSON.stringify(objectZones));

        return zoneJSON;
    },

    removeZone: function (foundZone) {

        const index = objectZones.indexOf(foundZone);
        objectZones.splice(index, 1);

        

        fs.writeFileSync(filenameZone, JSON.stringify(objectZones)); //on réécrit le fichier sans les données supprimées
        return {status: 200, message: "La zone à bien été suppimée !" };
    },

    
    cleanZone: function (idZone) {

        var indexZone = objectZones.findIndex(zone => zone.id === idZone);



        if (isNaN(indexZone)) {
            return resJson("echec, idzone non trouvé")
        }

        //nouvelle heure de nettoyage
        objectZones[indexZone].Heure_dernier_nettoyage = 0;

        // enregistrer les modifications dans le fichier JSON
        fs.writeFileSync(filenameZone, JSON.stringify(objectZones), (error) => {
            if (error) throw error;
        });

        return {status: 200, message: "La zone à bien été nettoyée !" };

    },

    
    editZone: function (editZone) {

        var indexZone = objectZones.findIndex(zone => zone.id === editZone.id);

        console.log(editZone);

        if (editZone.nom != null) {
            objectZones[indexZone].nom = editZone.nom;
        }
        if (editZone.Description != null) {
            objectZones[indexZone].Description = editZone.Description;
        }
        if (editZone.Heure_theorique != null) {
            objectZones[indexZone].Heure_theorique = editZone.Heure_theorique;
        }


        console.log("Zone modifiée", objectZones[indexZone]);

        fs.writeFileSync(filenameZone, JSON.stringify(objectZones), (error) => {
            if (error) throw error;
        });

        return {status: 200, message: "La zone à bien été modifiée !" };;
    }

};

function triZoneCroissant(objectZones) {
    objectZones.sort(function (a, b) {
        return (b.Heure_dernier_nettoyage / b.Heure_theorique) - (a.Heure_dernier_nettoyage / a.Heure_theorique);
    });
    return objectZones;

}



module.exports = datalayer;