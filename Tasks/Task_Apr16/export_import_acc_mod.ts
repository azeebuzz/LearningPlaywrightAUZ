import { Person } from "./access_modifiers.js";

// -------------------------------------------------------------
// Test 1: Inheritance across folders (extends)
// -------------------------------------------------------------
class Employee extends Person {
    public showDetails(): void {
        console.log(this.name);         // ✅ OK: 'name' is public
        console.log(this.familySecret);  // ✅ OK: 'familySecret' is protected, and Employee inherits from Person

        // console.log(this.diary);     
        // ❌ Error: 'diary' is private and cannot be accessed outside the Person class
    }
}

// -------------------------------------------------------------
// Test 2: Direct Object Instance across folders (new)
// -------------------------------------------------------------
const person = new Person();

console.log(person.name);          // ✅ OK: 'name' is public
// console.log(person.familySecret); // ❌ Error: 'familySecret' is protected. Instances cannot access it directly!
// console.log(person.diary);        // ❌ Error: 'diary' is private. Instances cannot access it directly!