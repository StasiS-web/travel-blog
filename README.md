# Travel Blog

## :art: Project Introduction
Travel Blog is a project created for the project defense of the React Softuni Course (Feb - Mar 2023) as part of the Front-End Module.
This project is an React App for people who love to travel. Destination are separated by continents. 

## Database
Using the Softuni Practice server to store data and display the data on the pages.

## Navigation
User are able to navigate through various links like:
* Home, 
* About, 
* Destination with underlying navigation
    * divides the destination into categories using the continents
* Contacts

## Functionality
The application contains two parts:
Public part
    * Guests can:
        - visit Home page
        - register: "/register"
        - login: "/login"
        - view all articles: "/destinations"
        - view a single article's details: "/destinations:postId"
        - view 404 page

Private part
    * Logger users can:
        - create new articles: "/destinations/create-article"
    * The author of the post can:
        - edit existing articles: "/destinations/edit-article/:postId",
        - delete existing article by id
    * The owner of the account
        - edit the details in the profile page: "/profile-edit"

## :hammer: Used technologies
* HTML
* CSS
* JavaScript 
* ReactJS
* [SoftUni practice server](https://github.com/softuni-practice-server/softuni-practice-server) as a backend solution
* [Cloudinary](https://console.cloudinary.com/) - as a storage solution for the image files

## How to start
In here you can find the scripts I have used for this project.

### `cd client`
Redirects you to the app directory.
In the project directory, you can run:
### `npm start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

### `cd server` 
Redirects you to the server directory.

###  `node server.js`
Runs starts the server.

## Authentication
Login credentials for this application
email: jean@admin.awesome.com
password: 123456


## Disclaimer
The content and image used in this project does not have a commercial license and it is not used for commercial purpose. The image on the error 404 page were purchased with License for personal use only. All the content in this project is used only for educational purpose.

## Resources
* Use local image files
* Person images are from [Pexels](https://www.pexels.com/)
* Blog images are from [Unsplash](https://unsplash.com/)
* Article contents are from [wikipedia](https://en.wikipedia.org/wiki/Main_Page)
* The design template used for this projects comes from [Free HTML5](http://freehtml5.co/)
* [React Beta Documentation](https://beta.reactjs.org/)

## License
This project is licensed with the MIT license. This [image](https://res.cloudinary.com/dnvg6uuxl/image/upload/v1678298265/travel-blog/error_404_wnxcl7_gzg5il.jpg) has a license for personal use only.

