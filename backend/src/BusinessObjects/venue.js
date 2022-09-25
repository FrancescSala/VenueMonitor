class Venue {
    constructor() {
        this.code = '';
        this.name = '';
        this.description = '';
        this.type = '';
        this.zone = '';
        this.disciplines = [];
    };

    
    setCode(code) { this.code = code; }
    getCode() { return this.code; }
    setName(name) { this.name = name; }
    getName() { return this.name; }
    setDescription(description) {this.description = description; }
    getDescription() { return this.description; }
    addDiscipline(code, name) { if(this.disciplines.findIndex(elem => elem.code === code) === -1) this.disciplines.push({code, name}); }
    delDiscipline(code) { this.disciplines = this.disciplines.filter(item => item.code !== code); }
    setDisciplines(disciplines){this.disciplines = (Array.isArray(disciplines)) ? new Array(disciplines) : disciplines; }
    getDisciplines(){ return (Array.isArray(this.disciplines)) ? new Array(this.disciplines) : this.disciplines; }
    setType(type) {this.type = type; }
    getType() { return this.type; }
    setZone(zone) {this.zone = zone; }
    getZone() { return this.zone; }


}

module.exports = () => { return new Venue(); }
