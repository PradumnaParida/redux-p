
1. Promises

Promises in JavaScript are used to handle asynchronous operations. A promise represents a value that might be available now, in the future, or never.
Example:

            const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Promise resolved!");
            }, 2000);
            });

            myPromise.then((message) => {
            console.log(message);
            }).catch((error) => {
            console.error(error);
            });

2. Error Handling

Error handling ensures that errors in JavaScript are managed properly without crashing the application.
Example:

        try {
            let result = 5 / 0;
            console.log(result);
        } catch (error) {
            console.error("Something went wrong:", error);
        } finally {
            console.log("This runs no matter what.");
        }

3. Var, Let, Const

JavaScript has three types of variable declarations:
- var: Function-scoped, can be reassigned.
- let: Block-scoped, can be reassigned.
- const: Block-scoped, cannot be reassigned.
Example:

var x = 10;   // Function scoped
let y = 20;   // Block scoped
const z = 30; // Block scoped and constant

4. Arrow Function vs Normal Function
Arrow functions provide a shorter syntax and lexical this binding.
Example:

// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

console.log(add(5, 3));      // Output: 8
console.log(addArrow(5, 3)); // Output: 8

5. String and Array Methods
Common methods include .split(), .join(), .map(), .filter(), etc.
Example:


// String method
let text = "Hello, JavaScript!";
console.log(text.toUpperCase()); // Output: HELLO, JAVASCRIPT!

// Array method
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

6. Call, Bind, Apply
These methods allow changing the this reference in functions.
Example:

const person = {
    name: "Alice",
  };
  
  function greet() {
    console.log(`Hello, ${this.name}!`);
  }
  
  greet.call(person); // Output: Hello, Alice!

7. Event Bubbling, Capturing, Delegation
Event bubbling and capturing describe how events propagate in the DOM.
Example:

document.getElementById("child").addEventListener("click", function() {
  console.log("Child Clicked");
}, true); // "true" means capturing phase

document.getElementById("parent").addEventListener("click", function() {
  console.log("Parent Clicked");
}, false); // "false" means bubbling phase

8. Hoisting
Hoisting allows JavaScript to move variable and function declarations to the top of their scope.
Example:

console.log(a); // Undefined due to hoisting
var a = 10;

9. Shallow vs Deep Copy
- Shallow Copy: Copies only the first level.
- Deep Copy: Copies entire object structure.
Example:

 // Shallow Copy
let obj1 = { name: "John", address: { city: "NY" } };
let obj2 = { ...obj1 };
obj2.name = "Doe";
console.log(obj1.name); // "John" (unchanged)
obj2.address.city = "LA";
console.log(obj1.address.city); // "LA" (changed)

// Deep Copy
let obj3 = JSON.parse(JSON.stringify(obj1));
obj3.address.city = "SF";
console.log(obj1.address.city); // "LA" (unchanged)


10. Scoping
Defines where variables are accessible.
Example:

function testScope() {
    let local = "I'm inside";
    console.log(local);
  }
  testScope();
  // console.log(local); // ERROR: local is not defined

11. Generators
Generators allow pausing execution using yield.
Example:

function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const iterator = generateNumbers();
  console.log(iterator.next().value); // 1
  console.log(iterator.next().value); // 2

12. Higher Order Function
A function that takes another function as an argument or returns a function.
Example:

function higherOrderFunction(callback) {
    return function() {
      console.log("Inside Higher Order Function");
      callback();
    };
  }
  
  function myCallback() {
    console.log("Callback executed!");
  }
  
  const newFunction = higherOrderFunction(myCallback);
  newFunction(); // Output: Inside Higher Order Function, Callback executed

13. === Vs ==
- == checks value but allows type conversion.
- === checks value and type.
Example:

console.log(5 == "5");  // true
console.log(5 === "5"); // false

14. Different ways to create an object
Example:

let obj1 = {}; 
let obj2 = new Object(); 
let obj3 = Object.create(null);
let obj4 = { name: "Alice", age: 25 };

15. Delete property from an object
Example:

let person = { name: "Alice", age: 25 };
delete person.age;
console.log(person); // Output: { name: "Alice" }


16. Closure
A function that retains access to its parent scope.
Example:
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2

17. Event Queue & Event Loop
JavaScript handles asynchronous events in an event queue and loop.
Example:
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");

// Output: Start -> End -> Timeout (due to event loop)

18. Call Stack
The call stack maintains function execution order.
Example:
function first() {
  console.log("First");
}

function second() {
  first();
  console.log("Second");
}

second();

// Call stack:
// Output:

// First
// Second


