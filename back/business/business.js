const dal = require("../data/datalayer");

const business = {

    /**PARTIE USER/ADMIN*/
    /******************************************************************************************************************* */
    /******************************************************************************************************************* */
    /******************************************************************************************************************* */

    addAdmin: function (user) {

        //verification si tous les champs sont remplis
        if (user.username === "") {
            throw Error;
        }
        if (user.password === "") {
            throw Error;
        }
        if (user.email === "") {
            throw Error;
        }
        if (user.phone === "") {
            throw Error;
        }
        if (user.role != "admin") {
            console.log("vous n'etes pas admin");
            throw Error;
        }
        if (user.id != null) {
            throw Error;
        }
        if (user.created_at != null) {
            throw Error;

        }
        const resUser = dal.addAdmin(user);
        return resUser;


    },
    
    connexion: function (user) {



        //verification si tous les champs sont remplis
        if (user.username === "" | user.usernarme === null) {
            return {status : 400, message : "Ce client n'existe pas"};
        }
        if (user.password === "" || user.password === null) {
            return {status : 400, message : "Ce client n'existe pas"};
        }



        const resUser = dal.connexion(user);
        return resUser;
    },

    getUser: function () {

        //recupérer données de la DAL
        const resZones = dal.getUser();

        return resZones;
    },

    addUser: function (user) {



        //verification si tous les champs sont remplis
        if (user.username == "") {
            throw Error;
        }
        if (user.password == "") {
            throw Error;
        }
        if (user.email == "") {
            throw Error;
        }
        if (user.role != "user") {
            throw Error;
        }
        if (user.id != null) {
            throw Error;
        }
        if (user.created_at != null) {
            throw Error;

        }

        const resUser = dal.addUser(user);
        return resUser;
    },

    removeUser: function (idUser) {
        //vérifie si l'id est bien un nombre
        if (isNaN(idUser)) {
            //Retourne un code erreur avec un code qui accompagne cette erreur
            console.log("L'id n'est pas un nombre");
            return { status: 400, message: "L'id n'est pas un nombre" };
        }

        //récupère tous les zones du tableau json actuel
        const resUser = dal.removeUser(idUser);
        return resUser;
    },
    getUserHystory: function (idUser) {
        //vérifie si l'id est bien un nombre
        if (isNaN(idUser)) {
            //Retourne un code erreur avec un code qui accompagne cette erreur
            console.log("L'id n'est pas un nombre");
            return { status: 400, message: "L'id n'est pas un nombre" };
        }
        const resUser = dal.getUserHystory(idUser);
        return resUser;
    },

    /** PARTIE ZONE **/
    /******************************************************************************************************************* */
    /******************************************************************************************************************* */
    /******************************************************************************************************************* */


    getZones: function () {

        //recupérer données de la DAL
        const resZones = dal.getZones();

        return resZones;
    },



    cleanZone: function (idZone) {
        //vérifie si l'id est bien un nombre
        
        if (isNaN(idZone)) {
            //Retourne un code erreur avec un code qui accompagne cette erreur
            console.log("L'id n'est pas un nombre");
            return { status: 400, message: "L'id n'est pas un nombre" };
        }

        //récupère tous les clients du tableau json actuel
        const zones = dal.cleanZone(idZone);

        return zones;
    },


    addZones: function (zoneJSON) {
        console.log("zoneJSON", zoneJSON);
        //vérifie si tous les champ sont remplis ou definis
        if (zoneJSON.nom === undefined || zoneJSON.Description === undefined || zoneJSON.Heure_theorique === undefined
            || zoneJSON.nom === null || zoneJSON.Description === null || zoneJSON.Heure_theorique === null
            || zoneJSON.nom === "" || zoneJSON.Description === "" || zoneJSON.Heure_theorique === "")
         {
            //envoie un message d'erreur
            console.log("tout les champs n'ont pas été remplis"); //RETOUR DE CODE ERREUR AVEC CODE QUI ACCOMPAGNE CETTE ERREUR
            return { status: 400, message: "tout les champs n'ont pas été remplis" };
        }

        const newZone = dal.addZones(zoneJSON);
        return newZone;
    },

    removeZone: function (idZone) {

        idZone = parseInt(idZone);
        console.log("idZone", idZone);
        //vérifie si l'id est bien un nombre
        if (isNaN(idZone)) {
            //Retourne un code erreur avec un code qui accompagne cette erreur
            console.log("L'id n'est pas un nombre");
            return { status: 400, message: "L'id n'est pas un nombre" };
        }
        
        return dal.removeZone(idZone);
    },

    editZone: function (editZone) {

        editZone.id = parseInt(editZone.id);


        if (editZone.Heure_theorique != '' && editZone.Heure_theorique != null && editZone.Heure_theorique != undefined) {
            editZone.Heure_theorique = parseInt(editZone.Heure_theorique);
        }
        else {
            editZone.Heure_theorique = null;
        }

        console.log("Description", editZone.Description);
        if (editZone.Description == null || editZone.Description == undefined || editZone.Description === '' || editZone === "") {
            editZone.Description = null;
        }
        //vérifie si tous les champ sont remplis ou definis
        if (editZone.nom == null || editZone.nom == undefined || editZone.nom === '' || editZone.nom === "") {
            editZone.nom = null;
        }

        console.log("Description", editZone.Description);


            if (editZone.Heure_theorique < 0) {
                console.log("Mauvaise valeur pour l'heure théorique");
                throw Error;
            }

            return dal.editZone(editZone);
    }

};

module.exports = business;