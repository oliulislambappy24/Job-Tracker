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



3. What is Event Bubbling? And how does it work?


Answer :
Event bubbling means when you click a child element, the event moves up to its parent elements.
Child → Parent → Document

4. What is Event Delegation in JavaScript? Why is it useful?


Answer :
Event Delegation means adding one event listener to a parent instead of many to children.
1.Saves memory
2.Better performance
3.Works for dynamic elements


5. What is the difference between preventDefault() and stopPropagation() methods?


Answer :
preventDefault() → Stops default browser action 
stopPropagation() → Stops event from bubbling to parent


