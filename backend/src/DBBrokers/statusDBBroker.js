const status = require('../BusinessObjects/status.js');

class statusDBBroker {

    constructor(dbConnPool) {
        this.dbConnPool = dbConnPool;
    }

    async insert(status) {
    }

    async update(status) {
    }

    async delete(status) {
    }

    async getList() {
        let sql = "SELECT ttl_valueid, ttl_value FROM topictypeslists WHERE ttl_topictypename = 'status' ORDER BY ttl_valueid";
        let [rows] = await this.dbConnPool.execute(sql);
        let statuses = [];
        for (let row of rows) {
            let s = status();
            s.setId(row['ttl_valueif']);
            s.setName(row['ttl_value']);
            statuses.push(s);
        };
        return statuses;
    }
}

module.exports = (dbConnectionPool) => { return new statusDBBroker(dbConnectionPool); }
