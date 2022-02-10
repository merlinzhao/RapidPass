const connection = require("../DB/Connection");

module.exports = async (tagId) => {
    let query = "SELECT balance FROM ACCOUNT_DATA WHERE tagID = ?";
    let results = await connection(query, tagId);
    return results;
};
