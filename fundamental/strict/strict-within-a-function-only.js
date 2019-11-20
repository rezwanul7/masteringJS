//"use strict" can be put at the beginning of the function body instead of the whole script. 

// Non-strict code...

(function(){
    "use strict";
    // i.e. we can not use undeclared variables in strict mode
    var strict  = "Strict Function World";
    console.log(strict);
  
    // Define your library strictly...
  
  })();
  
  // Non-strict code...