// 1. Write a function calculateFactorial (n) that takes a non-negative integer n and returns the factorial of n.(factorial of 5= 5*4*3*2*1=120)
console.log('1. Question')
{
    let n = 5
    function calculateFactorial(n){
        let f = 1
        for (let i=1; i<=n; ++i){
            f = f * i
        }
        return f
    }
    let fact = calculateFactorial(n)
    console.log('Factorial of', n, 'is', fact)
}
console.log('')
// 2. Create an anonymous function that takes an array of numbers as an argument and returns the array with each number doubled. Assign this function to a variable called doubleArray.
console.log('2. Question')
{
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let doubleArray = (elm) => {
        return elm * 2
    }
    console.log(array)
    for (i=0; i<array.length; ++i){
        elm = array[i]
        let ans = doubleArray(elm)
        console.log('Double of', elm, 'is', ans)
    }
}
console.log('')

// 3. Define a function expression factorial that takes one number as a parameter and returns its factorial.
console.log('3. Question')
{
    let n = 5
    let factorial = function fact(n){
        let f = 1
        for (let i = 1; i <= n; i++) {
            f = f * i        
        }
        return f
    }
    console.log('Factorial of', n, 'is', factorial(n))
    console.log('Factorial of', 6, 'is', factorial(6))
}
console.log('')
// 4. Write a function processArray that takes an array and a callback function as parameters. The function should apply the callback function to each element of the array and return a new array with the results. Use an anonymous function as the callback to double each number in the array.
console.log('4. Question')
{
    function processArray(array, callback) {
        for(let i=0; i<array.length; ++i){
            let em = array[i]
            let dem = callback(em)
            newArray[i] = dem
        }
    }
    let double = (a) => {
        return a * 2
    }
    let array = [1, 2, 3, 4, 5, 6, 7]
    console.log(array)
    let newArray = []
    processArray(array, double)
    console.log(newArray)
}