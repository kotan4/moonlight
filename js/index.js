$('.menu-icon').click(function() {
    $('.menu').toggle("active");
});

$(() => {
    // слушаем клик по ссылке вверху меню
    $('.menu a').click(function(e){
    e.preventDefault(); // эвейдим обычное поведение браузера на клик

    // ищем соседей с классом и удаляем класс
    $('.menu').find('.active').removeClass('active');
    $(e.currentTarget).addClass('active'); // добавляем класс текущему элементу
});

// элемент аудио
let audio = new Audio(),
    $play = $('[data-btn="play"]'), // <div data-btn="play">play</div>
    $pause = $('[data-btn="pause"]');  // <div data-btn="pause">pause</div>

$play.addClass('hidden');
$pause.addClass('hidden');




// ждем клик по кнопке плей
$play.on('click', function () {
    $play.addClass('hidden'); // прячем плей
    $pause.removeClass('hidden'); // показываем паузу

    audio.play();
});

// ждем клик по кнопке пауза
$pause.on('click', function () {
    $pause.addClass('hidden'); // прячем паузу
    $play.removeClass('hidden'); // показываем плей

    audio.pause();
});

// следим за кликом по кнопкам
$('#playList div').on('click', (e) => {
    e.preventDefault(); // эвейдим обычное поведение браузера на клик

// получаем объект jQuery для текущей цели клика
let $el = $(e.currentTarget);

// ищем все элементы с классом и убираем его
$el.parents('#playList').find('.beat').removeClass('beat');
$el.addClass('beat');// добавляем текущему элементу класс

// добавляем событие, когда аудио будет готово играть музыку - включаем плей
audio.oncanplay = () => {
    $pause.removeClass('hidden');
    audio.oncanplay = null;
    audio.play();
};


// из текущего элемента читаем ссылку из атрибута href и передаём её в аудио
audio.src = $el.attr('href');

// заставляем аудио загружать файл
audio.load();
});



});