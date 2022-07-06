//To print transpose of a given matrix
let arr1 = [[1,2,3], [4,5,6],[7,8,9]]
console.table(arr1)

//Declare an empty 2D array to fill it with a transpose of the given matrix
let arrT = new Array(arr1.length)
for(let i = 0; i<arrT.length; i++){
    arrT[i] = new Array(arr1[i].length)
}

//Transposing
for(let i = 0; i<arr1.length; i++){
    for(let j = 0; j<arr1[i].length; j++){
        arrT[j][i] = arr1[i][j]
    }
}

//Printing the transposed array
console.table(arrT)