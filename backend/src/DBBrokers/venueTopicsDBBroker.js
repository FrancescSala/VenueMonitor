const venue = require('../BusinessObjects/venueTopic.js');

class venueTopicDBBroker {
    
    constructor(dbConnPool) {
        this.dbConnPool = dbConnPool;
    }

    insert(venueTopic) {
        let sql = "INSERT INTO venueTopics ( 'vto_venuecode', 'vto_topicid', 'vto_track'," +
                   "'vto_lowerbound', 'vto_upperbound', 'vto_values' ) VALUES ( " +
                   "'" + venueTopic.getCode() + "', ";
            // ETC ETC TO BE COMPLETED
        console.log(sql);
    }

    update(venueCode, topicId) {

    }

    delete(venueCode, topicId) {

    }

    async getById(venueCode, topicId) {
        const sql = "SELECT * FROM venuetopics, topics WHERE vto_venuecode = ? AND vto_topicid = ? \
                     AND vto_topicid = top_topicid";
        let [rows] = await this.dbConnPool.execute(sql, [venueCode,topicId]);
        if (rows.length === 0)  return null;
        let vt = venueTopic();
        vt.setVenueCode(rows[0].vto_venuecode);
        vt.setTopicId(rows[0].vto_topicid);
        vt.setName(rows[0].top_topicname);
        vt.setType(rows[0].top_topictype);
        vt.setTrack(rows[0].vto_track);
        vt.setLowerBound(rows[0].vto_lowerbound);
        vt.setUpperBound(rows[0].vto_upperbound);
        vt.setValue(rows[0].vto_value);
        return vt;
    };

    async getList() {
        let sql = "SELECT * FROM venues ORDER BY ven_venuecode";
        let [rows] = await this.dbConnPool.execute(sql);
        if (rows.length === 0)  return null;
        let vlist = [];
        rows.forEach(row => {
            let v = venue();
            v.setCode(row.ven_venuecode);
            v.setName(row.ven_venuename);
            v.setDescription(row.ven_description);
            v.setType(row.ven_venuetype);
            v.setZone(row.ven_zonecode);
            vlist.push(v);    
        });
        return vlist;
    };

}

module.exports = (dbConnectionPool) => { return new venueTopicDBBroker(dbConnectionPool);}
