// 1. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
//Because the function is a private function it can't access the myvar defined in the global scope.
//and because myvar is defined after the console.assert within the function, it is not yet defined when we run the console assert.
var myvar = 'my value';

(function() {
    console.assert(myvar === undefined)
    var myvar = 'local value';
})()


// 2. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
//Flag defaults to true, unless it is passed to test(). Because we did not have test(flag), flag remained true.
var flag = true

function test() {
    if(flag) {
        var flag = false
    }
    else {
        flag = true
    }
    console.assert(flag === true)
}
test()

// // 3. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
//Similar to number 1, message is originally defined outside the function. Inside the function, message is not defined until after the assert.
var message = 'Hello world'

function saySomething() {
    console.log(message)
    console.assert(message === undefined)
    var message = 'Foo bar'
}
saySomething()

// // 4. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
//The only thing different between this and 3 is that message within the function is not set as its own variable.
//So since there's just a freefloating thing called "message" in the function, it CAN access the variable that is in the global scope.
var message = 'Hello world'

function saySomething() {
    console.assert(message === "Hello world")
    message = 'Foo bar'
}
saySomething()

// // 5. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
//at the point of the console asserts, the variable a has not yet been defined, so the assert can't "see" it. However, the function foo returns the answer 2, so when we call it within the assert we get a thing.
function test() {

    console.assert(a === undefined)
    console.assert(foo() === 2)

    var a = 1
    function foo() {
        return 2
    }
}
// test()

// // 6. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
//so, the function foo returns a string, but since the function runs before the variable bar is defined, it returns that part as the string "undefined".
(function() {
    console.assert(bar === undefined)
    console.assert(foo() === 'undefined - :)' )

    function foo() {
        return bar+' - :)'
    }

    var bar = 1
})()
