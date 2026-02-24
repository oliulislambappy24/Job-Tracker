1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer :
getElementById → Selects one element by ID
getElementsByClassName → Selects elements by class (returns live collection)
querySelector → Selects first matching element (uses CSS selectors)
querySelectorAll → Selects all matching elements (static list)


2. How do you create and insert a new element into the DOM?
Answer :
const div = document.createElement("div"); // create
div.textContent = "Hello";                 // add content
document.body.appendChild(div);            // insert
