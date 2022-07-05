//Finding second highest number in an array
let arr1 = [2,5,9,1,2,3,5], arr2 = []
while (arr1.length !== 0) {
    let x = arr1.indexOf(Math.min(...arr1))  //To pass arrays inside Math.max and Math.min functions, we use the syntax as shown
    arr2.push(arr1[x])
    arr1.splice(x,1)
}

console.log(arr2)

const secondHighest = arr2.filter( num => {
    return num<arr2[arr2.length-1]
})

console.log(secondHighest[secondHighest.length-1])

//Alternate method
let removeDuplicate = new Set(arr2) //Creating a new set. Sets remove duplicates from an array.
console.log(removeDuplicate)
removeDuplicate = [...removeDuplicate] //Destructuring the set into an array
if(removeDuplicate.length === 1) console.log("All are same values")
else console.log(`Second highest value is ${removeDuplicate.at(-2)}`)