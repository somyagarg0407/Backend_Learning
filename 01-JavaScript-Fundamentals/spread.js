const arr1 = [1,2];
const arr2 = [3,4];
// here we use it for merging two arrays
const result = [...arr1, ...arr2];
console.log(result);

//---------------------------------------------------

const user = {
    name: "Panda",
    age: 19
};
// syntax ka dhyan rakhna here pls
const updatedUser = {
    ...user,
    city: "Delhi"
};
console.log(updatedUser);
// here we use it for expand and and also can said that for copying previous elemenst aor info

//-------------------------------------------------------
const colors1 = ["red","blue"];
const colors2 = ["green","yellow"];
const final =[...colors1,...colors2];
console.log(final);
//-------------------------------------------------------
const userr = {
    name: "Panda",
    age: 19
};
const finaluser={
    ...userr,
    college: "NIT Delhi"
};
console.log(finaluser);