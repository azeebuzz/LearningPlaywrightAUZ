/*In CI/CD pipelines, tests run against different environments. 
Write a JavaScript program using a switch statement that takes an environment name stored in a variable and 
prints the base URL, API key pattern, and timeout. Use const for fixed values and let for the assembled config.

Environments: dev, staging, qa, production/prod. Each has different base URL, API key prefix, timeout, and description.*/

let envName = "dev";
let config;

switch (envName) {
    case "dev":
    case "developer": {
        const env = "DEVELOPMENT";
        const url = "https://dev-api.testingacademy.com";
        const apiKey = "dev_key_xxxx-xxxx"
        const timeout = "3000ms"
        const description = "Development - Creation in process"
        config = (`Environment: ${env}
Base URL: ${url}
API Key: ${apiKey}
Timeout: ${timeout}
Description: ${description} `);
        break;
    }
    case "qa": {
        const env = "QUALITY ASSURANCE";
        const url = "https://qa-api.testingacademy.com";
        const apiKey = "qa_key_xxxx-xxxx"
        const timeout = "5000ms"
        const description = "QA - Testing in process"
        config = (`Environment: ${env}
Base URL: ${url}
API Key: ${apiKey}
Timeout: ${timeout}
Description: ${description} `);
        break;
    }
    case "staging": {
        const env = "STAGING";
        const url = "https://stg-api.testingacademy.com";
        const apiKey = "stg_key_xxxx-xxxx"
        const timeout = "8000ms"
        const description = "Staging - Pre Production mirror"
        config = (`Environment: ${env}
Base URL: ${url}
API Key: ${apiKey}
Timeout: ${timeout}
Description: ${description} `);
        break;
    }
    case "prod":
    case "production": {
        const env = "PRODUCTION";
        const url = "https://prod-api.testingacademy.com";
        const apiKey = "prod_key_xxxx-xxxx"
        const timeout = "9000ms"
        const description = "Production - End user"
        config = (`Environment: ${env}
Base URL: ${url}
API Key: ${apiKey}
Timeout: ${timeout}
Description: ${description} `);
        break;
    }
    default: {
        config = "UNKNOWN - Unhandled environment name";
    }
}
console.log(config);




