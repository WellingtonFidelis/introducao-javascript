var helpers = {
    checkCustomer: function (paciente) {

            var erros = [];

            if (paciente.nome.length == 0){
                        erros.push("O nome não pode ser em branco");
                    }

            if (paciente.gordura.length == 0){
                        erros.push("A gordura não pode ser em branco");
                    }

            if (paciente.peso.length == 0){
                        erros.push("O peso não pode ser em branco");
                    }

            if (paciente.altura.length == 0){
                        erros.push("A altura não pode ser em branco");
                    }

            if (!validaPeso(paciente.peso)){
                        erros.push("Peso é inválido");
                    }

            if (!validaAltura(paciente.altura)){
                        erros.push("Altura é inválida");
                    }

            return erros;
    },
    clearFormInputsFields: function () {
        // document.querySelector('#nome').value = '';
        // document.querySelector('#peso').value = '';
        // document.querySelector('#altura').value = '';
        // document.querySelector('#gordura').value = '';    
        var form = document.querySelector('#form-add-customer');
        form.reset();
    },
    calculateImc: function (weight, height) {
        var result = (weight/(height*height)).toFixed(2);
        return result;
    },
    verifyValues: function (element, weight, height) {
        var imcResult = helpers.calculateImc(weight, height);

        if (weight < 0 || weight > 1000) {
        // resultField.textContent = 'Peso inválido';
        element.classList.add('invalid-data');
        return 'Peso inválido';
        } else if (height < 0 || height > 4) {
        // resultField.textContent = 'Altura inválida';
        element.classList.add('invalid-data');
        return 'Altura inválida';
        } else {
      // currentImc.textContent = Math.round(imcResult);
      // resultField.textContent = imcResult.toFixed(2);
        return imcResult;
    }
  },
    makeTd: function (data, className) {
        var td = document.createElement('td');
        td.textContent = data;
        td.classList.add(className);
        return td;
    },
    addNewRowTableCustomer: function() {
    // var nameForm = document.querySelector('#nome').value;
    // var weightForm = document.querySelector('#peso').value;
    // var heightForm = document.querySelector('#altura').value;
    // var fatForm = document.querySelector('#gordura').value;


        var newTableRow = document.createElement('tr');
        newTableRow.classList.add('paciente');
    // var nameTd = document.createElement('td');
    // var weightTd = document.createElement('td');
    // var heightTd = document.createElement('td');
    // var fatTd = document.createElement('td');
    // var imcTd = document.createElement('td');

        var customerRegister = new Object();
        customerRegister.name = document.querySelector('#nome').value;
        customerRegister.weight = document.querySelector('#peso').value;
        customerRegister.height = document.querySelector('#altura').value;
        customerRegister.fat = document.querySelector('#gordura').value;
        // customerRegister.imc = helpers.verifyValues(newTableRow, customerRegister.weight, customerRegister.height);
        customerRegister.imc = helpers.calculateImc(customerRegister.weight, customerRegister.height); 

        console.table(customerRegister);
        console.log(customerRegister);
        

    // nameTd.textContent = customerRegister.name;
    // weightTd.textContent = customerRegister.weight;
    // heightTd.textContent = customerRegister.height;
    // fatTd.textContent = customerRegister.fat;
    // imcTd.textContent = customerRegister.imc;
        
        var nameTd = helpers.makeTd(customerRegister.name, 'info-name');
        var weightTd = helpers.makeTd(customerRegister.weight, 'info-peso');
        var heightTd = helpers.makeTd(customerRegister.height, 'info-altura');
        var fatTd = helpers.makeTd(customerRegister.fat, 'info-gordura');
        var imcTd = helpers.makeTd(customerRegister.imc, 'info-imc');


        if (customerRegister.weight < 0 || customerRegister.weight > 1000) {
            document.querySelector('#message-error').textContent = 'Peso inválido';
            document.querySelector('.message-block').style.display = 'flex';
            return
        } else if (customerRegister.height < 0 || customerRegister.height > 4) {
            document.querySelector('#message-error').textContent = 'Altura inválida';
            document.querySelector('.message-block').style.display = 'flex';
            return
        } else {
            document.querySelector('.message-block').style.display = 'none';
        }

        newTableRow.appendChild(nameTd);
        newTableRow.appendChild(weightTd);
        newTableRow.appendChild(heightTd);
        newTableRow.appendChild(fatTd);
        newTableRow.appendChild(imcTd);

        var tableCustomer = document.querySelector('#tabela-pacientes');

        tableCustomer.appendChild(newTableRow);

        // imcTd.textContent = helpers.calculateImc(customerRegister.weight, customerRegister.height);

        helpers.clearFormInputsFields();

    }
};

var titlePage = document.querySelector('.title');
titlePage.textContent = 'Wellington Nutricionista';

var messageBlock = document.querySelector('.message-block');

var customers = document.querySelectorAll('.paciente');

var buttonAddCustomer = document.querySelector('#adicionar-paciente');

customers.forEach(function (element, index) {
  //console.log(element.children[0]);
  // console.log(element.querySelector('.info-nome').textContent);
  // console.log(element.querySelector('.info-peso').textContent);

    var currentName = element.querySelector('.info-nome').textContent;
    var currentWeight = element.querySelector('.info-peso').textContent;
    var currentHeight = element.querySelector('.info-altura').textContent;
    var currentFat = element.querySelector('.info-gordura').textContent;
    var currentImc = element.querySelector('.info-imc');

    helpers.verifyValues(element, currentWeight, currentHeight);
    var resultImc = helpers.calculateImc(currentWeight, currentHeight);
    currentImc.textContent = resultImc;
    console.log('imc ' + resultImc);
});

buttonAddCustomer.addEventListener('click', function (event) {
    event.preventDefault();

    helpers.addNewRowTableCustomer(); 

});


document.addEventListener('load', function (event) {
    console.log('DOM loaded.');
});
