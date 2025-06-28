//TODO 📗 Module 5. Logic and Control Flow - Lesson 09.01: Practical Logic Patterns


//TODO 📝 Step 1: Explore the Topic

//* 📌 What Are Practical Logic Patterns?
//  Practical logic patterns are common, reusable decision-making techniques in JavaScript that help streamline our code when evaluating conditions. These patterns go beyond basic if-else structures and make your logic cleaner, more expressive, and often more efficient.

//* 🔑 Key Logic Patterns
//? 1. Short-Circuiting
//  • Uses logical operators (&&, ||) to conditionally evaluate expressions.
//  • Example:

let input;
let isLoggedIn;

let username = input || 'Guest';                    //  Fallback if input is falsy.
isLoggedIn && showDashboard();                      //  Only runs if isLoggedIn is truthy

//? 2. Guard Clauses
//  • Early exits in functions to avoid deep nesting.
//  • Example:

function processOrder(order) {
    if (!order) return;
    //  rest of logic
}

//? 3. Default Parameters
//  • Assign default values during function declaration.
//  • Example:

function greet(name = 'Guest') {
    console.log('Hello, ' + name);
}

//? 4. Ternary Operators
//  • Compact if-else decision-making.
//  • Example:

let isAdmin;

let access = isAdmin ? 'Full' : 'Restricted';

//? 5. Switch Statements
//  • Useful when evaluating a single variable against many possible values.
//  • Example:

let role;

switch (role) {
    case 'admin': handleAdmin();    break;
    case 'user': handleUser();      break;
//!    default: handleGuest();
};



//* 🚦 Why Are They Important?
//  • Improved readability: Clear, concise conditional logic is easier to read and debug.
//  • Cleaner structure: Avoids excessive if-else nesting.
//  • Reusability: Patterns can be applied across different problems and codebases.
//  • Better error handling: Guard clauses and default patterns help handle edge cases early.


//* ⚠️ Limitations and Pitfalls
//  • Overuse of ternary operators can lead to unreadable code.
//  • Short-circuiting logic might accidentally suppress necessary operations.
//  • Improper defaults may silently hide bugs if assumptions are incorrect.


//TODO 📝 Step 2: Real-World Examples

//* 🛍️ 1. Short-Circuiting in E-Commerce Checkout
//  We are building a cart system:

let cartTotal = 0;
let discount = username.isPremium && 0.1;           //  Only apply discount if user is premium

//  Explanation:
//! If user.isPremium is false, discount will be false — no unnecessary calculation. If true, discount becomes 0.1.

//* 📱 2. Guard Clause in a Mobile App
//  Function to send push notifications:

function sendNotification(user) {
    if (!user || !user.hasEnableNotifications) return;
    //  send notifications
}

//  Explanation:
//! This avoids nesting and exits early if the user does not qualify, which keeps code cleaner and avoids unnecessary API calls.

//* 🌐 3. Default Parameters in a Web API
//  A search endpoint accepts a limit:

function fetchResults(query, limit = 10) {
    //  Returns up to `limit` search results
}

//  Explanation:
//! If the caller does not specify a limit, it defaults to 10. This avoids undefined behavior.

//* 👮 4. Ternary Operator in User Access
//  Rendering a message based on permissions:

let message = isAdmin ? "Welcome, Admin!" : "Access Denied.";

//  Explanation:
//! A clean, one-line decision that replaces a full if-else block.

//* 🎮 5. Switch Statement in a Game
//  Handling different game states:

let gameState;

switch (gameState) {
    case 'start': showIntro();  break;
    case 'playing': updateGame();  break;
    case 'paused': showPauseMenu();  break;
//!    default: showGameOver();
}

//  Explanation:
//! This clearly separates the logic for each game state without tangled if-else logic.


//TODO 📝 Step 3: Quiz Questions

//? 🧠 Multiple Choice Questions

//* 1. What is the main benefit of using a guard clause in a function?
//  A. It adds more conditions.
//  B. It simplifies nested logic by returning early.
//  C. It delays execution until all checks are passed.
//  D. It makes the function longer for clarity.

//! Answer: B

//* 2. What will the following code return?

let role2 = '';
let access2 = role2 || 'Guest';
console.log(access2);

//  A. 'Guest'
//  B. ''
//  C. undefined
//  D. role

//! Answer: A

//* 3. What is the output of this code?

let isAdmin2 = true;
let message2 = isAdmin2 ? 'Welcome' : 'Access Denied';
console.log(message2);

//  A. 'Access Denied'
//  B. 'Welcome'
//  C. true
//  D. undefined

//! Answer: B

//* 4. Which pattern does this code use?

function updateUser(user) {
    if (!user) return;
    // continue processing
}

//  A. Short-circuiting
//  B. Default parameter
//  C. Guard clause
//  D. Ternary operator

//! Answer: C

//* 5. Which of the following statements about short-circuiting is true?
//  A. && returns the first falsy value or the last value.
//  B. || always evaluates both operands.
//  C. && only works with numbers.
//  D. || throws an error on falsy values.

//! Answer: A

//* 6. What does the following code print?

let input2 = undefined;
function greet(name = 'Guest') {
    console.log('Hello, ' + name);
}

greet(input2);

//  A. 'Hello, undefined'
//  B. 'Hello, Guest'
//  C. undefined
//  D. 'Hello, '

//! Answer: B

//* 7. When is a switch statement preferable over multiple if-else conditions?
//  A. When evaluating unrelated conditions
//  B. When checking multiple values of a single variable
//  C. When returning boolean results
//  D. When handling complex loops

//! Answer: B

//* 8. Which expression uses a ternary operator correctly?
//  A. isPremium = true ? discount : noDiscount;
//  B. isPremium ? discount : noDiscount;
//  C. isPremium : discount ? noDiscount;
//  D. if isPremium ? discount : noDiscount;

//! Answer: A

//* 9. What will this print?

let loggedIn = false;
loggedIn && console.log('Welcome back!');

//  A. 'Welcome back!'
//  B. false
//  C. undefined
//  D. (prints nothing)

//! Answer: D

//* 10. Why should you use default parameters in functions?
//  A. To enforce type checking
//  B. To avoid passing any arguments
//  C. To ensure functions behave predictably without arguments
//  D. To optimize performance only

//! Answer: C


































