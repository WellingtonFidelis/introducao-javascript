var inputTableSearch = document.querySelector('#inputTableSearch');

inputTableSearch.addEventListener('input', function(event){
    var pacientes = document.querySelectorAll('.paciente');

    if (this.value.length > 0) {
        console.log('was clicked');
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdName = paciente.querySelector('.info-nome');
            var name = tdName.textContent;
            var expressao = new RegExp(this.value, 'i');
            console.log(name);
            // if (name != this.value) {
            if (!expressao.test(name)) {
                paciente.classList.add('invisible');
            } else {
                paciente.classList.remove('invisible');
            } 
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove('invisible');
        }
    }
});
