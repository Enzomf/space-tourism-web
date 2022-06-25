
const menuIc = document.getElementById("menuIcon")

menuIc.addEventListener("click", menu)

function menu(){

    document.getElementById("menuIcon").classList.toggle("change")

    console.log(document.getElementById("menuIcon").classList)

    let control = document.getElementById("menu")

    if (control.style.display == ""){

        control.style.animationName ="menuOpen"
        control.style.display ="block"
        document.body.style.overflow ="hidden"
    }else{
        // control.style.display = ""
        control.style.animationName="menuClose"
        document.body.style.overflow ="visible"
        const animationControl= setTimeout(function(){control.style.display =""}, 1000)
    }
}
