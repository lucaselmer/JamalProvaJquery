$( function (){
    swapClass()
})

function swapClass() {
    $('a[role="button"]').click( function () {
        $('nav').toggleClass('fixed-top').toggleClass('fixed-bottom')
    })
}
