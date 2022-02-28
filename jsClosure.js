// Discussion about Javascript Closures:
/*
    CLOSURE: A closure is the combination of a function bundled together (enclosed) 
    with references to its surrounding state (the lexical environment). 
    In other words, a closure gives you access to an outer function's scope 
    from an inner function. In JavaScript, closures are created every time 
    a function is created, at function creation time.

    LEXICAL SCOPING: Lexical scoping (sometimes known as static scoping ) 
    is a convention used with many programming languages that sets the scope 
    (range of functionality) of a variable so that it may only be called (referenced) 
    from within the block of code in which it is defined. 
    The scope is determined when the code is compiled. 
    A variable declared in this fashion is sometimes called a private variable.

    DYNAMIC SCOPING: The opposite approach is known as dynamic scoping . 
    Dynamic scoping creates variables that can be called from outside the block of code in which they are defined. 
    A variable declared in this fashion is sometimes called a public variable.

    // My understanding:
    1.  If a function somehow refer to a variable declared in parent scope of the function, then a closure is formed.

    2.  To use a closure, define a function inside another function and expose it. 
        To expose a function, return it or pass it to another function.
    
    3.  A closure is the combination of a function and the lexical environment within which that function was declared.

    4.  
*/


/* var fns = []
for(var i = 0;i < 5;i++){
    var c = i*2
    fns.push(()=>{console.log(c)})
}
fns.forEach((f)=>f()) */

/* var fns = []
for (var i = 0; i < 5; i++){
    let c = i * 2
    fns.push( _ => console.log(c))
}
fns.forEach(f => f()) */

let x = function(){
    for (var i = 1; i <= 5; i++){
        ((y) => setTimeout(function(){
            console.log(y)
            }, y * 1000)
        )(i)
    }
}
x();