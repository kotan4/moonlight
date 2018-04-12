$('.menu-icon').click(function() {
    $('.menu').toggle("active");
});

audioPlayer();
function audioPlayer() {
    $("#audioPlayer")[0].src = $("#playList a")[0];
    $("#playList a").click(function(e) {
        e.preventDefault();
        $("#audioPlayer")[0].src = this;
        $("#audioPlayer")[0].play();
    });
}
;
const animationEnd = (function(el) {
        const animations = {
            animation: 'animationend',
            OAnimation: 'oAnimationEnd',
            MozAnimation: 'mozAnimationEnd',
            WebkitAnimation: 'webkitAnimationEnd',
        };

        for (const t in animations) {
            if (el.style[t] !== undefined) {
                return animations[t];
            }
        }

    }
)(document.createElement('div'));

$('.musicIcon').on('click', function() {
    $('.musicIcon')[0].src = this;
    $(this).addClass('animated pulse').one(animationEnd, function() {
        $(this).removeClass('animated pulse');

    });

});

// $(() => {
//     let audio = new Audio(),
//     setAudio = ($el) => {
//     $el.parents('#playList').find('.beat').removeClass('beat');
// $el.addClass('beat');
//
// audio.oncanplay = () => {
//     audio.oncanplay = null;
//     audio.play();
// }
//
// audio.src = $el.attr('href');
// audio.load();
//
// };
//
// $('a.musicIcon').on('click', (e) => {
//     e.preventDefault();
//
// setAudio($(e.currentTarget));
// });
//
// setAudio($('a.musicIcon').first());
// })
