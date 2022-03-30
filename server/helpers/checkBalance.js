const connection = require("../DB/Connection");
const getUserData = require("./getUserData");

module.exports = async (tagID, fareCost) => {
    let data = await getUserData.getByTag(tagID)
    let balance = data[0].balance
    let result = false
    if (balance >= fareCost) {
        // balance = balance - fareCost;
        console.log("has suficent balance: $", balance);
        // await writeBalance.updateBalance(userID, balance)
        result = true
    } else {
        console.log("ALERT: nsuficent balance: $", balance);
    }
    return result;

};
