window.addEventListener( "scroll",()=>{
    const headersecond = document.querySelector(".container-header-second")
    const headerheight = document.querySelector(".header-second")
    if(window.scrollY>=40){
        headersecond.classList.add("scrolled")
        headerheight.classList.add("scrolled-height")
    }else{
        headersecond.classList.remove("scrolled")
        headerheight.classList.remove("scrolled-height")
    }
})