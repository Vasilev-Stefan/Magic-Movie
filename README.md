# Magic-Movie
Softuni JS web project

#### Workshop 1 - Express and Handlebards
### Setup
 - [x] Initialize Project
 - [x] Add Express Server `npm i express`
 - [x] Add Workshop Resources
 - [x] Config debugging
 - [x] Setup Handlebars `npm i express-handlebars`
 - [x] Setup static files
 - [x] Render Home Page
 - [x] Add Layout
 - [x] Render About Page
### Architecture and dynamic rendering
 - [x] Add home controller
 - [x] Add movie data layer
 - [x] Add movie service
 - [x] Render movies on home page
 - [x] Show no movies screen
### Create Movie
 - [x] Add Movie Controller
 - [x] Show create movie page
 - [x] Add routes
 - [x] Add 404 page
 - [x] Ready body data
 - [x] Create movie
   - [x] Add action
   - [x] Add service
   - [x] Add model method for creating movie
 - [x] Redirect after creation
 - [x] Add unique id for each cerated movie
### Details
 - [x] Add navigation button for detail page
 - [x] Add route with param for details page 
 - [x] GetOne movie from service
 - [x] Find movie by id from model
 - [x] Render details page with dynamic data
### Search
 - [x] Show static search page
 - [x] Render all movies
 - [x] Modify search form
 - [x] Filter movies
   - [x] By year
   - [x] By genre
   - [x] By title 
 - [x] Remember search words
### Bonuses
 - [x] Dynamic page title
 - [x] Rating (temp solution)
 - [x] File Persistance

#### Workshop 2 - MongoDB and Moongose
### Setup
- [x] Connect to database
- [x] Create model for Movie
- [x] Create model for Cast
- [x] Update static files
### Sync with moongose
- [x] Sync the home page
- [x] Sync the search page
- [X] Sync the details page
- [x] Add the ability to create movie to the new db
### Updating details apge
- [x] Add new static page
- [x] Add action to the page
- [x] Add dynamic data for cast to details view
### Add Cast page and sections
- [x] Add routes for cast create
- [x] Add create cast page  
- [x] Add static cast section to details page
- [x] Add the ability to create cast
### Add Attach Cast page
- [x] Add static page for attach cast
- [x] Add dynamic movie data
- [x] Add dynamic cast data
- [x] Add action
- [x] Sync added cast to movie

#### Workshop 3 - User service
### Setup
- [x] Install jsonwebtoken `npm i jsonwebtoken`
- [x] Install bcrypt `npm i bcrypt`
- [x] Install cookie-parser `npm i cookie-parser`
- [x] Upload new static files

### Navigation
- [x] Update navigation
- [ ] Show dynamic navigation based on user or guest

### Users model
- [x] Creat User model
- [x] Creat a jsonwebtoken upon successful user creation

### Movie model
- [x] Add creatorId property to the Movie model

### Login page
- [x] Create login page
- [x] Add routes to login page
- [x] Add login button to navigation
- [ ] Add action to login users

### Register page
- [x] Create register page
- [x] Add routes to register page
- [x] Add register button to navigation
- [x] Add the action to create user

### Logout
- [ ] Add logout button to navigation

### Details page
- [ ] Add text 'There are no cast added yet...' if there are no casts attached
- [ ] Add 'Edit' and 'Delete' buttons
- [ ] Movie creators should see 'Edit' and 'Delete' buttons

### Edit page
- [ ] Create Edit page
- [ ] Add routes to edit page
- [ ] Display dynamic data on edit page
- [ ] Add action to edit movie


### Authorization
- [ ] Update navigation on login and logout
# Guests can access:
- [ ] Home page
- [ ] About page
- [ ] Search page
- [ ] Login page
- [ ] Register page
# Logged-in users can access:
- [ ] Home page
- [ ] About page
- [ ] Search page
- [ ] Details page
- [ ] Create movie page
- [ ] Create cast page
- [ ] Attach cast page
- [ ] Logout cast page
























