function CalculateSupply(Age,AmtPerDay)
{
    var MaxAge=100
    var total=(AmtPerDay*365)*(MaxAge-Age)
    console.log("You will need "+total+" dollar to last you until the ripe old age of "+Age+"")

}
CalculateSupply(25,10)
CalculateSupply(35,15)
CalculateSupply(45,20)