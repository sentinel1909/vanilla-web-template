// scripts.js

// the 'use strict' directive enforces stricter parsing and error handling on the code at runtime
'use strict';

// Add the current year to the page footer in a safe, modular way
(function updateFooterYear() {
    const currentYear = new Date().getFullYear();
    const year = document.getElementById('year');
    if (year) {
        year.textContent = currentYear;
    }
})();