if ("hello") console.log("String is truthy");
if (42) console.log("String is truthy");
if ({}) console.log("Empty object is truthy")
if ([]) console.log("Empty object is truthy")




// False Results
if ("") console.log("Wrong");
if (null) console.log("Wrong");
if (undefined) console.log("Wrong");
if (NaN) console.log("Wrong");

// Is this possible ? like to have one liner statements ? I thought it should have an if and else to end it properly.