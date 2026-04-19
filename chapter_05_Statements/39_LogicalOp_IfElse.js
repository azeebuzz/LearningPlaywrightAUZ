let userName = "Azeeb";
let password = "Ans@123"
let isAccountLocked = false;

if ((userName === "Azeeb" && password === "Ans@123") && !isAccountLocked) {
    console.log("Allowed to login");
} else {
    console.log("Access Denied");
}

// here why not use != instead of just ! ? Is it because it's a comparison operator which needs two values ?