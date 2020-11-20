$( function(){
    // Slide up 
    $('a[role="button"').click(function(){
        $("row").slideUp();
        $(this).parent().parent().children('.expandir-texto').toggle(500)
    });
   
});