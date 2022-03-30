const connection = require("../DB/Connection");

module.exports = {
    async checkTransfer(userID, money) {
        let query = "UPDATE ACCOUNT_DATA SET balance = ? WHERE userID = ?"
        let values = [money, userID];
        let results = await connection(query, values);
        return results;
    }
}