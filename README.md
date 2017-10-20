# node-express
This is a Front-End application developed with Node,Express and Gulp.

It also uses MySQL database to fetch informations to be displayed on the views.

* You can create the necessary tables with the following script.

    * CREATE TABLE `books` (    
        `id` int(11) NOT NULL AUTO_INCREMENT,        
        `title` varchar(250) DEFAULT NULL,        
        `author` varchar(250) DEFAULT NULL,        
        PRIMARY KEY (`id`)        
      )

* Install all the necessary dependencies typing the following commands.

    * **NPM Dependencies:** npm install
    * **Bower Dependencies:** bower install
    
To Run the application, just type **npm start**

