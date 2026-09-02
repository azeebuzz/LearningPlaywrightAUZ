"use strict";
var HTTPMethod;
(function (HTTPMethod) {
    HTTPMethod["GET"] = "GET";
    HTTPMethod["POST"] = "POST";
    HTTPMethod["PUT"] = "PUT";
    HTTPMethod["DELETE"] = "DELETE";
})(HTTPMethod || (HTTPMethod = {}));
function sendRequest(method, endpoint) {
    console.log(method + " " + endpoint + " → 200 OK");
}
sendRequest(HTTPMethod.GET, "/api/users");
sendRequest(HTTPMethod.POST, "/api/users");
sendRequest(HTTPMethod.DELETE, "/api/users/1");
