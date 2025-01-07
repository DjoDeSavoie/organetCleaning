var express = require("express");
const business = require("../business/business");
var cors = require("cors");
const { json } = require("body-parser");
var app = express();



const apiServ = {
    start: function (port) {


        /** Autorisation d'accés au serveur */
        app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        // mongoose.connect("mongodb+srv://johnny:organetkeypass@organet.zyenjzv.mongodb.net/",
        //     { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        //         console.log("Connected to MongoDB");
        //     }).catch((err) => {
        //         console.log("Error while connecting to MongoDB", err);
        //     });

        app.use(express.json());

        app.use(cors());

        //retourne un tableau json contenant les clients et des informations supplémentaires 
        // (nombre de page, nombre de client total)


        /*PARTIE UTILISATEUR*/
        /****************************************************************************************************** */
        /****************************************************************************************************** */
        /****************************************************************************************************** */


        //inscription User
        app.post("/api/inscriptionUser", function (req, res) { //post envoie qqc

            console.log("req", req.body);
            var user = {
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
                created_at: null,
                id: null,
                role: "user",
                history: []
            };
            
            
            jsonRes = business.addUser(user);
            res.json(jsonRes);



        });

        //inscription Admin
        app.post("/api/inscriptionAdmin", function (req, res) { //post envoie qqc

            var user = {
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
                created_at: null,
                id: null,
                role: "admin"
            };
           

            jsonRes = business.addAdmin(user);

            res.json(jsonRes);



        });


        //connexion
        app.post("/api/connexion", function (req, res) { //post envoie qqc
            var user = {
                username: req.body.username,
                password: req.body.password,
            };
            jsonRes = business.connexion(user);
            res.json(jsonRes);


        });
        app.delete("/api/removeUser", function (req, res) { //post envoie qqc
            var idZone = req.query.id;

            jsonRes = business.removeUser(idUser);

            //affiche le message de retour
            if (jsonRes.status === 400) {
                res.status(400).send(jsonRes.message);
            } else {
                res.json(jsonRes);
            }
        });

        app.get("/api/getUser", function (req, res) {

            
            // get zones from business layer
            const resZones = business.getUser();
            res.json(resZones);
        });
        app.get("/api/getUserHistory", function (req, res) {

            id= req.query.id;
            // get zones from business layer
            const resZones = business.getUserHystory(id);
            res.json(resZones);
        });

        /*PARTIE ZONE*/
        /****************************************************************************************************** */
        /****************************************************************************************************** */
        /****************************************************************************************************** */
        app.get("/api/zones", function (req, res) {

            // get zones from business layer
            const resZones = business.getZones();
            res.json(resZones);
        });



        //add zones to json file
        app.post("/api/addzones", function (req, res) { //post envoie qqc

            var zoneJSON = {
                "id": null, "nom": req.body.nom, "Description": req.body.Description, "Heure_theorique": req.body.Heure_theorique,
                "Heure_dernier_nettoyage": null
            };

            

            jsonRes = business.addZones(zoneJSON);

            if (jsonRes.status === 400) {
                res.status(400).send(jsonRes.message);
            } else {
                res.json(jsonRes);
            }
        });
        //nettoyer zone
        app.post("/api/cleanzone", function (req, res) { //post envoie qqc

           
            var idzoneJSON = req.body.id;

            jsonRes = business.cleanZone(idzoneJSON);

            if (jsonRes.status === 400) {
                res.status(400).send(jsonRes.message);
            } else {
                res.json(jsonRes);
            }
        });


        
        //remove zones from json file
        app.post("/api/removezone", function (req, res) { //post envoie qqc
            var idZone = req.query.id;

            jsonRes = business.removeZone(idZone);

            //affiche le message de retour
            if (jsonRes.status === 400) {
                res.status(400).send(jsonRes.message);
            } else {
                res.json(jsonRes);
            }
        });


        app.put("/api/editzone", function (req, res) { //put modifie valeur json

            var editZone = req.body;

            jsonRes = business.editZone(editZone);

            if (jsonRes.status === 400) {
                res.status(400).send(jsonRes.message);
            }
            else {
                res.json(jsonRes);
            }
        });

        app.listen(port, function () {
            console.log("Server running on port " + port);
        });

    }
}

module.exports = apiServ;