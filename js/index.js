$('.menu-icon').click(function(){
    $('.menu').toggle("active");
});


audioPlayer();
function audioPlayer() {
    $("#audioPlayer")[0].src = $("#playList a")
    [0];
    // $("#audioPlayer")[0].play();
    $("#playList a").click(function(e){
        e.preventDefault();
        $("#audioPlayer")[0].src = this;
        $("#audioPlayer")[0].play();
    })
    
}


var animationEnd = (function(el) {
    var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
    };

    for (var t in animations) {
        if (el.style[t] !== undefined) {
            return animations[t];
        }
    }

})(document.createElement('div'));

$('.musicIcon').on('click', function () {
    $('.musicIcon')[0].src = this;
        $(this).addClass('animated pulse').one(animationEnd,
            function () {
                $(this).removeClass('animated pulse');

            });

    });

