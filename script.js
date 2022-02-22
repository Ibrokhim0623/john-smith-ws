let sliderIndex = 1;
showSlider(sliderIndex);

function currentSlider(n){
    showSlider(sliderIndex = n);
}


function showSlider(n){
    let i;
    let slider = document.getElementsByClassName("container");
    let dots = document.getElementsByClassName("dot");

    if(n > slider.length){
        sliderIndex = 1;
    }

    if(n < 1){
        sliderIndex = slider.length;
    }

    for(i = 0; i < slider.length; i++){
        slider[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "");
    }

    slider[sliderIndex - 1].style.display = "block";
    dots[sliderIndex - 1].classList += " active";
}