//Write a function to reverse a string.
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Example:
  console.log(reverseString("hello")); // "olleh"
  
  
  //Title Case a String
  function titleCase(str) {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  console.log(titleCase("hello world")); // "Hello World"
  
  
  //reverse integer
  function reverseInteger(num) {
    let reversed = parseInt(num.toString().split('').reverse().join(''));
    return Math.sign(num) * reversed;
  }
  console.log(reverseInteger(-123)); // -321
  
  //coint vowels
  function countVowels(str) {
    return str.match(/[aeiou]/gi)?.length || 0;
  }
  console.log(countVowels("hello")); // 2
  
  //array chunking
  function chunkArray(arr, size) {
    let chunked = [];
    
    for (let i = 0; i < arr.length; i += size) {
      chunked.push(arr.slice(i, i + size));
    }
    
    return chunked;
  }
  console.log(chunkArray([1, 2, 3, 4, 5], 2)); // [[1,2], [3,4], [5]]
  
  //Check if a string is a palindrome (same forwards and backwards).
  
  function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  
  // Example:
  console.log(isPalindrome("racecar")); // true
  
  
  //Find the Largest Number in an Array
  
  function isLargest(arr){
    return Math.max(...arr)
  }
  
  console.log(isLargest([10,6,7,9]))
  
  //Print numbers from 1 to 100. For multiples of 3, print "Fizz"; for 5, "Buzz"; for both, "FizzBuzz".
  
  for(let i = 1; i<=100;i++){
    let output = '';
    if (i % 3 === 0) output+= 'Fizz';
    if (i % 5 === 0) output+= 'Buzz';
  console.log(output || i);
  }
  
  //Return duplicate elements in an array.
  
  function findDuplicates(arr) {
    let seen = new Set();
    let duplicates = new Set();
    for (let num of arr) {
      if (seen.has(num)) duplicates.add(num);
      seen.add(num);
    }
    return [...duplicates];
  }
  
  // Example:
  console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1])); // [2, 1]
  
  //Check if two strings are anagrams.
  
  function isAnagram(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
  }
  
  // Example:
  console.log(isAnagram("listen", "silent")); // true
  
  
  //Flatten an array like [1, [2, [3, [4]]]] to [1, 2, 3, 4].
  
  function flattenArray(arr) {
    return arr.flat(Infinity);
  }
  
  // Example:
  console.log(flattenArray([1, [2, [3, [4]]]])); // [1, 2, 3, 4]
  
  
  //Implement a debounce function.
  
  function debounce(func, delay) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  }
  
  // Example:
  const log = debounce(() => console.log("Called!"), 1000);
  log(); log(); log(); // Only logs once after 1s
  
  
  //Write a function to return the sum of all elements in an array.
  
  function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  
  // Example:
  console.log(sumArray([1, 2, 3, 4])); // 10
  
  
  //Create your own map function like Array.prototype.map
  Array.prototype.myMap = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }
    return result;
  };
  
  // Example:
  console.log([1, 2, 3].myMap(x => x * 2)); // [2, 4, 6]
  
  
  //step pattern 
  #   
  ##  
  ### 
  ####
  
  function steps(n) {
    for (let i = 1; i <= n; i++) {
      console.log("#".repeat(i).padEnd(n, ' '));
    }
  }
  steps(4);
  
  
     #   
    ###  
   ##### 
  #######
  
  function pyramid(n) {
    for (let i = 1; i <= n; i++) {
      let spaces = ' '.repeat(n - i);
      let hashes = '#'.repeat(i * 2 - 1);
      console.log(spaces + hashes + spaces);
    }
  }
  pyramid(4);
  
  
  
  
  
  1. What is the Fetch API?
  Fetch API is a modern, promise-based method used to make HTTP requests. It replaces XMLHttpRequest and allows developers to retrieve or send data to a server.
  Example:
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  
  
  
  2. How does Fetch handle errors?
  Fetch only rejects the promise if there is a network error. It does not automatically reject for HTTP errors like 404 or 500.
  Example:
  fetch('https://jsonplaceholder.typicode.com/invalid-url')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => console.error('Fetch failed:', error));
  
  
  
    3. What are the differences between Fetch API and XMLHttpRequest?
    | Feature | Fetch API | XMLHttpRequest | 
    | Syntax | Promise-based | Callback-based | 
    | Error Handling | Rejects only for network errors | Can detect HTTP errors | 
    | Stream Processing | Allows handling partial responses | Doesn't support streaming | 
    
    
    
    4. How do you send a POST request using Fetch?
    Use the method option to specify the type of request and include the request body in JSON format.
    Example:
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'New Post', body: 'Hello World!' })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
    
    
    
    5. What are async/await and how do they improve Fetch handling?

    Async/await allows writing asynchronous code that looks more like synchronous code.
Example:
async function fetchData() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchData();



6. How can you cancel a Fetch request?

Use AbortController to cancel a request.
Example:
const controller = new AbortController();

fetch('https://jsonplaceholder.typicode.com/posts', { signal: controller.signal })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Fetch aborted:', error));

controller.abort(); // Cancels the request


7. How do you handle concurrent Fetch requests?
Use Promise.all to handle multiple API calls together.
Example:
Promise.all([
  fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()),
  fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json())
])
  .then(([posts, comments]) => {
    console.log('Posts:', posts);
    console.log('Comments:', comments);
  })
  .catch(error => console.error('Error:', error));


  8. How do you implement retry logic in Fetch?
  Retry failed requests using recursion or loops.
  Example:
  async function fetchWithRetry(url, retries = 3) {
    for (let i = 0; i < retries; i++) {
      try {
        let response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        return await response.json();
      } catch (error) {
        console.error(`Attempt ${i + 1} failed`);
        if (i === retries - 1) throw error;
      }
    }
  }
  fetchWithRetry('https://jsonplaceholder.typicode.com/posts')
    .then(data => console.log(data))
    .catch(error => console.error('Final Error:', error));
  
  
  
  

  
  
  
    What is the Virtual DOM?
    What are React lifecycle methods?
    Explain the useState and useEffect hooks.
    What is props drilling
    What is the Context API?
    What are HOCs? 
    Reconciliation in React.
    Explain React Portals.
    How does React Router handle navigation in a single-page app?
    Explain React strict mode.
    

  
  
  
            