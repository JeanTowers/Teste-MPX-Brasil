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
        // autoplay: true,
        slidesToShow: 4,
        infinite: true,
        prevArrow: '<img src="assets/Btn-Esq.svg" class="btnSlider3" id="btnEsq3" alt="Anterior">',
        nextArrow: '<img src="assets/Btn-Dir.svg" class="btnSlider3" id="btnDir3" alt="Proximo">',
    });
})

$(function(){
    $(".slider4").slick({
        slidesToScroll: 1,
        // autoplay: true,
        slidesToShow: 3,
        infinite: true,
        prevArrow: '<img src="assets/Btn-Esq.svg" class="btnSlider3" id="btnEsq3" alt="Anterior">',
        nextArrow: '<img src="assets/Btn-Dir.svg" class="btnSlider3" id="btnDir3" alt="Proximo">',
    });
})

