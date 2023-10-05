// q1~q14

// 1. 
/* Write a function named middle that finds the middle value of three numbers. The function takes three numbers as parameters
 and returns the middle value. The middle value means the value that is greater than the smallest value and less than the 
 largest value.
 */

 function getMid(num1, num2, num3){ 

    if((num1 >= num2 && num1 <=num3) || (num1 <= num2 && num1 >= num3) ) {
        return num1;
    } else if ((num2 >= num1 && num2 <= num3)||(num2 <= num1 && num2 >= num3)) {
        return num2;
    } else {
        return num3;
    }
   
 }
 // console.log(getMid(5, 10, 7));

 // 2.
/*
 Write a function named factors that finds the factors of a number. The function takes a
 number as a parameter and returns a string. The string contains the factors separated by commas
 and spaces. The factors include 1 and the number. The number is a positive integer.
 */

function factors(n){
    var stringOfFactors = "1"  // 1 is the first factor.
    for (var i = 2; i <= n / 2; i++) // check each number 2 to (n / 2)
    {
        if (n % i == 0) // if it's a factor of n, add it to string
        {
            stringOfFactors += ", " + i
        }
    }
    stringOfFactors += ", " + n    // add number itself to string
     
    return stringOfFactors
}
//console.log(factors(10));

// 3.
/* Write a function named tax that computes the tax according to the following tax rules. The tax depends
 on the income and the marital status. If single and income is less than 30000 then tax rate is 20%. If 
 single and income is greater or equal to 30000 then tax rate is 25%. If married and income is less than 
 50000 then tax rate is 10%. If married and income is greater or equal to 50000 then tax rate is 15%. The 
 function takes the income and the marital status as parameters and returns the tax amount. The income is 
 a positive number. The status is a string single or married in lower or upper case.*/

function tax(income,status){
    if(status.toLowerCase() == "single"){
        if(income < 30000) {
            taxNum = 0.2 * income;
        } else {
            taxNum = 0.25 * income;
        }
    } 

    if(status.toLowerCase() == "married") {
        if(income < 50000) {
            taxNum = 0.1 * income;
        } else {
            taxNum = 0.15 * income;
        }  
    }
    return taxNum;
}

// console.log(tax(355000,"single"))

/* 5
Write a function named compoundInterest that computes the compound interest. If p amount is invested for 
n years with interest rate r and the money is compounded annually then the final amount will be 
p(1 + r/100)n . The function takes initial amount p, interest rate r which is between 0 and 100, and the 
number of years n as parameters and returns the final amount. The parameter values are all positive.
*/

function compoundInterest(p, r, n){
    var amount = (1 + r/100);
    amount =p *  Math.pow(amount, n);
    return amount;
}

// console.log(compoundInterest(5000, 7,20));

/* 7.
Write a function named createIdPassword that takes a last name and a first name as parameters and returns 
an object containing an id and a password. The id is the first letter of the first name followed by the 
last name. The password is the first letter of the first name followed by the last letter of the first 
name followed by the first three letters of the last name followed by the length of the first name 
followed by the length of the last name. Both id and password are all upper case. For example if the 
first name is John and the last name is Maxwell then the id is JMAXWELL and the password is JNMAX47. The 
returned object has two properties namely id and password, and their values are set to the id and 
password that are created.
 */

function createIdPassword(lname, fname) {
    var firstLOfFName = fname.slice(0,1);
    var id = firstLOfFName + lname;
    var lenFname = fname.length;
    var lastLOfFName = fname.slice(lenFname-1, lenFname);
    var fist3LOfLname = lname.slice(0,3);
    var lenLname = lname.length;
    var passWord = firstLOfFName + lastLOfFName + fist3LOfLname + lenFname + lenLname;
    id = id.toUpperCase();
    passWord = passWord.toUpperCase();

    return {id, passWord};

}

// console.log(createIdPassword("Jia", "Luna"));
