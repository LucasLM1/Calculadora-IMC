const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){
        
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if(valorIMC < 18.5){
            classificacao = "abaixo do peso."
        }else if(valorIMC < 25){
            classificacao = "com peso ideal. Parabéns!"
        }else if (valorIMC < 30){
            classificacao = 'um pouco acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade de 1.º grau.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade 2.º grau.';
        }else {
            classificacao = 'com obesidade 3.º grau. Cuidado com seu peso!';
        }
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

    }else{
        resultado.textContent = 'Preencha todos os campos!';
    }
}

//nome.value = "luquinhas" //serve para acessar o valor dentro do html

calcular.addEventListener('click', imc);