let images = document.querySelectorAll('.image');

window.addEventListener("scroll", function () {
    let scrollY = (window.scrollY-540) / 5;
    images.forEach(img => {
        const dataDir = img.getAttribute("data-dir")
        const dataY = img.getAttribute("data-y")
        const size = (1000 - this.window.scrollY) / 100;
        if (dataY) {
            if (size >= 0) {
                img.style.transform = `translate${dataY}(${scrollY * dataDir}px) scale(${size / 9})`
            }
            
        } 
        else{
            img.style.transform = `translateX(${scrollY * dataDir}px)`
        }
    });
    
})


window.addEventListener("mousemove", function (e) {
    let x = (e.pageX - (window.innerWidth / 2 )) / 30;
    let y = (e.pageY - (window.innerHeight / 2 )) / 30 ;
    
    images.forEach(img => {
        const dataDir = img.getAttribute("data-dir")
        img.style.transform = `translate(${x * dataDir}px, ${y * dataDir}px)`
    });
})