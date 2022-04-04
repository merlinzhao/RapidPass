const connection = require("../DB/Connection");

module.exports = {
    async getAllTrips(tagID) {
        let query = "SELECT * FROM TRIP_DATA WHERE tagID = ?";
        let results;
        try {
            results = await connection(query, tagID);
        } catch {
            results = "";
        }
        return results;
    },
    async getLastTrip(tagID) {
        let query = "SELECT * FROM TRIP_DATA WHERE tagID = ? ORDER BY tripID DESC LIMIT 1 ";
        let results = await connection(query, tagID);
        return results;
    },
}