let responses = [200, 201, 404, 500, 404, 200, 503];

let success = responses.every(response => response >= 200 && response <= 299);

let successMsg = success ? "All responses are successful" : "Not all responses are successful. Check the codes";

let nonSuccess = responses.find(response => response > 299 || response < 200);

let nonSuccessMsg = nonSuccess !== undefined ? `First Non-Success Code is : ${nonSuccess}` : "No Non Success codes found";

let unique = responses.filter((response, index) => responses.indexOf(response) === index && (response < 200 || response > 299));
let finalUniqueError = unique.join(", ");

console.log(successMsg);
console.log(nonSuccessMsg);
console.log(`Unique Error Codes: ${finalUniqueError}`);

