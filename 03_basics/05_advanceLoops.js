const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const num = numbers.filter( (item) => (item >= 6) )

console.log(num);

const newNumbers = numbers.map( (item) => item + 10 )

console.log(newNumbers)

//  chainning                       2 or more porotypes are used

const chain = numbers
                    .map( (num) => num * 10 )
                    .map( (num) => num + 1 )
                    .filter( (num) => num > 40 )

console.log(chain);

// reduce

const total = numbers.reduce( (acc, cur) => acc + cur, 0 )

console.log(total);