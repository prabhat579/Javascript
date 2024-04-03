const accountId =  144553
let accountEmail = "test@gmail.com"
var accountPassword = "12345"
accountCity = " Mumbai"
let accountStatus;
// accountId = 2; // not allowed

console.log(accountId);

/*
Prefer not to use var beacause of scope
*/

accountEmail = "change@gmail.com"
accountPassword = "21121211"
accountCity = "PUNE"


console.table([accountId, accountEmail, accountPassword, accountCity, accountStatus])