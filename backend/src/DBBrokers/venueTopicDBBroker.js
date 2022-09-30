const venueTopic = require('../BusinessObjects/venueTopic.js');

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

    async getList(venueCode) {
        const sql = "SELECT * FROM venuetopics, topics, categories  WHERE vto_venuecode = ? \
        AND vto_topicid = top_topicid AND top_topiccategory = cat_categoryid \
        ORDER BY cat_categoryname, top_topictype, top_topicname";
        let [rows] = await this.dbConnPool.execute(sql, [venueCode]);
        if (rows.length === 0)  return null;
        let vtList = [];
        rows.forEach(row => {
            let vt = venueTopic();
            vt.setVenueCode(row.vto_venuecode);
            vt.setTopicId(row.vto_topicid);
            vt.setCategory(row.cat_categoryname)
            vt.setName(row.top_topicname);
            vt.setType(row.top_topictype);
            vt.setTrack(row.vto_track);
            vt.setLowerBound(row.vto_lowerbound);
            vt.setUpperBound(row.vto_upperbound);
            vt.setValue(row.vto_value);
            vtList.push(vt);    
        });
        return vtList;
    };
}

module.exports = (dbConnectionPool) => { return new venueTopicDBBroker(dbConnectionPool);}
