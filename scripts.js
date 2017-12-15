var article;

$('header a').click(function () {
    var lien = this.href;
    lien = lien.substr(lien.lastIndexOf('#'));
    $(lien).children('.content').delay(100).slideDown(1000, anime(lien.substr(1,lien.length)));
});

$('article .title').click(function () {
    if ($(this).parent().children('.content').is(':visible')) {
        $(this).parent().children('.content').slideUp(1000);
    } else {
        article = $(this).parent().attr('id');
        $(this).parent().children('.content').slideDown(1000, anime(article));
    }
});

$('article .title').mouseover(function () {
    $(this).children('h2').css('color', '#8FB7C0');
});

$('article .title').mouseout(function () {
    $(this).children('h2').css('color', '#296478');
});

$(window).scroll(function () {
    if ($(window).scrollTop() === 0) {
        $('#backToUp').fadeOut(200);
    }
    else {
        $('#backToUp').fadeIn(200);
    }
});

$('#backToUp').click(function () {
    $('section article').children('.content').slideUp(500);
});

$('a[href^="#"]').click(function () {
    var id = $(this).attr("href");
    var offset = $(id).offset().top;
    $('html, body').animate({scrollTop: offset}, 500);
    return false;
});

//Annimation du titre
$(window).on("load", function() {
    var y = 0, i = 1;
    var h2= ["Developpeur", "BTS SIO", "Java", "Web", "Dijon", "Lyon"];

    setInterval(function(){
        var text = "Alexis Favier"
        $('header h1').append(text.substring(y, i));
        y = i;
        i++
    }, 100);

    setInterval(function () {
        $('header h2').text(h2[Math.round(Math.random()*6)]);
        $('header h2').animate({fontSize: '6em'}, 500).delay(1500).animate({top: '80%'}, 500);
        $('header h2').animate({fontSize: '0em', top: '52%', left: '48%'}, 0);
    }, 3000);
});

//Annimation des articles
function anime(article){
    if(article == 'competences') {
        var largeur, time;
        $('.progress').each(function () {
            time = (Math.random() + 0.5) * 2000;
            largeur = $(this).parent().parent().children('p:last-child').text();
            $(this).width(0);
            $(this).animate({width: largeur}, time);
        });
    }
}


