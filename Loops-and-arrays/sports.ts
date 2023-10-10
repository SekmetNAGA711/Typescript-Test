let sportsOne: string[] = ["Golf", "cricket", "tennis", "swimming"];

// for(let i=0; i<sportsOne.length; i++ ) {
//     console.log(sportsOne[i]);
// }

for(let tempSport of sportsOne) {
    if(tempSport == "cricket"){
    console.log(tempSport + "<<<< My Favorite!");
    } else {
        console.log(tempSport)
    }
    
}