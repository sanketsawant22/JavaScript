// const promiseOne = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log("Asyn task 1");
//         resolve()
//     }, 1000);
// });

// promiseOne.then(function() {
//     console.log("asyc tast 1 resolved");
// })

// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("Asyn task 2");
//         resolve();
//     }, 1000)
// }).then(function() {
//     console.log("asyn task 2 resolved");
// })

// const promiseThree = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         resolve({username: "sanket", password: "sawant2210"})
//     }, 1000);
// })

// promiseThree.then(function(data) {
//     console.log(data);
// })

// const promiseFour = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         let error = true

//         if (!error) {
//             resolve({username: "sanket", password: "12345"})
//         }
//         else {
//             reject("ERROR OCCURED")
//         }
//     }, 1000);
// })

// promiseFour
//     .then(function(user) {
//         console.log(user);
//         return user.username;
//     })
//     .then(function(username) {
//         console.log(username);
//     })
//     .catch(function(error) {
//         console.log(error);
//     })
//     .finally(function() {
//         console.log("Finally block is executed");
        
//     })

    // const promiseFive = new Promise(function(resolve, reject) {
    //     setTimeout(() => {
    //         let error = false
    //         if (!error) {
    //             resolve({username: "ujwal", password: "54321"})
    //         }
    //         else {
    //             reject("ERROR OCCURED")
    //         }
    //     }, 1000);
    // })

    // async function cummitPromiseFive() {
    
    //     try {
    //         const data = await promiseFive
    //         console.log(data);
    //     } catch (error) {
    //         console.log(error);
    //     }

    // }

    // cummitPromiseFive()

    // async function getGitData () {
        
    //     try {
    //         const result = await fetch('https://api.github.com/users/hiteshchoudhary')

    //         const data = await result.json();
    //         console.log(data);

    //     } catch (error) {
    //         console.log("E : ", error);
    //     }
        
    // }

    // getGitData()




fetch("https://api.github.com/users/hiteshchoudhary")
.then((result) => {
    return result.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})