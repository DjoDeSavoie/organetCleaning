Organet

Software Development Project: Factory Cleaning Prioritization

Project Overview

Context

The idea for this web application originated from a summer job I had at a flour mill. I noticed that the task of monitoring and scheduling cleaning for different factory zones could be automated, saving significant time for the quality assurance team. Motivated by this observation, I teamed up with two other Computer Science Engineering students who shared my interest and found this project both meaningful and challenging.

Hygiene is a critical concern in the food industry, especially in factories supplying food to large populations. With this in mind, Organet aims to streamline the cleaning process and ensure a high standard of hygiene through automation.

How It Works

1. Factory Zones

The factory is divided into various strategic zones, each with a specific cleaning interval determined by its exposure to dust and other contaminants.

2. Maintenance Tracking
	•	Cleaning staff use their badges to log the start and end of their cleaning sessions for a given zone.
	•	After completing a cleaning session, the staff member uploads a photo of the cleaned zone to the application.
	•	The application visually tracks cleanliness:
	•	Green: Zone is clean.
	•	Orange: Zone requires attention soon.
	•	Red: Zone needs immediate cleaning.

When a zone reaches the red status, the system sends an alert and assigns the task to an available cleaning staff member based on their schedule.

3. Adaptability

The application is designed to be flexible and adaptable. Factories can:
	•	Define specific zones to monitor.
	•	Set customized cleaning intervals for each zone.

Database Modeling

History Table

The application uses a relational database. The history table combines primary keys from the user and zone tables, along with timestamps, to keep track of cleaning sessions.

Planned Improvements
	1.	Cookie Management
Implement cookie management to store client information and enable smooth navigation between pages.
	2.	Password Encryption
Secure user data by encrypting passwords during registration and login.
	3.	Unit Testing
Add unit tests for each commit to ensure the application’s stability and reliability.

Project Directory Organization

Naming Conventions
	•	Use English for naming files, folders, and variables.
	•	Use camelCase for file names (e.g., listZones.html instead of listezones.html).
	•	For actions:
	•	Singular for single items (e.g., deleteZone).
	•	Plural for multiple items (e.g., listZones).

Getting Started

Launching the Application

Follow these steps to start the application:
1.	Open your terminal.
2.	Split the terminal into two windows:

Frontend:
	
 	cd front  
  
	node index.js  


Backend:

	cd back  
	node index.js  
	
 3.	Open your browser and navigate to: localhost:3000 



You can now use the web application!

Thank you for choosing Organet to improve hygiene standards and streamline cleaning operations in your factory!
