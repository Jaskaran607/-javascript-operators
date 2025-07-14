// JavaScript Operators Example

// 1. Arithmetic Operators
console.log("--- Arithmetic Operators ---");
let a = 10, b = 3;
console.log("Addition (+):", a + b);       // 13
console.log("Subtraction (-):", a - b);    // 7
console.log("Multiplication (*):", a * b); // 30
console.log("Division (/):", a / b);       // 3.333...
console.log("Modulus (%):", a % b);        // 1 (remainder)
console.log("Exponentiation (**):", a ** b); // 1000 (10^3)
console.log("Increment (++):", ++a);       // 11 (pre-increment)
console.log("Decrement (--):", --b);       // 2 (pre-decrement)

// 2. Assignment Operators
console.log("\n--- Assignment Operators ---");
let x = 5;
console.log("Simple assignment (=):", x);
x += 3; console.log("Add and assign (+=):", x); // 8
x -= 2; console.log("Subtract and assign (-=):", x); // 6
x *= 4; console.log("Multiply and assign (*=):", x); // 24
x /= 3; console.log("Divide and assign (/=):", x); // 8
x %= 5; console.log("Modulus and assign (%=):", x); // 3
x **= 3; console.log("Exponent and assign (**=):", x); // 27

// 3. Comparison Operators
console.log("\n--- Comparison Operators ---");
let num1 = 5, num2 = "5", num3 = 10;
console.log("Equal (==):", num1 == num2);     // true (value equality)
console.log("Strict equal (===):", num1 === num2); // false (type + value)
console.log("Not equal (!=):", num1 != num3); // true
console.log("Strict not equal (!==):", num1 !== num2); // true
console.log("Greater than (>):", num3 > num1); // true
console.log("Less than (<):", num1 < num3);    // true
console.log("Greater than or equal (>=):", num1 >= 5); // true
console.log("Less than or equal (<=):", num1 <= 4);    // false

// 4. Logical Operators
console.log("\n--- Logical Operators ---");
let bool1 = true, bool2 = false;
console.log("AND (&&):", bool1 && bool2); // false
console.log("OR (||):", bool1 || bool2);  // true
console.log("NOT (!):", !bool1);          // false

// 5. Bitwise Operators
console.log("\n--- Bitwise Operators ---");
let bit1 = 5, bit2 = 3; // 5 = 0101, 3 = 0011
console.log("AND (&):", bit1 & bit2);  // 1 (0001)
console.log("OR (|):", bit1 | bit2);   // 7 (0111)
console.log("XOR (^):", bit1 ^ bit2);  // 6 (0110)
console.log("NOT (~):", ~bit1);        // -6 (inverts all bits)
console.log("Left shift (<<):", bit1 << 1); // 10 (01010)
console.log("Right shift (>>):", bit1 >> 1); // 2 (0010)
console.log("Zero-fill right shift (>>>):", bit1 >>> 1); // 2

// 6. Ternary Operator
console.log("\n--- Ternary Operator ---");
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote?", canVote); // "Yes"

// 7. Type Operators
console.log("\n--- Type Operators ---");
console.log("typeof string:", typeof "hello"); // "string"
console.log("typeof number:", typeof 42);      // "number"
console.log("typeof boolean:", typeof true);   // "boolean"
console.log("instanceof (with arrays):", [] instanceof Array); // true

// 8. String Operators
console.log("\n--- String Operators ---");
let str1 = "Hello", str2 = "World";
console.log("Concatenation (+):", str1 + " " + str2); // "Hello World"
console.log("Concatenation assignment (+=):", str1 += " there"); // "Hello there"

// 9. Comma Operator
console.log("\n--- Comma Operator ---");
let c = (5, 10); // evaluates multiple expressions, returns last
console.log("Comma operator result:", c); // 10

// 10. Optional Chaining Operator (?.)
console.log("\n--- Optional Chaining Operator ---");
const user = {
    profile: {
        name: "John",
        address: {
            city: "New York"
        }
    }
};
console.log("Safe property access:", user?.profile?.address?.city); // "New York"
console.log("Safe non-existent property:", user?.profile?.phone?.number); // undefined

// 11. Nullish Coalescing Operator (??)
console.log("\n--- Nullish Coalescing Operator ---");
let nullValue = null;
let defaultValue = "Default";
console.log("Nullish coalescing:", nullValue ?? defaultValue); // "Default"
console.log("With 0:", 0 ?? defaultValue); // 0 (0 is not null/undefined)