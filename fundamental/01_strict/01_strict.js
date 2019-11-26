//Loose world... 
loose = "Loose World";
console.log(loose);
// Non-strict code...
"use strict";
//strict operating context global mode | this code works the modern way

strict  = "Strict Global World";
console.log(strict);

/******
 * Strict mode helps out in a couple ways:
 *  It catches some common coding bloopers, throwing exceptions.
 *  It prevents, or throws errors, when relatively "unsafe" actions are taken (such as gaining access to the global object).
 *  It disables features that are confusing or poorly thought out.
 ******/

//So Always declaring “use strict” is a better approach 