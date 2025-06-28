# 📗 Module 5. Logic and Control Flow - Lesson 09.01: Practical Logic Patterns

## 📝 Step 1: Explore the Topic

Practical logic patterns improve code readability and maintainability by simplifying conditional structures.

### Common Patterns:

1. **Short-Circuiting**  
   Use `&&` and `||` to conditionally execute or assign.
   ```javascript
   let name = userInput || 'Guest';
   isLoggedIn && showDashboard();
   ```

2. **Guard Clauses**  
   Return early from a function to avoid deep nesting.
   ```javascript
   function save(data) {
     if (!data) return;
     // continue...
   }
   ```

3. **Default Parameters**  
   Provide fallbacks directly in function declarations.
   ```javascript
   function greet(name = 'Guest') {
     console.log('Hello, ' + name);
   }
   ```

4. **Ternary Operator**  
   A compact alternative to if-else.
   ```javascript
   let access = isAdmin ? 'Full' : 'Restricted';
   ```

5. **Switch Statement**  
   Cleaner alternative to multiple `if-else` chains.
   ```javascript
   switch (status) {
     case 'new': handleNew(); break;
     case 'done': handleDone(); break;
     default: handleUnknown();
   }
   ```

---
## 📝 Step 2: Real-World Examples

### 1. Short-Circuiting in a Checkout:
```javascript
let discount = user.isPremium && 0.1;
```

### 2. Guard Clause in a Notification Function:
```javascript
function sendNotification(user) {
  if (!user || !user.hasEnabledNotifications) return;
}
```

### 3. Default Parameters in an API:
```javascript
function fetchResults(query, limit = 10) {
  // return limited results
}
```

### 4. Ternary Operator for Access Control:
```javascript
let message = isAdmin ? 'Welcome, Admin!' : 'Access Denied.';
```

### 5. Game Logic Using Switch:
```javascript
switch (gameState) {
  case 'start': showIntro(); break;
  case 'paused': showPauseMenu(); break;
  default: showGameOver();
}
```
---

## 📝 Step 3: Quiz Questions

### **🧠 Multiple Choice Questions:**

```javascript
1. What is the main benefit of using a **guard clause** in a function?

   * A. It adds more conditions.
   * B. It simplifies nested logic by returning early.
   * C. It delays execution until all checks are passed.
   * D. It makes the function longer for clarity.
```

```javascript
2. What will the following code return?

let role = '';
let access = role || 'Guest';
console.log(access);

* A. `'Guest'`
* B. `''`
* C. `undefined`
* D. `role`
```

```javascript
3. What is the output of this code?

let isAdmin = true;
let message = isAdmin ? 'Welcome' : 'Access Denied';
console.log(message);

* A. `'Access Denied'`
* B. `'Welcome'`
* C. `true`
* D. `undefined`
```

```javascript
4. Which pattern does this code use?

function updateUser(user) {
  if (!user) return;
  // continue processing
}

* A. Short-circuiting
* B. Default parameter
* C. Guard clause
* D. Ternary operator
```

```javascript
5. Which of the following statements about **short-circuiting** is true?

   * A. `&&` returns the first falsy value or the last value.
   * B. `||` always evaluates both operands.
   * C. `&&` only works with numbers.
   * D. `||` throws an error on falsy values.
```

```javascript
6. What does the following code print?

let input = undefined;
function greet(name = 'Guest') {
  console.log('Hello, ' + name);
}
greet(input);

* A. `'Hello, undefined'`
* B. `'Hello, Guest'`
* C. `undefined`
* D. `'Hello, '`
```

```javascript
7. When is a **switch statement** preferable over multiple `if-else` conditions?

   * A. When evaluating unrelated conditions
   * B. When checking multiple values of a single variable
   * C. When returning boolean results
   * D. When handling complex loops
```

```javascript
8. Which expression uses a **ternary operator** correctly?

   * A. `isPremium = true ? discount : noDiscount;`
   * B. `isPremium ? discount : noDiscount;`
   * C. `isPremium : discount ? noDiscount;`
   * D. `if isPremium ? discount : noDiscount;`
```

```javascript
9. What will this print?

let loggedIn = false;
loggedIn && console.log('Welcome back!');

* A. `'Welcome back!'`
* B. `false`
* C. `undefined`
* D. *(prints nothing)*
```

```javascript
10. Why should you use default parameters in functions?

* A. To enforce type checking
* B. To avoid passing any arguments
* C. To ensure functions behave predictably without arguments
* D. To optimize performance only
```
---

### ☑️ Quiz Evaluation

```javascript
1. B – Correct
✔️ Guard clauses return early, reducing nesting and improving readability.

2. A – Correct
✔️ '' is falsy, so role || 'Guest' returns 'Guest'.

3. B – Correct
✔️ isAdmin is true, so the ternary returns 'Welcome'.

4. C – Correct
✔️ The early return based on !user is a classic guard clause.

5. A – Correct
✔️ && returns the first falsy value or the last if all are truthy.

6. B – Correct
✔️ undefined triggers the default parameter 'Guest'.

7. B – Correct
✔️ switch is best when comparing one variable against multiple values.

8. B – Correct
✔️ This is the correct syntax: condition ? valueIfTrue : valueIfFalse;

9. D – Correct
✔️ false && anything short-circuits, so nothing is printed.

10. C – Correct
✔️ Default parameters ensure functions behave well without full arguments.
```
### 🏁 Score: 10 / 10 – Outstanding!

🎉 You’ve clearly internalized these logic patterns and their real-world utility.