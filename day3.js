//ternary operator
let a=71
let b=23
console.log(a>b?"Correct":"Incorrect")

// take 2 no.s and print their addition, ->2,5
var x=2
var y=5
console.log(a+b)

// given a 4 digit number N, print its 1st digit ->4567
var x=4567
let res=x/1000
console.log(Math.floor(res))

//If Else || If Else || Else

var x=5
if(x>10)                             //check if x is greater than 5 or not
{
    console.log("x is greater than 10")

}
else if(x==10)                    //check if x is equal to 10 or not
{
    console.log("x is equal to 10")
}
else                              //if all the condn mentioned above fails this condn will be used
{
    console.log("x is less than 10")
}

/*
a school has grading system
1 below 10 or 10 then E
2 11-20 then D
3 21-30 then C
4 31-40 then B
5 41-50 then A
ask user to enter marks and print the grades of student using switch case
input-> 30
output-> C
*/
let m=30
var grade='A'
switch (true) 
{
    case (m <= 10):
        grade = 'E';
        break;
    case (m <= 20):
        grade = 'D';
        break;
    case (m <= 30):
        grade = 'C';
        break;
    case (m <= 40):
        grade = 'B';
        break;
    case (m >=41 && m <= 50):
        grade = 'A';
        break;
    default:
        grade = 'Invalid marks';
}
console.log(grade);

