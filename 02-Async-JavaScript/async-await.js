//Promise se value nikalne ke 2 ways:
//Way 1: .then()
async function greet() {
    return "Hello Panda";
}
console.log(greet()); 
// iska output dekho tab samjh aayega laadle
//A Promise that resolves to Hello Panda
greet().then((msg) => {
    console.log(msg);
});

//----------------------------------------

// example of await
async function test() {
    const value = await Promise.resolve(100);

    console.log(value);
}
test();

//---------------------------------------

/*Promise version:
getUser()
    .then((user) => {
        return getProfile(user);
    })
    .then((profile) => {
        return getPosts(profile);
    });

Async/Await version:
const user = await getUser();
const profile = await getProfile(user);
const posts = await getPosts(profile);

Same kaam.
Much cleaner 😎*/

//----------------------------

// await ka kam yehi hai ki jabtak await wale fuynction main promise resolve nahi hoga tabtak vo functuioin aage chalega hi nahi na isliye
// below vey important example to learn it more clearly

function getPizza() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("🍕 Pizza Delivered");
        }, 2000);
    });
}

async function orderFood() {
    console.log("Ordering Pizza...");

    const result = await getPizza();

    console.log(result);

    console.log("Enjoy your meal!");
}

orderFood(); // placeemt of tis is very important but in execution is the first step that will executed


