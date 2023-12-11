# Project 1: Shared shopping list

Write the documentation of your project here. Do not include your personal
details (e.g. name or student number).

Remember to include the address of the online location where your project is
running as it is a key part of the submission.



Shared shopping lists application:

A user can run the project using docker compose up or inserting their own database credentials to the database.js. After that the application can be started using the command "deno run --unstable --allow-all --watch app.js" on the root folder of the application.
When the application opens up the user can see the heading of Shared shopping lists and some statistics of the application. The statistics show the sotal number of shopping lists and the total number of shopping list items. The main page has also a link to the lists.

By cliking the link the user is redirected to the "/lists" page where the user can see a from for adding a new shopping list. Also all of the active shopping lists are shown. In this page the user can deactivate any one of the active shopping lists which results on the list being removed from the list of active shopping lists. The user can also click any of the active shopping lists. By cliking one of the active shopping lists the user is redirected to the page "/lists/id" where "id" is the id of the shopping list that was cliked. The page also has a link back to the main page of the application.

When the user accesses the page "/lists/id the user is shown the name of the shopping list that the user just cliked. The page also has a link which redirects the user back to the page where are all of the shopping lists. The page at "lists/id" has also a form for adding new items to the shopping list. The form also shows all of the items of the shopping list in alphabetical order. Below each shoppig list item there is a button that says "Mark collected!". Cliking that button marks the item as "collected" and the item is striked though. The shopping list items that are collected are shown below the not collected items in the page in alphabetical order. 
