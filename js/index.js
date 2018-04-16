$('.menu-icon').click(function() {
    $('.menu').toggle("active");
});

$(()=>{
    let audio = new Audio()
    , setAudio = ($el)=>{
    $el.parents('#playList').find('.beat').removeClass('beat');
$el.addClass('beat');

audio.oncanplay = ()=>{
    audio.oncanplay = null;
    audio.play();
}

audio.src = $el.attr('href');
audio.load();

}
;

$('#playList div').on('click', (e)=>{
    e.preventDefault();

setAudio($(e.currentTarget));
}
);

}
);
