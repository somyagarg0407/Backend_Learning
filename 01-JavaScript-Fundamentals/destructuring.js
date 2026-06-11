// Destructuring is basically like insread of writing user.name bar bar toh ehel hi define kardo hamesha ke liey and baad main jo naam diya hai usse nuse karlo 

const user = {
    name: "Panda",
    age: 19,
    city: "Delhi"
};

const { name, age, city } = user;
console.log(name);
console.log(age);
console.log(city); // instead of writing user.city  :)

//----------------------------------------

const nums = [10,20,30];
const [first, second] = nums;
console.log(first);
console.log(second);

//--------------------------

const student = {
    namee: "Somya",
    agee: 19,
    course: "BTech"
};
const{namee,agee}=student;
console.log(namee);
console.log(agee);