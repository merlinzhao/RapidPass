const connection = require("../DB/Connection");

module.exports = {
    async getByEmail(email) {
        let query = "SELECT * FROM ACCOUNT_DATA WHERE email = ?";
        let results = await connection(query, email);
        return results;
    },

    async getByTag(tagId) {
        let query = "SELECT * FROM ACCOUNT_DATA WHERE tagID = ?";
        let results = await connection(query, tagId);
        return results;
    },

    async getByName(firstName, lastName) {
        let query = "SELECT * FROM ACCOUNT_DATE WHERE firstName = ?"


    }
};
