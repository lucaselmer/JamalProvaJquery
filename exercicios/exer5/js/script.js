$( function (){

    var className=".btn-lg"
    var fadeTime=7000

    $(className).click( function () {
        var element= (this).closest(className).parent().parent()
        var elementDois= $(className).parent().parent()
        elementDois.toggle(fadeTime); 
        element.toggle(fadeTime);
    })
})