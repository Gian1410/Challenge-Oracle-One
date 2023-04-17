const input = document.querySelector('#inputTexto');
const encriptar = document.querySelector('.encriptar');
const desencriptador = document.querySelector('.desencriptar');
const texto2 = document.querySelector('#texto2');


encriptar.addEventListener('click', ecriptar);
desencriptador.addEventListener('click', desencriptar)


function ecriptar() {
    const texto = input.value;
    
    var txtCifrado = texto
    .replaceAll(/e/igm,'enter')
    .replaceAll(/o/igm,'ober')
    .replaceAll(/i/igm,'imes')
    .replaceAll(/a/igm,'ai')
    .replaceAll(/u/igm,'ufat');

    document.getElementById('imgDer').style.display = "none";
    document.getElementById('texto').style.display = "none";

    cargar(txtCifrado);
}

function desencriptar() {
    const textoD = texto2.value;
    var txtDifrado = textoD.replaceAll(/enter/igm,'e')
    .replaceAll(/ober/igm,'o')
    .replaceAll(/imes/igm,'i')
    .replaceAll(/ai/igm,'a')
    .replaceAll(/ufat/igm,'u');
    cargar(txtDifrado)
    
}


function cargar(texto) {
    texto2.innerHTML = texto;
    texto.select();
    document.execCommand('copy');
    alert('Texto Copiado');
}