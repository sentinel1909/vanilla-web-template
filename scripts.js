// scripts.js

// this code binds the current year to the variable `currentYear`, by calling the getFullYeear method on a new Date() constructor, then
// binding the HTML element with the id selector "year", located in the footer section to a variable called year. Finally, it uses the 
// texContent method to insert the current year into the HTML tag identified by the "year" id tag.

// the 'use strict' directive enforces stricter parsing and error handling on the code at runtime
'use strict';

let currentYear = new Date().getFullYear();
let year = document.getElementById('year');
year.textContent = currentYear;