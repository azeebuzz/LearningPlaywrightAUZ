"use strict";
function logBug(bug) {
    console.log("BUG- Report -> " + bug.id + " [" + bug.severity + "] " + bug.title);
    bug.stepsToReproduce.forEach(function (step, i) {
        console.log("  " + (i + 1) + ". " + step);
    });
}
logBug({
    id: 1,
    title: "VWO login is not working. ",
    severity: "High",
    "stepsToReproduce": ["Ste1 : open the app.vwo.com", "Step2 :  enter invalid credes", "step3 : verify the error message"]
});
logBug({
    id: 2,
    title: "VWO login is not working with arabic lang ",
    severity: "High",
    "stepsToReproduce": ["Ste1 : open the app.vwo.com", "Step2 :  enter invalid credes", "step3 : verify the error message"]
});
