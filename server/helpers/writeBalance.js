const connection = require("../DB/Connection");


module.exports = {
    async updateBalance(userID, money) {
        let query = "UPDATE ACCOUNT_DATA SET balance = ? WHERE userID = ?"
        let values = [money, userID];
        await connection(query, values);
    }
}