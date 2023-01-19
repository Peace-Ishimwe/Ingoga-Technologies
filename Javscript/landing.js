
const slider = document.querySelector('.slider')
const imageSlide = document.querySelectorAll('.images-slider')

 sliding = () =>{
    let index = 0

    imageSlide.forEach(Image => {
        imageSlide.classList.add('d-none')
    });
    
    index++
    slider[index].classList.remove('d-none')

    if(index >= slider.length){
        index = 0
    }
    setTimeout('sliding()', 1000)

}