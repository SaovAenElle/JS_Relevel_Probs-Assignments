let p = ""
//First nested loop for creating the first half of the pattern 
for(let i = 1; i<=7; i++){
    for(let j = i; j<=7; j++){
        p+=(j+" ")
    }
    console.log(p)
    p = " ".repeat(i)
}

p = "" //Reinitialising p
//Second nested loop for creating the second half of the pattern
for(let i = 6; i>0; i--){
    p = " ".repeat(i-1)
    for(let j = i; j<=7; j++){
        p+=(j+" ")
    }
    console.log(p)
}