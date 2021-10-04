const calcular = document.getElementById('calcular');
let body = document.querySelector('body');

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
            body.style.backgroundColor = '#fff'; //muda o background
            body.style.transition = '.55s';
        }else if(valorIMC < 25){
            classificacao = "com peso ideal. Parabéns!"
            body.style.backgroundColor = '#00FF7F'; //muda o background
            body.style.transition = '.55s';
        }else if (valorIMC < 30){
            classificacao = 'um pouco acima do peso.';
            body.style.backgroundColor = '#FFFF00'; //muda o background
            body.style.transition = '.55s';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade de 1.º grau.';
            body.style.backgroundColor = '#FFD700'; //muda o background
            body.style.transition = '.55s';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade 2.º grau.';
            body.style.backgroundColor = '#FF4500'; //muda o background
            body.style.transition = '.55s';
        }else {
            classificacao = 'com obesidade 3.º grau. Cuidado com seu peso!';
            body.style.backgroundColor = '#FF0000'; //muda o background
            body.style.transition = '.55s';
        }
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

    }else{
        resultado.textContent = 'Preencha todos os campos!';
    }
}

//nome.value = "luquinhas" //serve para acessar o valor dentro do html

calcular.addEventListener('click', imc);