function scroollTo (div){
    $('html, body'). animate({
        scrollTop: $("#"+div).offset().top
    }, 'slow');
}