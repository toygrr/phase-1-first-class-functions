// function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
//   }

function receivesAFunction(callBack){
    callBack()   
}

function returnsANamedFunction(){
    return function something(){
        console.log("what am I doing");
    }
}

function returnsAnAnonymousFunction(){
    return function(){
    }
}