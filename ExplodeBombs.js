/*
Given a matrix. There are bombs placed at some cells denoted by value -1. So, wherever a bomb is placed, the cells around it explodes which means their value gets 
incremented by 1 except if that is a bomb too. Initial value of all empty cells is assumed to be 0. So, print the final state of the matrix after all bombs explode.
Algorithm:
1. Iterate on the bombs array.
2. Set the cells with bomb to -1 in the output matrix initialised to 0.
3. Then, visit all the cells around the bomb and increment them by 1 if it does not
contain a bomb already.
4. Print this output matrix.
*/

//Declaring an empty 4X4 array
let arr = new Array(4)
for(let i = 0; i<arr.length; i++){
    arr[i] = new Array(4)
}

//Fill the array randomly with either 0 or -1 with -1 denoting bombs
for(let i = 0; i<arr.length; i++){
    for(let j = 0; j<arr[i].length; j++){
        let a = Math.ceil(Math.random()*-2)
        if(a === -0) a = Math.abs(a)
        arr[i][j] = a
    }
}
console.table(arr)

/*
Looping to trigger bombs. When a bomb is triggered, all the surrounding elements (8) are affected unless it is a bomb or a corner element. In case of a corner element,
the remaining neighbours which are not a bomb are affected.
*/
for(let i = 0; i<arr.length; i++){
    for(let j = 0; j<arr[i].length; j++){
        if(arr[i][j] === -1){
            if(i===0 && j===0){
                if(arr[i][j+1] !== -1) arr[i][j+1]+=1
                if(arr[i+1][j] !== -1) arr[i+1][j]+=1
                if(arr[i+1][j+1] !== -1) arr[i+1][j+1]+=1
            }else if(i === 0 && j === arr[i].length-1){
                if(arr[i][j-1] !== -1) arr[i][j+1]+=1
                if(arr[i+1][j] !== -1) arr[i+1][j]+=1
                if(arr[i+1][j-1] !== -1) arr[i-1][j-1]+=1
            }else if(i === arr.length-1 && j === 0){
                if(arr[i-1][j] !== -1) arr[i-1][j]+=1
                if(arr[i][j+1] !== -1) arr[i][j+1]+=1
                if(arr[i-1][j+1] !== -1) arr[i-1][j+1]+=1
            }else if(i === arr.length-1 && j === arr[i].length-1){
                if(arr[i-1][j] !== -1) arr[i-1][j]+=1
                if(arr[i-1][j-1] !== -1) arr[i-1][j-1]+=1
                if(arr[i][j-1] !== -1) arr[i][j-1]+=1
            }else if(i === 0){
                if(arr[i][j+1] !== -1) arr[i][j+1]+=1
                if(arr[i][j-1] !== -1) arr[i][j-1]+=1
                if(arr[i+1][j-1] !== -1) arr[i+1][j-1]+=1
                if(arr[i+1][j] !== -1) arr[i+1][j]+=1
                if(arr[i+1][j+1] !== -1) arr[i+1][j+1]+=1
            }else if(i === arr.length-1){
                if(arr[i][j-1] !== -1) arr[i][j-1]+=1
                if(arr[i][j+1] !== -1) arr[i][j+1]+=1
                if(arr[i-1][j-1] !== -1) arr[i-1][j-1]+=1
                if(arr[i-1][j] !== -1) arr[i-1][j]+=1
                if(arr[i-1][j+1] !== -1) arr[i-1][j+1]+=1
            }else if(j === 0){
                if(arr[i-1][j] !== -1) arr[i-1][j]+=1
                if(arr[i+1][j] !== -1) arr[i+1][j]+=1
                if(arr[i-1][j+1] !== -1) arr[i-1][j+1]+=1
                if(arr[i][j+1] !== -1) arr[i][j+1]+=1
                if(arr[i+1][j+1] !== -1) arr[i+1][j+1]+=1
            }else if(j === arr[i].length-1){
                if(arr[i-1][j] !== -1) arr[i-1][j]+=1
                if(arr[i+1][j] !== -1) arr[i+1][j]+=1
                if(arr[i-1][j-1] !== -1) arr[i-1][j-1]+=1
                if(arr[i][j-1] !== -1) arr[i][j-1]+=1
                if(arr[i+1][j-1] !== -1) arr[i+1][j-1]+=1
            }else{
                if(arr[i][j+1] !== -1) arr[i][j+1]+=1
                if(arr[i][j-1] !== -1) arr[i][j-1]+=1
                if(arr[i-1][j] !== -1) arr[i-1][j]+=1
                if(arr[i-1][j-1] !== -1) arr[i-1][j-1]+=1
                if(arr[i-1][j+1] !== -1) arr[i-1][j+1]+=1
                if(arr[i+1][j] !== -1) arr[i+1][j]+=1
                if(arr[i+1][j-1] !== -1) arr[i+1][j-1]+=1
                if(arr[i+1][j+1] !== -1) arr[i+1][j+1]+=1
            }
        }
    }
}

console.table(arr)