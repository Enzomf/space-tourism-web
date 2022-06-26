
const menuIc = document.getElementById("menuIcon")

menuIc.addEventListener("click", menu)

document.getElementById("logo").addEventListener("click", () => { window.location.href = "index.html" })

function redrec(c) {
    switch (c) {
        case 1:
            window.location.href = "index.html"

            break

        case 2:
            window.location.href = "destination.html"
            break

        case 3:
            window.location.href = "crew.html"
            break

        case 4:
            window.location.href ="tecnology.html"
        break
    }
}

function menu() {

    document.getElementById("menuIcon").classList.toggle("change")

    let control = document.getElementById("menu")

    if (control.style.display == "") {

        control.style.animationName = "menuOpen"
        control.style.display = "block"
        document.body.style.overflow = "hidden"
    } else {
        // control.style.display = ""
        control.style.animationName = "menuClose"
        document.body.style.overflow = "visible"
        const animationControl = setTimeout(function () { control.style.display = "" }, 500)
    }
}

function destin(actualDestin) {

    document.getElementById("img").style.animationDuration = "1s"
    switch (actualDestin) {

        case 1:
            document.querySelectorAll(".Moon").forEach(a => a.style.display = "initial");
            document.querySelectorAll(".Mars").forEach(a => a.style.display = "none");
            document.querySelectorAll(".Europa").forEach(a => a.style.display = "none");
            document.querySelectorAll(".Titan").forEach(a => a.style.display = "none");

            document.getElementById("moon").className = "selected"
            document.getElementById("mars").className = ""
            document.getElementById("europa").className = ""
            document.getElementById("titan").className = ""


            document.getElementById("img").src = "assets/destination/image-moon.png"
            document.getElementById("img").style.animationName = "menuOpen"

            const a = setTimeout(function () { document.getElementById("img").style.animationName = "" }, 1000)
            break


        case 2:
            document.querySelectorAll(".Moon").forEach(a => a.style.display = "none");
            document.querySelectorAll(".Mars").forEach(a => a.style.display = "initial");
            document.querySelectorAll(".Europa").forEach(a => a.style.display = "none");
            document.querySelectorAll(".Titan").forEach(a => a.style.display = "none");

            document.getElementById("moon").className = ""
            document.getElementById("mars").className = "selected"
            document.getElementById("europa").className = ""
            document.getElementById("titan").className = ""


            document.getElementById("img").src = "assets/destination/image-mars.png"
            document.getElementById("img").style.animationName = "menuOpen"

            const b = setTimeout(function () { document.getElementById("img").style.animationName = "" }, 1000)
            break

        case 3:
            document.querySelectorAll(".Moon").forEach(a => a.style.display = "none");
            document.querySelectorAll(".Mars").forEach(a => a.style.display = "none");
            document.querySelectorAll(".Europa").forEach(a => a.style.display = "initial");
            document.querySelectorAll(".Titan").forEach(a => a.style.display = "none");

            document.getElementById("moon").className = ""
            document.getElementById("mars").className = ""
            document.getElementById("europa").className = "selected"
            document.getElementById("titan").className = ""


            document.getElementById("img").src = "assets/destination/image-europa.png"
            document.getElementById("img").style.animationName = "menuOpen"

            const c = setTimeout(function () { document.getElementById("img").style.animationName = "" }, 1000)
            break

        case 4:
            document.querySelectorAll(".Moon").forEach(a => a.style.display = "none");
            document.querySelectorAll(".Mars").forEach(a => a.style.display = "none");
            document.querySelectorAll(".Europa").forEach(a => a.style.display = "none");
            document.querySelectorAll(".Titan").forEach(a => a.style.display = "initial");

            document.getElementById("moon").className = ""
            document.getElementById("mars").className = ""
            document.getElementById("europa").className = ""
            document.getElementById("titan").className = "selected"


            document.getElementById("img").src = "assets/destination/image-titan.png"
            document.getElementById("img").style.animationName = "menuOpen"

            const d = setTimeout(function () { document.getElementById("img").style.animationName = "" }, 1000)
            break




    }






}


function crew(actualCrew){

    switch(actualCrew){
        case 1:
        
        document.getElementById("imgCrew").src = "./assets/crew/image-douglas-hurley.png"
        
        document.getElementById("a").className = "SelectorCrew selectedCrew"
        document.getElementById("commander").style.display ="block"
        
        document.getElementById("b").className = "SelectorCrew"
        document.getElementById("pilot").style.display ="none"
        
        document.getElementById("c").className = "SelectorCrew"
        document.getElementById("engineer").style.display ="none"
        
        document.getElementById("d").className = "SelectorCrew"
        document.getElementById("specialist").style.display ="none"
       
        break

        case 2:

       document.getElementById("imgCrew").src = "./assets/crew/image-victor-glover.png"
        
        document.getElementById("a").className = "SelectorCrew"
        document.getElementById("commander").style.display ="none"
        
        document.getElementById("b").className = "SelectorCrew selectedCrew"
        document.getElementById("pilot").style.display ="initial"

        
        document.getElementById("c").className = "SelectorCrew"
        document.getElementById("engineer").style.display ="none"

        
        document.getElementById("d").className = "SelectorCrew"
        document.getElementById("specialist").style.display ="none"



        break

        case 3:
            document.getElementById("imgCrew").src = "./assets/crew/image-anousheh-ansari.png"
        
            document.getElementById("a").className = "SelectorCrew"
            document.getElementById("commander").style.display ="none"

            
            document.getElementById("b").className = "SelectorCrew "
            document.getElementById("pilot").style.display ="none"

            
            document.getElementById("c").className = "SelectorCrew selectedCrew"
            document.getElementById("engineer").style.display ="initial"

            
            document.getElementById("d").className = "SelectorCrew"
            document.getElementById("specialist").style.display ="none"

            break

            case 4:
                document.getElementById("imgCrew").src = "./assets/crew/image-mark-shuttleworth.png"

        
                document.getElementById("a").className = "SelectorCrew"
                document.getElementById("commander").style.display ="none"

                
                document.getElementById("b").className = "SelectorCrew "
                document.getElementById("pilot").style.display ="none"

                
                document.getElementById("c").className = "SelectorCrew "
                document.getElementById("engineer").style.display ="none"

                
                document.getElementById("d").className = "SelectorCrew selectedCrew"
                document.getElementById("specialist").style.display ="initial"

        
        
                break

    }

}


