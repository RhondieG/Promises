// this runs through to with random math to see if the function is a success or failure, then returns resolve or reject//
let dropButteredToastOnFloor = (success, failure) => {
    console.log("oh no, I dropped my toast!");
    setTimeout( function(){
       var drop = Math.random();
       if (drop < 0.5) {
          console.log("Landed butter-side up!")
          success();
       } else {
          console.log("Landed butter-side down...")
          failure();
       }
    }, 2000);
 }
//my new promise//
 function dropToastPromisified(){
    return new Promise((resolve, reject) =>{
        dropButteredToastOnFloor(resolve, reject)
    })
}

 //If above is resolved it will return "success", (or else) return "error"
dropToastPromisified()
.then(() => {
    console.log('success!')
})
.catch(()=>{
    console.log('error')
})