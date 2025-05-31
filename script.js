document.querySelector("#btnCalcular").addEventListener("click", (e) => {
    e.preventDefault();

    // Containers
    const valorGorjeta = document.querySelector("#valorGorjeta");
    const totalPagar = document.querySelector("#totalPagar");

    // Inputs
    const valorConta = document.querySelector("#valorConta");
    const percentual = document.querySelector("#percentual");

    // Numbers
    const numberValorConta = parseFloat(valorConta.value);
    const numberPercentual = parseFloat(percentual.value);

    if (valorConta.value === '' || percentual.value === ''){
        alert("Digite os campos!");
        limparCampos(valorConta, percentual, valorGorjeta, totalPagar);
        return;
    }

    if (isNaN(numberValorConta) || isNaN(numberPercentual)) {
        alert("Digite números válidos!");
        limparCampos(valorConta, percentual, valorGorjeta, totalPagar);
        return;
    }

    valorGorjeta.innerHTML = '';
    totalPagar.innerHTML = '';

    const gorjeta = (numberPercentual / 100) * numberValorConta;
    valorGorjeta.textContent = `O valor da gorjeta é: ${gorjeta}`;

    const total = numberValorConta + gorjeta;
    totalPagar.textContent = `O total da conta é: ${total}`;
})

function limparCampos (valorConta, percentual, valorGorjeta, totalPagar) {
    valorConta.value = '';
    percentual.value = '';
    valorGorjeta.textContent = '';
    totalPagar.textContent = '';
}