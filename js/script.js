
const menuIc = document.getElementById("menuIcon")

menuIc.addEventListener("click", menu)


function redrec(c){
    switch (c){
        case 1:
            window.location.href = "index.html"

            break

            case 2:
                window.location.href ="destination.html"
                break
    }
}



function menu() {

    document.getElementById("menuIcon").classList.toggle("change")

    console.log(document.getElementById("menuIcon").classList)

    let control = document.getElementById("menu")

    if (control.style.display == "") {

        control.style.animationName = "menuOpen"
        control.style.display = "block"
        document.body.style.overflow = "hidden"
    } else {
        // control.style.display = ""
        control.style.animationName = "menuClose"
        document.body.style.overflow = "visible"
        const animationControl = setTimeout(function () { control.style.display = "" }, 1000)
    }
}


function destin(actualDestin) {
    
    document.getElementById("img").style.animationDuration ="1s"
switch (actualDestin){

    case 1: 
    document.querySelectorAll(".Moon").forEach(a=>a.style.display = "initial");
    document.querySelectorAll(".Mars").forEach(a=>a.style.display = "none");
    document.querySelectorAll(".Europa").forEach(a=>a.style.display = "none");
    document.querySelectorAll(".Titan").forEach(a=>a.style.display = "none");

    document.getElementById("moon").className ="selected"
    document.getElementById("mars").className =""
    document.getElementById("europa").className =""
    document.getElementById("titan").className =""


    document.getElementById("img").src = "assets/destination/image-moon.png"
    document.getElementById("img").style.animationName ="menuOpen"

    const a = setTimeout(function(){ document.getElementById("img").style.animationName =""}, 1000)
    break


    case 2: 
    document.querySelectorAll(".Moon").forEach(a=>a.style.display = "none");
    document.querySelectorAll(".Mars").forEach(a=>a.style.display = "initial");
    document.querySelectorAll(".Europa").forEach(a=>a.style.display = "none");
    document.querySelectorAll(".Titan").forEach(a=>a.style.display = "none");

    document.getElementById("moon").className =""
    document.getElementById("mars").className ="selected"
    document.getElementById("europa").className =""
    document.getElementById("titan").className =""


    document.getElementById("img").src = "assets/destination/image-mars.png"
    document.getElementById("img").style.animationName ="menuOpen"

    const b = setTimeout(function(){ document.getElementById("img").style.animationName =""}, 1000)
    break

    case 3:
        document.querySelectorAll(".Moon").forEach(a=>a.style.display = "none");
        document.querySelectorAll(".Mars").forEach(a=>a.style.display = "none");
        document.querySelectorAll(".Europa").forEach(a=>a.style.display = "initial");
        document.querySelectorAll(".Titan").forEach(a=>a.style.display = "none");
    
        document.getElementById("moon").className =""
        document.getElementById("mars").className =""
        document.getElementById("europa").className ="selected"
        document.getElementById("titan").className =""
    
    
        document.getElementById("img").src = "assets/destination/image-europa.png"
        document.getElementById("img").style.animationName ="menuOpen"
    
        const c = setTimeout(function(){ document.getElementById("img").style.animationName =""}, 1000)
        break

        case 4:
            document.querySelectorAll(".Moon").forEach(a=>a.style.display = "none");
            document.querySelectorAll(".Mars").forEach(a=>a.style.display = "none");
            document.querySelectorAll(".Europa").forEach(a=>a.style.display = "none");
            document.querySelectorAll(".Titan").forEach(a=>a.style.display = "initial");
        
            document.getElementById("moon").className =""
            document.getElementById("mars").className =""
            document.getElementById("europa").className =""
            document.getElementById("titan").className ="selected"
        
        
            document.getElementById("img").src = "assets/destination/image-titan.png"
            document.getElementById("img").style.animationName ="menuOpen"
        
            const d = setTimeout(function(){ document.getElementById("img").style.animationName =""}, 1000)
            break
    
        


}


   

   

}
