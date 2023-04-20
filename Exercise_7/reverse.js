function reverseNum(number)
{
    number = number + "" //Convert the number to string
    return number.split('').reverse().join('')
}
console.log("The reverse of the number is " + reverseNum(345678))
console.log("The reverse of the number is " + reverseNum(1234567890))
console.log("The reverse of the number is " + reverseNum(0987654321))
