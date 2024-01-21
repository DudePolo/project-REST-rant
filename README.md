# Project REST-Rant

REST-Rant is an app where users can review restaurants.

| Method | Path | Purpose |
| --- | --- | --- |
| GET | / | Home page |
| GET | /places | Places index page |
| POST | /places | Create new place |
| GET | /places/new | Form page for creating a new place |
| GET | /places/:id | Details about a particular place |
| PUT | /places/:id | Update a particular place |
| GET | /places/:id/edit | Form page for editing an existing place |
| DELETE | /places/:id | Delete a particular place |
| POST | /places/:id/rant | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET | * | 404 page (matches any route not defined above) |


[x] Project setup, stub three routes, and creating a README file
[] Stub remaining GET and POST routes, planning mock restaurant data, drawing wireframes, and making your first view
[] Making more views, creating a layout page, and expanding your README
[] Adding some style with CSS
[] Forms, validation, and navigation
[] Implementing delete functionality and adding a DELETE route
[] Implementing edit form and functionality, adding a PUT route
[] Implementing the Mongoose ODM
[] Seed data, validations, and helper methods
[] Adding commentary: rants and raves
[] Populating data for star ratings
[] Deploying your project