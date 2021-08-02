
/* function runFiveMiles() {
    console.log("Go for a five-mile run");
  } 

  function liftWeights() {
    console.log("Pump iron");
  }
  
  function swimFortyLaps() {
    console.log("Swim 40 laps");
  } 

  function Monday() {
    exerciseRoutine(liftWeights);
  } 

  function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  } 

  exerciseRoutine(() => console.log("Stretch! Work that core!")); 

  
function morningRoutine(exercise) {
  let breakfast;

  if (exercise === liftWeights) {
    breakfast = "protein bar";
  } else if (exercise === swimFortyLaps) {
    breakfast = "kale smoothie";
  } else {
    breakfast = "granola";
  }

  exerciseRoutine(exercise);

  // we could give this function a name if we wanted to, but since
  // it's only available _inside_ morningRoutine(), we don't need to
  return function () {
    console.log(`Nom nom nom, this ${breakfast} is delicious!`);
  };
} 

*/





// function doFirst() {
//     console.log("Do now");
//   } 

// function receivesAFunction(callback) {
//     doFirst();
//     callback();
// }

 

//   function today() {
//     return "hello"
//   }


// function returnsANamedFunction() {
//     doFirst();
//     return today 
// }


// function returnsAnAnonymousFunction(){
// return function () {
//     return "hello"
//   }
// }




function doFirst() {
  console.log("hello")
}

function receivesAFunction(callback){
  doFirst()
  callback();
}




