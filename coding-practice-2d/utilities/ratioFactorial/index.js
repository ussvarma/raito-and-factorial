const factorial=require("../factorial/index")
const ratio=require("../ratio/index")
const ratioAndFactorial=(num1,num2,num3)=>{
    return{
        ratio:ratio(num1,num2)
        factorial:factorial(num3)
    }
}
module.exports=ratioAndFactorial