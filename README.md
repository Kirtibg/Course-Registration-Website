# Course Registration Application

This is a Web application called CoureDesk where courses can be created for students to register and subscribe. 

### Requirements

For development, you will only need Node.js installed in your environement. You will also require the following modules:
1. express
2. express-session
3. pug
4. lodash 

### Node
Node.js is an application runtime environment for writing server-side applications in JavaScript. It's unique I/O model makes it much more flexible and best for scalable and real-time situations that are more demanding of our servers.

 Node installation on Windows:
  Just go on [official Node.js website](https://nodejs.org/) and download the installer.


If the installation was successful, you should be able to run the following command.

    $ node --version
    v13.6.0

    $ npm --version
    6.13.7

If you need to update `npm`, you can make it using `npm`

    $ npm install npm -g


### Install

   - Clone/download the project from the link: https://github.com/Kirtibg/Course-Registration
   - Using command promt, navigate to the directory where the project is saved.
   - Open the pr0ject folder 
   - Now install the following modules using commands
   
    $ npm install express
    $ npm install express-session
    $ npm install pug
    $ npm install lodash 





### Configure app

  - Now we are ready to run the application with the following command:

         $ node main.js
 
On the browser, access link: http://localhost:3000/home-page



### Application
This application involes three major pages:
   - Adding a Course page
   - Registering as a student page
   - Login student page where a student can subscribe to available courses
    
    
### Database:
  - I have used text files to save data in the same folder as the code
  - Sample file is given with the code
   
  
### Things Learnt
 - The use of nodejs in this project gives us a basic understanding of how asynchronous programming works.
 - Use of functions like "promise" saves us from a lot of nested callback functions(callback hell). It allows us to associate handlers to  an asynchronous action's eventual success value or failure reason. Using promise we can make asynchronous methods return values like synchronous methods.
 - In this project we also use Lodash, a Javascript utility library to help us deal with arrays and simplify working with files as database.
 - We also use express session to assign a student an ID and make all further requests using that ID.

    

   
#### I thank PayPal VAP team for their support and guidance in the making of this project.
