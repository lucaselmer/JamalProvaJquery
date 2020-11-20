$(  function (){
    composDesabilitados(true)
    $('#firstName').change( function () {
        if ($(firstName).val().length > 0) {
            composDesabilitados(false)
        }
        else {
            alert("É obrigatorio digitar algum caracter")
        }
    });
})
const composDesabilitados = function (parameter) {
    $('.form-control[id!=firstName], .custom-select, .custom-control-input').attr('disabled', parameter)
}