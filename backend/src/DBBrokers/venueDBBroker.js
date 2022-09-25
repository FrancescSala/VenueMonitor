const venue = require('../BusinessObjects/venue.js');

class venueDBBroker {
    
    constructor(dbConnPool) {
        this.dbConnPool = dbConnPool;
    }

    insert(venue) {
        let sql = "INSERT INTO venues ( 'ven_venuecode', 'ven_venuename', 'ven_description'," +
                   "'ven_venuetype', 'ven_zonecode' ) VALUES ( " +
                   "'" + venue.getCode() + "', "
        
        console.log(sql);
    }

    update(venue) {

    }

    delete(code) {

    }

    async getById(code) {
        const sql = "SELECT * FROM venues WHERE ven_venuecode = ?";
        let [rows] = await this.dbConnPool.execute(sql, [code]);
        if (rows.length === 0)  return null;
        let v = venue();
        v.setCode(rows[0].ven_venuecode);
        v.setName(rows[0].ven_venuename);
        v.setDescription(rows[0].ven_description);
        v.setType(rows[0].ven_venuetype);
        v.setZone(rows[0].ven_zonecode);
        return v;
    };

    async getByIdWithDisciplines(code) {
        // const sql = "SELECT venues.*, venuedisciplines.vdi_disciplinecode FROM venues \
        //             LEFT JOIN venuedisciplines ON ven_venuecode = ? AND ven_venuecode = vdi_venuecode \
        //             ORDER BY vdi_disciplinecode";
        const sql = "SELECT venues.*, venuedisciplines.vdi_disciplinecode, disciplines.dis_disciplinename FROM venues \
        LEFT JOIN venuedisciplines ON ven_venuecode = ? AND ven_venuecode = vdi_venuecode \
        LEFT JOIN disciplines ON vdi_disciplinecode = dis_disciplinecode \
        ORDER BY vdi_disciplinecode";
        // dis_disciplinecode,dis_disciplinename
        let [rows] = await this.dbConnPool.execute(sql, [code]);
        if (rows.length === 0)  return null;
        let v = venue();
        v.setCode(rows[0].ven_venuecode);
        v.setName(rows[0].ven_venuename);
        v.setDescription(rows[0].ven_description);
        v.setType(rows[0].ven_venuetype);
        v.setZone(rows[0].ven_zonecode);
        rows.forEach(row => v.addDiscipline(row.vdi_disciplinecode));
        return v;            
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

    async getListWithDisciplines() {
        let sql = "SELECT venues.*, venuedisciplines.vdi_disciplinecode, disciplines.dis_disciplinename FROM venues \
                    LEFT JOIN venuedisciplines ON ven_venuecode = vdi_venuecode \
                    LEFT JOIN disciplines ON vdi_disciplinecode = dis_disciplinecode \
                    ORDER BY ven_venuecode, vdi_disciplinecode";
        let [rows] = await this.dbConnPool.execute(sql);
        if (rows.length === 0)  return null;
        let vlist = [];
        let v;
        rows.forEach((row, index) => {
            if (index === 0 || rows[index-1].ven_venuecode !== row.ven_venuecode) {
                if (index !== 0) vlist.push(v); 
                v = venue();
                v.setCode(row.ven_venuecode);
                v.setName(row.ven_venuename);
                v.setDescription(row.ven_description);
                v.setType(row.ven_venuetype);
                v.setZone(row.ven_zonecode);
            }
            if (row.vdi_disciplinecode !== null) v.addDiscipline(row.vdi_disciplinecode, row.dis_disciplinename);
            if (index === rows.length-1) vlist.push(v);
        });
        return vlist;
    }
}

module.exports = (dbConnectionPool) => { return new venueDBBroker(dbConnectionPool);}
