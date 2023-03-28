$(function(){
    $(".slider").slick({
        infinite: true,
        prevArrow: '<img src="assets/Btn-Esq.svg" class="btnSlider" id="btnEsq" alt="Anterior">',
        nextArrow: '<img src="assets/Btn-Dir.svg" class="btnSlider" id="btnDir" alt="Proximo">',
        dots: true,
        dotsclass: "#dots"
    });
})

$(function(){
    $(".slider2").slick({
        slidesToScroll: 2,
        slidesToShow: 6,
        infinite: true,
        prevArrow: '<img src="assets/Btn-Esq.svg" class="btnSlider2" id="btnEsq2" alt="Anterior">',
        nextArrow: '<img src="assets/Btn-Dir.svg" class="btnSlider2" id="btnDir2" alt="Proximo">',
        
    });
})

$(function(){
    $(".slider3").slick({
        slidesToScroll: 2,
        autoplay: true,
        slidesToShow: 4,
        infinite: true,
        prevArrow: '<img src="assets/Btn-Esq.svg" class="btnSlider3" id="btnEsq3" alt="Anterior">',
        nextArrow: '<img src="assets/Btn-Dir.svg" class="btnSlider3" id="btnDir3" alt="Proximo">',
    });
})

$(function(){
    $(".slider4").slick({
        slidesToScroll: 1,
        slidesToShow: 3,
        infinite: true,
        centerMode: true,
        prevArrow: '<img src="assets/Btn-Esq.svg" class="btnSlider3" id="btnEsq4" alt="Anterior">',
        nextArrow: '<img src="assets/Btn-Dir.svg" class="btnSlider3" id="btnDir4" alt="Proximo">',
    });
})

const videoYtb = document.getElementById('videoYtb');

videoYtb.addEventListener('click' , YtbPlay);

function YtbPlay(evt) {
    evt.currentTarget.removeEventListener('click', YtbPlay);
    evt.currentTarget.innerHTML = `<iframe class="p-2 rounded-5" width="560" height="315" src="https://www.youtube.com/embed/${evt.currentTarget.dataset.id}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
}