$(function(){
    $(".slider").slick({
        infinite: true,
        prevArrow: '<img src="assets/Btn-Esq.svg" class="btnSlider" id="btnEsq" alt="Anterior">',
        nextArrow: '<img src="assets/Btn-Dir.svg" class="btnSlider" id="btnDir" alt="Proximo">',
        dots: true,
        dotsclass: "#dots",
        responsive: [
            {
            breakpoint: 1200,
                settings: {
                    rows: 1,
                    slidesToShow: 1,
                }
            },
            {
            breakpoint: 992,
                settings: {
                    rows:1,
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                }
            },
            {
            breakpoint: 768,
                settings: {
                    rows: 1,
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                }
            }
        ]
    });
})

$(function(){
    $(".slider2").slick({
        slidesToScroll: 2,
        slidesToShow: 6,
        infinite: true,
        prevArrow: '<img src="assets/Btn-Esq.svg" class="btnSlider2" id="btnEsq2" alt="Anterior">',
        nextArrow: '<img src="assets/Btn-Dir.svg" class="btnSlider2" id="btnDir2" alt="Proximo">',
        responsive: [
            {
            breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
            breakpoint: 992,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                }
            },
            {
            breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                }
            }
        ]
        
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
        responsive: [
            {
            breakpoint: 1200,
                settings: {
                    arrows: true,
                    slidesToShow: 4,
                }
            },
            {
            breakpoint: 992,
                settings: {
                    dots: true,
                    slidesToShow: 3,
                }
            },
            {
            breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                }
            }
        ]
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
        responsive: [
            {
            breakpoint: 1200,
                settings: {
                    arrows: true,
                    slidesToShow: 3,
                }
            },
            {
            breakpoint: 992,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                    centerMode: false,
                }
            },
            {
            breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                }
            }
        ]
    });
})

const videoYtb = document.getElementById('videoYtb');

videoYtb.addEventListener('click' , YtbPlay);

function YtbPlay(evt) {
    evt.currentTarget.removeEventListener('click', YtbPlay);
    evt.currentTarget.innerHTML = `<iframe class="p-2 rounded-5" width="560" height="315" src="https://www.youtube.com/embed/${evt.currentTarget.dataset.id}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
}