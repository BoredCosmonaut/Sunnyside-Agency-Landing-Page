document.getElementById("hamburber").addEventListener("click", function() {
    console.log("clicked")
    const hamburber = document.getElementById("hamburber-expand")
    const corner = document.getElementById("triangle")
    if(hamburber.style.display === "flex") {
        hamburber.style.display = "none"
    }
    else {
        hamburber.style.display = "flex"
    }
    
    
})