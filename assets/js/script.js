// TASK 1

let arr = [5, 12, 30, 2, 50,10]
function numExist(num) {
    for (let i = 0; i < arr.length; i++) {
        if (num == arr[i]) {
            return true
        }
        return false

    }
}
console.log(numExist(5))

// TASK 2

function oddNums() {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArr.push(arr[i])
        }
    }
    console.log(newArr)
}
oddNums();

// TASK 3

function calculator(num1, operator, num2) {
    switch (operator) {
        case "+":
            sum = num1 + num2
            break;
        case "-":
            sum = num1 - num2
            break;
        case "*":
            sum = num1 * num2
            break;
        case "/":
            sum = num1 / num2
            break;
        default:
            break;
    }
    return sum
}
console.log(calculator(20, "/", 5))