const flightHandlerFunction = document.querySelector("#activate-flight");
flightHandlerFunction.addEventListener("click", function(){
    document.querySelector("#flight").classList.toggle("disabled")
    document.querySelector("#flight").classList.toggle("enabled")
})



document.querySelector("#activate-mindreading").addEventListener("click", function(){
    document.querySelector("#mindreading").classList.toggle("disabled")
    document.querySelector("#mindreading").classList.toggle("enabled")
})
document.querySelector("#activate-xray").addEventListener("click", function(){
    document.querySelector("#xray").classList.toggle("disabled")
    document.querySelector("#xray").classList.toggle("enabled")
})

const activateAll = document.querySelector("#activate-all" );
activateAll.addEventListener("click", function(){
    var activateFunction = document.querySelectorAll(".power")
    for(i=0; i < activateFunction.length; i++){
        activateFunction[i].classList.add("enabled")}
    })
    
    const deactivateAll = document.querySelector("#deactivate-all");
    deactivateAll.addEventListener("click", function(){
        var deactivateFunction = document.querySelectorAll(".power")
        for(i=0; i < deactivateFunction.length; i++){
            deactivateFunction[i].classList.remove("enabled")
        }
    })