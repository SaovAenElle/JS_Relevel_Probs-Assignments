//To print transpose of a given matrix
//MXN array
let arr1 = [[1,2,3,4], [5,6,7,8],[9,10,11,12]]
console.table(arr1)

//Declare an empty 2D array of size NXM to fill it with a transpose of the given matrix
let arrT = new Array(arr1[0].length) //Number of rows are defined
for(let i = 0; i<arrT.length; i++){
    arrT[i] = new Array(arr1.length) //Number of columns are defined
}

//Transposing
for(let i = 0; i<arr1.length; i++){
    for(let j = 0; j<arr1[i].length; j++){
        arrT[j][i] = arr1[i][j]
    }
}

//Printing the transposed array
console.table(arrT)