var buttonAdd = document.querySelector('#buscar-paciente');

buttonAdd.addEventListener('click', function () {
    // console.log('buscando pacientes');
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    xhr.addEventListener('load', function () {
        var erroSpan = document.querySelector('#erro-ajax');
        if (xhr.status == 200) {

            erroSpan.classList.add('invisible');
            // console.log(xhr.responseText);
            var response = xhr.responseText;
            var pacientes = JSON.parse(response);
            // console.log(pacientes);

            pacientes.forEach(function (paciente) {
                adicionaPacienteTabela(paciente); 
            }); 
        } else {
            console.log('GET API not worked. ' + xhr.status);
            console.log(xhr.responseText);
            
            erroSpan.classList.remove('invisible');
        }
    });

    xhr.send();
});
