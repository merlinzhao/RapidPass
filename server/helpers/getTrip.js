const connection = require("../DB/Connection");

module.exports = {
    async getAllTrips(userID) {
        let query = "SELECT * FROM TRIP_DATA WHERE userID = ?";
        let results = await connection(query, userID);
        return results;
    },
    async getLastTrip(userID) {
        let query = "";
        let results = await connection(query, userID);
        return results;
    },
}