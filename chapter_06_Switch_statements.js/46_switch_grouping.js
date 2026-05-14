let browser = "Edge";
switch (browser) {
    case "chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chormium project");
        break;
    case "Firefox":
        console.log("Mozilla Project");
        break;
    case "safari":
        console.log("Apple");
        break;
    default:
        console.log("Unknown browser");
}