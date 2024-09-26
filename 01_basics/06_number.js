let number = 100
console.log(number);

let score = new Number(2000)
console.log(score);
console.log(score.toFixed(2));
console.log(score.toString());
console.log(score.toPrecision(8));

let distance = 1000000
console.log(distance.toLocaleString('en-IN'));

// ---------------------------------------- MATH ----------------------------------------

console.log(Math.abs(-5));

// .abs(-5) -> 5
// .roun(4.6) -> 5
// .ceil(4.4) -> 5
// .floor(4.9) -> 4
// .sqrt(25) -> 5
// .min(4,2,1,5,3) -> 1
// .max(2,4,3,1,6) -> 6

// .random() -> gives any random value in between 0-1

    console.log(Math.floor(Math.random() * 10));

    let min = 10
    let max = 20

    console.log(min + (Math.floor(Math.random() * (max - min + 1))));
    // it will select random number in between 10 - 20

