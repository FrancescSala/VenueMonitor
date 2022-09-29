class VenueTopic {
    constructor() {
        this.venueCode = '';
        this.topicId = 0;
        this.name = '';
        this.type = '';
        this.track = true;
        this.lowerBound = '';
        this.upperBound = '';
        this.value = '';
    };

    
    setVenueCode(code) { this.venueCode = code; }
    getVenueCode() { return this.venuCode; }
    setTopicId(id) { this.topicId = id; }
    getTopicId() { return this.topicId; }
    setName(name) { this.name = name; }
    getName() { return this.name; }
    setType(type) { this.type = type; }
    getType() { return this.type; }
    setTrack(track) { this.track = track; }
    getTrack() { return this.track; }
    setLowerBound(bound) { this.lowerBound = bound; }
    getLowerBound() { return this.lowerBound; }
    setUpperBound(bound) { this.upperBound = bound; }
    getUpperBound() { return this.upperBound; }
    setValue(value) { this.value = value; }
    getUpperBound() { return this.value; }
}

module.exports = () => { return new VenueTopic(); }
