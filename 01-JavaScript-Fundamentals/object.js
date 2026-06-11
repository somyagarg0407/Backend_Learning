const users = [   // remember this for multiple userif only single user thhen not add this [ ] 
    {
        name: "Panda",  // its comma not semicolon and aslo before it that is colon 
        age: 19
    },   // is wale comma ka bhi dhyan rakhna in multiple users
    {
        name: "Rahul",
        age: 21
    }
];

console.log(users);

//-------------------------------------------------------------------------

const student={
    name: "Somya",
    age: 18,
    course: "B.Tech"
}
console.log(student);

//-------------------------------------------------------------------------

student.college="NIT DELHI";
console.log(student);

//-------------------------------------------------------------------------

const user = [  
    {
        name: "Panda", 
        age: 19
    },   
    {
        name: "Rahul",
        age: 21
    },
    {
        name: "Somya",
        age: 18
    }

];

for(let i=0;i<user.length;i++){
    console.log(`${user[i].name} is ${user[i].age} years old`);
}

//-------------------------------------------------