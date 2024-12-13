const accountId = 144553
let accountEmail = "sourav@google.com"
var accountPassword = "12345"
accountCity = "Barpali"
let accountState;

// accountId = 2 // not allowed


accountEmail = "sd@sd.com"
accountPassword = "54321"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])