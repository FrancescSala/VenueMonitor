/**
 *                 ApplicationServer
 * Required Modules
 * - 'express' a Web Framework
 * - 'mysql2'  to connect to the MySQL database 
 * - 'body-parser' allows to parse the body of the post request into a JSON
 * 
*/
 const express = require('express');
 const mysql = require('mysql2/promise');
 const bodyParser = require('body-parser');
 const cors = require('cors');
 const env = require('dotenv').config();

 class ApplicationServer {
 
     constructor() {
        this.app = express();           //Express application object
        this.dbConnectionPool = null;   //connect to database
        this.connectToDB();
        this.initExpress();             //initialize the express framework
        this.initExpressMiddleWare();   //initialize middleware modules
        this.initAPIControllers();      // initialize the API endpoints of the application
        this.initHTMLControllers();     // initialize the HTML endpoints of the application

        this.start();                   //run the express application
     }
 
    async connectToDB() {
        let self = this;
        // create the connection pool. Pool specific settings are the default
        try {
        self.dbConnectionPool = mysql.createPool({
            host     : process.env.DB_HOSTNAME,
            database : process.env.DB_INSTANCE,
            user     : process.env.DB_USERNAME,
            password : process.env.DB_PASSWORD,
            connectionLimit: 10,
            waitForConnections: true,
            queueLimit: 0 
        });

        // now that supposedly we are connected, let's test the connection
        let rows = await self.dbConnectionPool.execute('SELECT 1 FROM DUAL');
        } catch (err) {
        console.log(`SEVERE ERROR. Could not connect to database: ${err}`);
        }
    };

     initExpress() {
         this.app.set("port", 4000);
     }

     initExpressMiddleWare() {
		this.app.use(bodyParser.urlencoded({extended:true}));
		this.app.use(bodyParser.json());
        this.app.use(cors());  // this is to allow calls from backend application, which is in another domain
	}

    initAPIControllers() {
        require('./APIController.js')(this.app, this.dbConnectionPool);
	}

    initHTMLControllers() {
        require('./HTMLController.js')(this.app, this.dbConnectionPool);
	}
 
     start() {
         let self = this;
         this.app.listen(this.app.get('port'), () => {
             console.log(`Server Listening for port: ${self.app.get('port')}`);
         });
     }
 
 }
 
 new ApplicationServer();