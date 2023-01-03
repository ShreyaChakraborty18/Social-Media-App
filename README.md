# Hive-Hut

It is a Full-stack Social Media website that has authentication(login/signup) functionality, 
upon registration a user profile is created and the user is taken to the home page of the application.
JWT Authentication has been used to authenticate the user in this app.<br>
In the home page there is an option to post something (image or text), the image posted are stored in 
the local storage. Rest API is used to handle the posts and the users. 
<br>In the left side of the page, the user profile picture and cover picture is shown 
in a card and below that the followers list is shown(The other people who have registered).<br>
Upon going to "My Profile", user profile is shown where the user can fill in information about them
and they can also update/change their cover picture and profile picture.<br>
The app also supports dark and light mode.
Users can follow and unfollow other users and it will render across the entire app.


## Dependencies

[![dependency - Node.js](https://img.shields.io/static/v1?label=dependency&message=Node.js&color=%23F7E152)](https://nodejs.org/en/)  

[![library - React.js](https://img.shields.io/static/v1?label=library&message=React.js&color=%2352F7BA)](https://reactjs.org/)    

[![icons - react unicons](https://img.shields.io/static/v1?label=icons&message=react+unicons&color=%2352C2F7)](https://iconscout.com/icons?gclid=CjwKCAiAwc-dBhA7EiwAxPRylPC3t-9e5BD0qGYYpi6p8e1Ub8JHd18hqx4h0iwB_KswYTnXbAj2iRoCLboQAvD_BwE)      

[![language - javascript](https://img.shields.io/static/v1?label=language&message=javascript&color=%23EEF752)](https://www.javascript.com/)

[![modal - mantime-modal](https://img.shields.io/static/v1?label=modal&message=mantime-modal&color=%23F76F52)](https://mantine.dev/core/modal/)       

[![authentication - JWT](https://img.shields.io/static/v1?label=authentication&message=JWT&color=%23F7525B)](https://jwt.io/introduction)       

[![database - mongoDB](https://img.shields.io/static/v1?label=database&message=mongoDB&color=%23F7525B)](https://www.mongodb.com/home)        

[![API - Rest API](https://img.shields.io/static/v1?label=API&message=Rest+API&color=%237DCEA0)](https://restfulapi.net/)

[![Dependency - Express](https://img.shields.io/static/v1?label=Dependency&message=Express&color=%23F39C12)](https://expressjs.com/)

[![Library - Mongoose](https://img.shields.io/static/v1?label=Library&message=Mongoose&color=%233498DB+)](https://mongoosejs.com/)

[![Encryption - bcrypt](https://img.shields.io/static/v1?label=Encryption&message=bcrypt&color=%235DADE2)](https://www.npmjs.com/package/bcrypt)


## Demo

https://hivehut-frontend.onrender.com


### Sign up page - 

![image](https://user-images.githubusercontent.com/87025870/210404280-86fc3765-78ad-489d-960c-6edbc3cb43af.png)


### Log In page -

![image](https://user-images.githubusercontent.com/87025870/210405139-3637ff28-7a90-45ee-b278-06a776345c09.png)


### Home Page-

![image](https://user-images.githubusercontent.com/87025870/210408651-69fad131-b4d1-4978-9b66-68ad506fd982.png)


### Profile Page-

![image](https://user-images.githubusercontent.com/87025870/210409146-fcf1da0a-683b-431b-b629-0e1d2a169835.png)


### Share Function-

![image](https://user-images.githubusercontent.com/87025870/210409546-3311b960-7a40-4602-8f66-7c0ff53dedc5.png)


### Information Update-

![image](https://user-images.githubusercontent.com/87025870/210409681-b79f78fc-9c98-4f47-a3e5-20de124f5e25.png)


### Dark Mode-

![image](https://user-images.githubusercontent.com/87025870/210409932-2c65d9e3-d24b-4acf-b4b8-5e59e0b8a094.png)


## Deployment

This project has been deployed using render.
For the separate files i.e. client and server, we make two different web services.
For server we use web site deployment and for client we use static site 
deployment.
We upload the .env variables to the site and we give access to the IP addresses in 
Mongo DB.






