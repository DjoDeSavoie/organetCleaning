const readline = require('readline');
const readlinesync = require('readline-sync');
const chalk = require('chalk');
const business = require("../business/business");

const consolePres = {
    start: async function () {



        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        console.log(chalk.red("Bienvenue dans l'application console"));
        console.log(chalk.blue("1. Lister les Zones"));
        console.log(chalk.blue("2. Ajouter un zone"));
        console.log(chalk.blue("3. Supprimer un zone"));
        console.log(chalk.blue("4. Modifier un zone"));
        console.log(chalk.blue("5. Ajouter un user"));
        console.log(chalk.red("6. Ajouter un Admin"));
        console.log(chalk.blue("7. Supprimer un user"));
        //quitter
        console.log(chalk.red("8. Quitter"));


       
        const answer = await new Promise(resolve => {
            rl.question("Choisissez une option: ", resolve);
        });

        rl.close();

        if (answer == "1") {
            var zone = business.getZones();
            console.log(zone.result);
            this.start();

        }
        if (answer == "2") {
            //on demande les informations du zone
            console.log("Veuillez entrer les informations du zone : \n");
            var zoneName = readlinesync.question("Nom de la Zone : ");
            var zoneDescription = readlinesync.question("Description de la Zone : ");



            var zone = {
                "id": null, "zoneName": zoneName, "zoneDescription": zoneDescription,
                "last_cleaned_at": null
            };

            business.addZones(zone);
            this.start();
        }
        if (answer == "3") {
            console.log("Veuillez entrer l'id de la zone à supprimer : \n");
            var id = readlinesync.question("Id : ");
            business.removeZone(id);
            this.start();
        }
        if (answer == "4") {
            //on demande les informations du zone à modifier  
            console.log("Veuillez entrer la / les nouvelle(s) information(s) de la zone : \n");
            var id = readlinesync.question("Id : ");
            var zoneName = readlinesync.question("Nom de la Zone : ");
            var zoneDescription = readlinesync.question("Description de la Zone : ");

            var zone = {
                "id": id, "zoneName": zoneName, "zoneDescription": zoneDescription,
                "last_cleaned_at": null
            };

            business.editZone(zone);
            this.start();
        }
        if (answer == "5") {
            //on demande les informations du user
            console.log("Veuillez entrer les informations du user : \n");
            var userName = readlinesync.question("Nom du user : ");
            var userPassword = readlinesync.question("Mot de passe du user : ");
           var userEmail = readlinesync.question("Email du user : ");
            var user = {
                "id": null, "userName": userName, "userPassword": userPassword,
                "userEmail": userEmail
            };
            business.addUser(user);
        }
        if (answer == "6") {
            //on demande les informations de l'admin
            console.log("Veuillez entrer les informations du admin : \n");
            var adminName = readlinesync.question("Nom du admin : ");
            var adminPassword = readlinesync.question("Mot de passe du admin : ");
            var adminEmail = readlinesync.question("Email du admin : ");
            var admin = {
                "id": null, "adminName": adminName, "adminPassword": adminPassword,
                "adminEmail": adminEmail
            };
            business.addAdmin(admin);
        }
        if (answer == "7") {
            console.log("Veuillez entrer l'id du user à supprimer : \n");
            var id = readlinesync.question("Id : ");
            business.removeUser(id);
        }
        if (answer == "8") {
            console.log("Au revoir !");
            process.exit();
        }

    }
}

module.exports = consolePres;