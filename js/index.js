$('.menu-icon').click(function(){
    $('.menu').toggle("active");
});


audioPlayer();
function audioPlayer() {
    $("#audioPlayer")[0].src = $("#playList a")
    [0];
    $("#audioPlayer")[0].play();
    $("#playList a").click(function(e){
        e.preventDefault();
        $("#audioPlayer")[0].src = this;
        $("#audioPlayer")[0].play();
    })
    
}