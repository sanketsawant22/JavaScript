

// Arrays -->

    // CONTINEOUS --> When arrays doest haev any empty spaces

    // HOLEY --> When array has empty spaces

const arrOne = [1,2,3,4,5]     // CONTINEOUS

const arrTwo = [1,2,3, ,4,5]   // HOLEY

// SMI     (small integers)
// DOUBLE  (double, string, function)
// PACKED  (all mixed)

const arrThree = [1,2,3]
// PACKED_SMI_ELEMENTS

arrThree.push(4.0)
// PACKED_DOUBLE_ELEMENT

arrThree.push('5')
// PACKED_ELEMENTS

arrThree.push('')
// HOLEY_ELEMETS

const arrFour = new Array(3)    // this creates HOLEY_ELEMETS array
arrFour.push(1)
arrFour.push(2)
arrFour.push(3)

const arrFive = []        // this creates PACKED array
arrFive.push(1)
arrFive.push(2)
arrFive.push(3)