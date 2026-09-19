"use strict";
function wrapResponse(statusCode, data) {
    return { statusCode: statusCode, data: data };
}
let userResp = wrapResponse(200, "admin");
console.log(userResp);
let flagResp = wrapResponse(200, true);
console.log(flagResp);
let countResp = wrapResponse(200, 42);
console.log(countResp);
