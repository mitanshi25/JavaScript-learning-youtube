// Const means we can not change it later
const accountId = 1555

//we can change the value
let accountEmail = "mitanshi@gmail.com"

//we can change the value (this is now outdated) due to issue in block scope an functional scope problem
var accountPassword = "1234"

//we can change the value again we should not use it
accountCity = "Kasganj"

let accountState; // it will be undefined

// accountId = 2

accountEmail = "hj@gmail.com"
accountPassword ="1234444"
accountCity ="Delhi"

console.log(accountId);

console.table([accountId,accountEmail, accountPassword, accountCity, accountState])