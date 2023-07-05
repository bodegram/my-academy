localStorage.setItem("background", "black")


const changeTheme = () =>{
    if(localStorage.getItem("background") == "black"){
        document.querySelector("body").style.background = "black"
        document.querySelector("body").style.color = "white"

        localStorage.setItem("background", "white")
        
    }
    else{
        localStorage.setItem("background", "white")
        document.querySelector("body").style.background = "white"
        document.querySelector("body").style.color = "black"
        localStorage.setItem("background", "black")
    }
}
