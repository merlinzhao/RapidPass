const connection = require("../DB/Connection");


module.exports = {
    async updateBalance(tagID, money) {
        let query = "UPDATE ACCOUNT_DATA SET balance = ? WHERE tagID = ?"
        let values = [money, tagID];
        let results = await connection(query, values);
        return results;
    }
}