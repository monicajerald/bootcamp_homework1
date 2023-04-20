function countVowel(string)
{
    return(string.replace(/[^AEIOUaeiou]/gi,"")).length
}
console.log(countVowel("Hello Everyone"))
console.log(countVowel("God is Great"))
console.log(countVowel("Have a great day"))