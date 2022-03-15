const connection = require("../DB/Connection");

module.exports = async (tagId) => {
    let query = "SELECT balance FROM ACCOUNT_DATA WHERE tagID = ?";
    let results;
    try {
        results = await connection(query, tagId);
    } catch {
        results = "0";
    }
    return results;
};
