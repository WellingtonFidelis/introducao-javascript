var inputTableSearch = document.querySelector('#inputTableSearch');

inputTableSearch.addEventListener('input', function(event){
    this.value;

    var pacientes = document.querySelectorAll('.paciente');

    pacientes.forEach(function(paciente, index){
        var tdName = paciente.querySelector('.info-nome');
        var name = tdName.textContent;
        console.log(name);
    });
});
