/**
 * 
 *          APIController
 * 
 * This class exposes the endpoints that the client applications will use to interact with the Node server
 * 
 */

class APIController {

    //The constructor receives the instance of the express.js app  and the database connection pool
    constructor(app, dbConnectionPool) {
        this.app = app;
        this.dbConnectionPool = dbConnectionPool;
        // All the endpoints methods need to be called in the constructor to initialize the route.
        this.hello();
        this.getDisciplineById();
        this.getDisciplinesByVenue();
        this.getStates();
        this.getStatuses();
        this.getVenues();
        this.getVenueById();
        this.getVenueTopics();
        this.getZoneById();
    }

    hello() {
        this.app.get('/hello/', async (req, res) => {
            return res.status(200).json('Hello Client!');
        });
    }

    async getDisciplineById() {
        this.app.get('/discipline/:disciplineid', async (req, res) => {
            let disciplineBrk = require('./DBBrokers/disciplineDBBroker.js')(this.dbConnectionPool);
            let discipline = await disciplineBrk.getById(req.params.disciplineid);
            return (discipline) ? res.status(200).json(discipline) : res.status(404).send(`Discipline with code ${req.params.disciplineid} could not be found.`);
        });
        this.app.get('/discipline/', async (req, res) => {
            return res.status(404).send('Discipline could not be found. Please review the parameters.');
        });
    }

    async getDisciplinesByVenue() {
        this.app.get('/discipline/venue/:venueid', async (req, res) => {
            let disciplineBrk = require('./DBBrokers/disciplineDBBroker.js')(this.dbConnectionPool);
            let disciplineList = await disciplineBrk.getListByVenue(req.params.venueid);
            return (disciplineList.length !== 0) ? res.status(200).json(disciplineList) : res.status(404).send(`Disciplines not found for venue with code ${req.params.venueid}. Either the venue does not exist or it is a non competition venue.`);
        });
        this.app.get('/discipline/venue/', async (req, res) => {
            return res.status(404).send('Disciplines could not be found. Please review the parameters.');
        });
    }

    // Enpoint to get list of states (GET Endpoint)
    async getStates() {
        this.app.get('/states/', async (req, res) => {
            let stateBrk = require('./DBBrokers/stateDBBroker.js')(this.dbConnectionPool);
            let states = await stateBrk.getList();
            return (states) ? res.status(200).json(states) : res.status(404).send('No states could not be found.');
        });
    }

    // Enpoint to get list of statuses (GET Endpoint)
    async getStatuses() {
        this.app.get('/statuses/', async (req, res) => {
            let statusBrk = require('./DBBrokers/statusDBBroker.js')(this.dbConnectionPool);
            let statuses = await statusBrk.getList();
            return (statuses) ? res.status(200).json(statuses) : res.status(404).send('No statuses could not be found.');
        });
    }

    // Enpoint to get a venue by id (GET Endpoint)
    async getVenueById() {
        let self = this;
        this.app.get('/venue/:venueid', async (req, res) => {
            let venueBrk = require('./DBBrokers/venueDBBroker.js')(this.dbConnectionPool);
            let venue = await venueBrk.getById(req.params.venueid);
            return (venue) ? res.status(200).json(venue) : res.status(404).send(`Venue with code ${req.params.venueid} could not be found.`);
        });
        this.app.get('/venue/', async (req, res) => {
            return res.status(404).send('Venue could not be found. Please review the parameters.');
        });
    }

    // Enpoint to get the list of venues (GET Endpoint)
    async getVenues() {
        let self = this;
        this.app.get('/venues/', async (req, res) => {
            let venueBrk = require('./DBBrokers/venueDBBroker.js')(this.dbConnectionPool);
            let venueList = await venueBrk.getListWithDisciplines();
            return (venueList) ? res.status(200).json(venueList) : res.status(404).send(`No venues could be found.`);
        });
        this.app.get('/venues/*', async (req, res) => {
            return res.status(404).send('Venues could not be found. Please review the parameters.');
        });
    }

    // Enpoint to get the list of topics of a venues (GET Endpoint)
    async getVenueTopics() {
        let self = this;
        this.app.get('/topics/:venueid', async (req, res) => {
            let venueTopicsBrk = require('./DBBrokers/venueTopicDBBroker.js')(this.dbConnectionPool);
            let venueTopicsList = await venueTopicsBrk.getList(req.params.venueid);
            return (venueTopicsList) ? res.status(200).json(venueTopicsList) : res.status(404).send(`No topics could be found for the given venue.`);
        });
        this.app.get('/topics/*', async (req, res) => {
            return res.status(404).send('Topics could not be found. Please review the parameters.');
        });
    }

    // Enpoint to get a venue zone by id (GET Endpoint)
    async getZoneById() {
        this.app.get('/zone/:zoneid', async (req, res) => {
            let zoneBrk = require('./DBBrokers/zoneDBBroker.js')(this.dbConnectionPool);
            let zone = await zoneBrk.getById(req.params.zoneid);
            return (zone) ? res.status(200).json(zone) : res.status(404).send(`Zone with code ${req.params.zoneid} could not be found.`);
        });
        this.app.get('/zone/', async (req, res) => {
            return res.status(404).send('Zone could not be found. Please review the parameters.');
        });
    }
}

module.exports = (app, dbConnPool) => { return new APIController(app, dbConnPool); }