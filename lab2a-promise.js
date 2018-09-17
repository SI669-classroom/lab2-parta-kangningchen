///// Problem 1 - Fun with Promises

function flip() {
    let p = new Promise(function (resolve, reject) {
        if (Math.random() > 0.5) resolve();
        else reject();
    });
    return p;
}

//// Add code here that will "flip" the coin ten times and write the 
//// result to the console (e.g. "Heads" or "Tails" for each flip).

function heads() {
    console.log("Heads");
}

function tails() {
    console.log("Tails");
}

for (let i = 0; i < 10; i++) {
    let p = flip();
    p.then(heads, tails);
}

///// Problem 2 - More fun...

function countBig(bignum) {
    // Add code here that returns a Promise that will resolve after it has counted to bignum
    let p = new Promise (function (resolve, reject) {
        for (i = 0; i <bignum;) {
            i++;
            console.log("I am counting " + i)
        }
        if (i === bignum) resolve();
        else reject();
    });
    return p;
     
}   

start = Date.now();
bignum = 10;
countBig(10).then(()=> {
    console.log("It took " + (Date.now() - start) + " ms to count to " + bignum);
}, () => {
    console.log("A problem occurred while trying to count to " + bignum);
})