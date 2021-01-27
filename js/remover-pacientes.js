var pacientes = document.querySelectorAll('.paciente');


// pacientes.forEach(function(paciente, index) {
//    paciente.addEventListener('dblclick', function(el){
//    console.log('clicado ne linha ' + (index+1));
//        this.remove();
//    });
// });

var table = document.querySelector('table');

table.addEventListener('dblclick', function (event) {
   
    var target = event.target;
    var parentTarget = target.parentNode;

    parentTarget.classList.add('fade-out');

    setTimeout(function(){
        parentTarget.remove(); 
    }, 600);
});

