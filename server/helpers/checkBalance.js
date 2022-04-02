const connection = require("../DB/Connection");
const getUserData = require("./getUserData");
const writeBalance = require("./writeBalance");

module.exports = async (tagID, fareCost) => {
    let data = await getUserData.getByTag(tagID)
    let balance = data[0].balance
    let result = { 'okay': false, 'balance': 0 };
    if (balance >= fareCost) {
        balance = balance - fareCost;
        await writeBalance.updateBalance(tagID, balance)
        console.log("has sufficient balance: $", balance);
        result = { 'okay': true, 'balance': balance };
    } else {
        console.log("ALERT: insufficient balance: $", balance);
    }
    return result;

};
