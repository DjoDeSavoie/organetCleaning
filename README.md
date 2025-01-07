**Organet**

Software Development Project: Factory Cleaning Prioritization

Project Overview

We chose to address hygiene challenges in the food industry for this project. In a factory that supplies food to a large population, hygiene is a critical concern.

Our goal is to develop a web application that monitors and displays the cleanliness status of different areas in the factory.

How It Works
	1.	Factory Zones:
The factory is divided into various strategic zones. Each zone has a specific cleaning interval based on its exposure to dust and other contaminants.
	2.	Maintenance Tracking:
	•	When a cleaning staff member starts cleaning a zone, they will log the start time by scanning their badge.
	•	Once cleaning is completed, the staff member logs the end time similarly and uploads a photo of the cleaned zone to the application.
	•	The application will display the zone in green when cleaned. Over time, the status will transition to orange, then red, based on the set cleaning interval.
	•	When a zone needs cleaning again, the system will trigger an alert and assign the task to an available cleaning staff member based on their schedule.
	3.	Adaptability:
The application is flexible. Factories can define:
	•	Specific zones to monitor.
	•	The cleaning interval for each zone.

Database Modeling
	•	History Table:
A relational database can be used with a history table, combining primary keys from the user and zone tables, along with timestamps.

Improvements to Implement
	•	Cookie Management:
Implement a cookie management system to store client information for smooth navigation between pages.
	•	Password Encryption:
Encrypt user passwords for secure registration and login processes.
	•	Unit Testing:
Develop unit tests for each commit to ensure application stability.

Project Directory Organization
	•	Naming Conventions:
	•	Use English for naming files, folders, and variables.
	•	Replace spaces with camel case for file names (e.g., listZones.html instead of listezones.html).
	•	Use singular names for actions affecting one item (e.g., deleteZone) and plural names for actions affecting multiple items (e.g., listZones).

Starting the Server
	1.	Open your terminal.
	2.	Split the terminal into two windows:
	•	Frontend:

cd front
node index.js


	•	Backend:

cd back
node index.js


	3.	Open your browser and navigate to:

localhost:3000



You can now use the web application.
