const user = {
    name: "Panda",
    age: 19
};

const jsonData = JSON.stringify(user); // json in capital so syntax :)

console.log(jsonData); // double quotes on name and age keyword as well
console.log(typeof jsonData); //string
console.log(typeof user); //object
//------------------------------------------------------
// now convert back again to js
const jsonDataa = '{"name":"Panda","age":19}'; // here single quotes outside this is very important
const userr = JSON.parse(jsonDataa);
console.log(userr);
//---------------------------------------------------------
//Task 1
const student = {
    name: "Panda",
    age: 19,
    course: "BTech"
};
const student_json=JSON.stringify(student);
console.log(typeof student_json);
console.log(student_json.name);// undefined as this i snot object now this becomes string now
const studentObj =JSON.parse(student_json);
console.log(studentObj.name);
console.log(studentObj.course);
//----------------------------------------

