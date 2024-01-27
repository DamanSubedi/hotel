


let navToggle = document.querySelector(".nav-toggle");
let linksContainer = document.querySelector(".linksContainer");
let links = document.querySelector(".links")



navToggle.addEventListener("click", function(){
    let linksHeight = links.getBoundingClientRect().height;
    let linksContainerHeight = linksContainer.getBoundingClientRect().height;
    if(linksContainerHeight === 0){

        linksContainer.style.height = `${linksHeight}px`

        console.log(linksHeight)

    }else{
        linksContainer.style.height = 0
    }

})


//setting up dynamic date in footer section

let date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear()

console.log(date)









