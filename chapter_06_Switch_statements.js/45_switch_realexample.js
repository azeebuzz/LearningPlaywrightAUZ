// You're working on API validation
// response code - 200, 400, 404

let response_code = 401;
switch (response_code) {
    case 200:
        console.log("200 - OK");
        break;
    case 404:
        console.log("404 - Not found");
        break;
    default:
        console.log("No status code match");
}