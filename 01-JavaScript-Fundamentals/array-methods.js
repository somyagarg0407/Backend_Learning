//for each() instead of for lopp
const nums = [10,20,30];
nums.forEach(function(num){
    console.log(num);
});
//--------syntax paer bahut acghe se dhyan dena hai bhai------

const numss = [10,20,30];
numss.forEach((num)=>{
    console.log(num);
});
//-------------------------------------------

const numsss = [10,20,30];
numsss.forEach(num => console.log(num));
//------------these are 3 ways to use it---------------
// basically isme old array lekar new array return kar rha hai 
const numssss=[1,2,3];
const result=numssss.map(num=>num*2);// remember ki yahn par numlikha hai inside and outside main nums likha hai 
console.log(result);   

//---------------------------------------------

//const names = users.map(user=>user.name);
//console.log(names); isme esa kar skate hain like object banae ke baad hanme uske nirf name print karwana hai and age vagerah ya name as a text nahi karana print then use this 
//---------------- Filter ----------
const users=[
    {
        name:"Panda",
        age:19
    },
    {
        name:"Rahul",
        age:15
    }
];// this is the real application of filter in objects
const adults = users.filter(user=>user.age>=18);
console.log(adults);


//Task1
const number=[1,2,3];
number.forEach(numbers=>console.log(numbers));

//Task2
const final =number.map(numbers=>numbers*10);
console.log(final);  

//Task3
const temp=[2,5,8,10,3,1];
const finall=temp.filter(num=>num>5);
console.log(finall);